import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox"
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
