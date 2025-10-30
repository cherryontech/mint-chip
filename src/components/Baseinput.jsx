function Baseinput({
  id,
  type,
  name,
  label = '',
  required = false,
  placeholder = '',
  disabled = false,
  labelClassName = '',
  ariaInvalid,
  inputClassName = '',
  onChange,
  value = '',
  ariaDescribedBy,
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
        className={`rounded-[5px] 
           block w-full h-11 px-4 py-2
          bg-white text-black
           ${inputClassName}
          disabled:bg-gray-100 disabled:text-gray-500`}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        disabled={disabled}
      />
    </>
  );
}

export default Baseinput;
