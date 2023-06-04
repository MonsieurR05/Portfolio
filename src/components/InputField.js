const InputField = ({ handleChange, label, name, type, value }) => {
    return (
      <div className="mb-5">
        <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
        <input
          className="border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2 sm:h-8"
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
          required
        />
      </div>
    );
  };
  
  export default InputField;
  