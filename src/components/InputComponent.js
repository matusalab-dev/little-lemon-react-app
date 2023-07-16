import { Input } from "postcss";
import React from "react";

export const InputComponent = ({ type, label, className, name, id }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={`${className} p-4 text-lg font-semibold`}
        name={name}
        id={id}
      />
    </div>
  );
};
