import React from "react";

interface BackgroundProviderProps {
  children: React.ReactNode;
}

const BackgroundProvider: React.FC<BackgroundProviderProps> = ({
  children,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        minHeight: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundProvider;
