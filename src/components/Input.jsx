import { useState } from "react";

const Input = ({ label }) => {
  const [value, setValue] = useState(null);

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-white">
        {label}
      </label>
      <input
        type="text"
        id={label}
        className="outline-none"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
