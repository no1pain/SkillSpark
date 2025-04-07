import { UserRole } from "../../app/context/AuthContext";

export const getRoleStyles = (role?: UserRole) => {
  if (role === "learner") {
    return {
      color: "white",
      backgroundColor: "#4da3ff",
      padding: "4px 12px",
      borderRadius: "16px",
      fontWeight: 500,
    };
  } else if (role === "creator") {
    return {
      color: "white",
      backgroundColor: "#ff4d4d",
      padding: "4px 12px",
      borderRadius: "16px",
      fontWeight: 500,
    };
  }
  return {
    color: "#333333",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: "4px 12px",
    borderRadius: "16px",
    fontWeight: 500,
  };
};

export const getRoleColor = (role?: UserRole) => {
  if (role === "learner") return "#4da3ff";
  if (role === "creator") return "#ff4d4d";
  return "#e0e0e0";
};
