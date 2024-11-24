import React from "react";
import ModuleTitle from "../atoms/ModuleTitle";
import ModuleDescription from "../atoms/ModuleDescription";

interface ModuleCardProps {
  title: string;
  description: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 border border-gray-200">
      <ModuleTitle title={title} />
      <ModuleDescription description={description} />
    </div>
  );
};

export default ModuleCard;
