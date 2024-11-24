
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Title from "../atoms/Title";
import NavBar from "../organisms/NavBar";
import DisplayModules from "../organisms/DisplayModules";

const DisplayModulesTemplate: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-100 rounded-md shadow-md">
        <NavBar />
        <div>
          {/* Vérification du token pour afficher soit le login, soit les modules */}
          {!token ? (
            <Title>Vous n'êtes pas connecté</Title>
          ) : (
            <div>
              <DisplayModules />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayModulesTemplate;
