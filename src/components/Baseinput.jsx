function Baseinput({
  id,
  type,
  name,
  required = false,
  placeholder = '',
  disabled = false,
  labelClassName,
  ariaInvalid = false,
  inputClassName,
  onChange,
  value = '',
}) {
  return (
    <>
      <label htmlFor={name} className={labelClassName}></label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={inputClassName}
        aria-invalid={ariaInvalid}
        disabled={disabled}
      />
    </>
  );
}

export default Baseinput;
