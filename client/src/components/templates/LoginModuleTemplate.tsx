import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import NavBar from "../organisms/NavBar";
import LoginSection from "../organisms/LoginSection";

const LoginModuleTemplate: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/modules");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-100 rounded-md shadow-md">
         <NavBar />
        <LoginSection />
      </div>
    </div>
  );
};

export default LoginModuleTemplate;