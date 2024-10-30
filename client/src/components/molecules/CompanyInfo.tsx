import React from "react";
import Text from "../atoms/Text";

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-bold mb-2">Company Logo</h3>
      <Text className="text-gray-500 text-center">
        Here you can include additional information about the company or any
        relevant content.
      </Text>
    </div>
  );
};

export default CompanyInfo;
