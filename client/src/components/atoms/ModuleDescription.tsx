import React from "react";

interface ModuleDescriptionProps {
  description: string;
}

const ModuleDescription: React.FC<ModuleDescriptionProps> = ({
  description,
}) => {
  return <p className="text-gray-600 text-sm">{description}</p>;
};

export default ModuleDescription;
