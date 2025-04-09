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
  uid?: string;
  createdAt?: string;
  profilePicture?: string;
  bio?: string;
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
  const [loading, setLoading] = useState(true);

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
        } finally {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    } catch (err) {
      console.error("Error setting up auth listener:", err);
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
    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        ...userData,
        createdAt: new Date().toISOString(),
        uid: userCredential.user.uid,
      });

      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      if (!userDoc.exists()) {
        throw new Error("Failed to save user data to Firestore");
      }

      setUserData(userDoc.data() as UserData);

      return userCredential.user;
    } catch (error) {
      if (userCredential?.user) {
        try {
          console.error("Error saving user data, deleting auth user:", error);
          await userCredential.user.delete();
        } catch (deleteError) {
          console.error(
            "Error deleting auth user after Firestore failure:",
            deleteError
          );
        }
      }
      throw error;
    }
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
