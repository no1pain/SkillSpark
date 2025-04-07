import React, { createContext, useContext, useState, useEffect } from "react";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export type UserRole = "creator" | "learner";

interface UserData {
  role: UserRole;
  name: string;
  email: string;
}

interface AuthContextProps {
  currentUser: User | null;
  userData: UserData | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<User>;
  signUp: (
    email: string,
    password: string,
    userData: UserData
  ) => Promise<User>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        try {
          setCurrentUser(user);
          if (user) {
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
              setUserData(userDoc.data() as UserData);
            }
          } else {
            setUserData(null);
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError(
            err instanceof Error ? err.message : "Unknown error occurred"
          );
        } finally {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    } catch (err) {
      console.error("Error setting up auth listener:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string): Promise<User> => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  };

  const signUp = async (
    email: string,
    password: string,
    userData: UserData
  ): Promise<User> => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await setDoc(doc(db, "users", response.user.uid), userData);
    return response.user;
  };

  const signOut = () => {
    return firebaseSignOut(auth);
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const value = {
    currentUser,
    userData,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
