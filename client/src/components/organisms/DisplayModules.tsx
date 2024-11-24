import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useGetModulesQuery } from "../../api/endpoints/module";
import ModuleCard from "../molecules/ModuleCard";
import Title from "../atoms/Title";

interface Module {
  title: string;
  description: string;
}

const DisplayModules: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  const {
    data: response,
    error,
    isLoading,
  } = useGetModulesQuery(undefined, { skip: !token });

  const modules: Module[] = response?.modules || [];

  useEffect(() => {
    if (isLoading && !modules.length) {
      console.log("Chargement des modules en cours...");
    }

    if (modules.length > 0) {
      console.log("Modules récupérés :", modules);
    }

    if (error) {
      console.error("Erreur lors de la récupération des modules :", error);
    }
  }, [modules, error, isLoading]);

  if (isLoading)
    return <p className="text-center mt-8">Chargement des modules...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 mt-8">
        Erreur lors du chargement des modules.
      </p>
    );

  return (
    <div className="flex flex-col items-center justify-center">
      <Title>Mes Modules</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[500px] overflow-y-auto px-4">
        {modules.map((module, index) => (
          <ModuleCard
            key={index}
            title={module.title}
            description={module.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayModules;
