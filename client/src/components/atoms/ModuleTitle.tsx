import React from "react";

interface ModuleTitleProps {
  title: string;
}

const ModuleTitle: React.FC<ModuleTitleProps> = ({ title }) => {
  return <h3 className="font-semibold text-lg mb-2 text-gray-800">{title}</h3>;
};

export default ModuleTitle;
