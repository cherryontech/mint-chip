function Baseinput({
  id,
  type,
  name,
  label = '',
  required = false,
  placeholder = '',
  disabled = false,
  labelClassName = '',
  ariaInvalid = false,
  inputClassName = '',
  onChange,
  value = '',
}) {
  return (
    <>
      <label
        htmlFor={name}
        className={`block font-medium text-stone-900 text-base mb-[12px] ${labelClassName}`}
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        required={required || undefined}
        placeholder={placeholder}
        className={`rounded-[5px] outline-2 
          outline-zinc-300 block w-full h-11 px-4 py-2
          bg-white text-black
          focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1
          disabled:bg-gray-100 disabled:text-gray-500 ${inputClassName}`}
        aria-invalid={ariaInvalid}
        disabled={disabled}
      />
    </>
  );
}

export default Baseinput;
