import React from "react";

const InputField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="flex flex-col">
      <label className="mt-3">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        value={value}
        className="outline-none bg-gray-200 py-2 pl-2 my-2 w-3/5"
      />
    </div>
  );
};

export default InputField;
