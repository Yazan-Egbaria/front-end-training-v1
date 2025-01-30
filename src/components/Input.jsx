const Input = ({ label, value, onChange }) => {
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
        onChange={(e) => onChange(label, e.target.value)}
      />
    </div>
  );
};

export default Input;
