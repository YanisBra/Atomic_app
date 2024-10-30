import React from "react";
import LoginForm from "../molecules/LoginForm";
import CompanyInfo from "../molecules/CompanyInfo";

const LoginSection: React.FC = () => {
  return (
    <section className="flex w-full max-w-4xl bg-gray-100 p-10 rounded-md shadow-md justify-between items-center">
      <div className="w-1/2 pr-8">
        <h2 className="text-xl font-bold mb-4">Login In</h2>
        <LoginForm />
      </div>
      <div className="w-1/2 pl-8">
        <CompanyInfo />
      </div>
    </section>
  );
};

export default LoginSection;
