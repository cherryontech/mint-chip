import Baseinput from './Baseinput';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';

function Passwordinput({
  formValue = {},
  setFormValue,
  fieldName,
  label,
  required = false,
  setisValidPassword,
  isValidPassword,
  pageType,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharactersRegex = /[!@#$%^&*()]/;
  const commonWords = ['password', '1234', 'qwerty', 'letmein', 'abc123'];
  const [error, setError] = useState('');
  let labelDynamicStyles = '';
  let inputClassName;
  let errorMessage = '';
  let valid = true;
  const togglePassword = () => setShowPassword((prev) => !prev);
  const handleChange = (e) => {
    const newPassword = e.target.value;

    if (!newPassword && required) {
      errorMessage += 'Password is required <br>';
      valid = false;
    } else {
      setError('');
    }

    if (newPassword && pageType === 'signup') {
      if (newPassword.length < 8) {
        errorMessage += 'Have at least 8 characters <br>';
        valid = false;
      }
      if (!upperCaseRegex.test(newPassword)) {
        errorMessage += 'One uppercase letter <br>';
        valid = false;
      }
      if (!lowerCaseRegex.test(newPassword)) {
        errorMessage += 'One lowercase letter<br>';
        valid = false;
      }
      if (
        !numberRegex.test(newPassword) &&
        !specialCharactersRegex.test(newPassword)
      ) {
        errorMessage += 'One number or symbol ! @ # $ % ^ & *( )<br>';
        valid = false;
      }
      const isCommonPhrase = commonWords.some((w) =>
        newPassword.toLowerCase().includes(w)
      );

      if (isCommonPhrase === true) {
        errorMessage += 'Avoid common phrases <br>';
        valid = false;
      }
    }
    setError(errorMessage);
    setisValidPassword(valid);
    setFormValue(fieldName, newPassword);
  };
  if (error) {
    inputClassName =
      'border-sangria ring-2 ring-sangria focus:ring-sangria focus:outline-none';
  } else if (isValidPassword) {
    inputClassName =
      'border-olivegreen ring-2 ring-olivegreen focus:ring-olivegreen focus:outline-none';
  } else {
    inputClassName =
      'border-zinc-300 ring-2 ring-zinc-300 focus:ring-persianblue focus:outline-none';
  }

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
        inputClassName={inputClassName}
        labelClassName={labelDynamicStyles}
        ariaInvalid={isValidPassword === false ? true : undefined}
        ariaDescribedBy={error ? `${fieldName}-error` : undefined}
      />
      <button
        type="button"
        onClick={togglePassword}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        aria-pressed={showPassword}
        className="toggle-btn absolute right-3 top-[46px] text-2xl text-black
          focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1 cursor-pointer"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
      {error && (
        <div
          id={`${fieldName}-error`}
          role="alert"
          className="text-sm mt-[8px]"
        >
          <p>Password must:</p>
          {error.split('<br>').map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default Passwordinput;
