import React from "react";
import NavBar from "../organisms/NavBar";
import LoginSection from "../organisms/LoginSection";

const LoginTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-100  rounded-md shadow-md">
        <NavBar />
        <LoginSection />
      </div>
    </div>
  );
};

export default LoginTemplate;
