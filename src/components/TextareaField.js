const TextareaField = ({ handleChange, label, name, value }) => {
    return (
      <div>
        <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
        <textarea
          onChange={handleChange}
          name={name}
          rows="4"
          className="w-full border-b-2 outline-none text-dark bg-gray-100 p-2 sm:text-base md:text-lg"
          value={value}
        ></textarea>
      </div>
    );
  };
  
  export default TextareaField;
  