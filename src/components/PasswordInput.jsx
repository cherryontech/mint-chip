import Baseinput from './Baseinput';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';

function Passwordinput({
  formValue = {},
  setFormValue,
  fieldName,
  label,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setFormValue(fieldName, newPassword);
  };
  let inputDynamicStyles = '';
  let labelDynamicStyles = '';
  return (
    <>
      <Baseinput
        id={fieldName}
        value={formValue[fieldName] || ''}
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        name={fieldName}
        required={required}
        label={label}
        inputClassName={inputDynamicStyles}
        labelClassName={labelDynamicStyles}
        //aria-invalid={ariaInvalid}
      />
      <button
        type="button"
        onClick={togglePassword}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        aria-pressed={showPassword}
        className="absolute right-3 text-2xl text-black hover:text-persianblue
          focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1 cursor-pointer"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </>
  );
}

export default Passwordinput;
