import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import NavBar from "../organisms/NavBar";
import DisplayModules from "../organisms/DisplayModules";
import { useNavigate } from "react-router-dom"; // Importez useNavigate

const DisplayModulesTemplate: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate(); // Initialiser useNavigate

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-100 rounded-md shadow-md">
        <NavBar />
        <div className="flex flex-col items-center justify-center p-4">
          {/* Vérification du token pour afficher soit les modules soit le boutton de redirection au login */}
          {!token ? (
            <>
              <Title>Vous n'êtes pas connecté</Title>
              <Button
                label="Se connecter"
                className="w-full" 
                onClick={() => navigate("/")}
              />
            </>
          ) : (
            <DisplayModules />
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayModulesTemplate;