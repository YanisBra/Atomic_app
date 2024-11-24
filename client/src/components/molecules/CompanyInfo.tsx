import React from "react";
import Text from "../atoms/Text";

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-bold mb-2">Logo de l’entreprise</h3>
      <Text className="text-gray-500 text-center">
        Ici, vous pouvez inclure des informations supplémentaires sur
        l’entreprise ou tout autre contenu pertinent.
      </Text>
    </div>
  );
};

export default CompanyInfo;
