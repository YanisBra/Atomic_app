import React from "react";

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className="text-xl font-semibold text-center mb-4 p-2">{children}</h2>;
};

export default Title;
