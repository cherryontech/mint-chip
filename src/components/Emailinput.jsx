import Baseinput from './Baseinput';
import { useState } from 'react';

function Emailinput({
  formValue = {},
  setFormValue,
  fieldName,
  label,
  required = false,
  setisValidEmail,
  isValidEmail,
}) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState('');
  let inputClassName;
  const handleChange = (e) => {
    const newEmail = e.target.value;
    if (!newEmail && required) {
      setError('Email is required');
      setisValidEmail(false);
    } else if (emailRegex.test(newEmail) === false) {
      setError('Please enter a valid email address.');
      setisValidEmail(false);
    } else {
      setError('');
      setisValidEmail(true);
    }
    console.log('Error', error);
    setFormValue(fieldName, newEmail);
  };
  if (error) {
    inputClassName =
      'border-sangria ring-2 ring-sangria focus:ring-sangria focus:outline-none';
  } else if (isValidEmail) {
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
        type="email"
        name={fieldName}
        required={required}
        label={label}
        inputClassName={inputClassName}
        ariaInvalid={isValidEmail === false ? true : undefined}
        ariaDescribedBy={error ? `${fieldName}-error` : undefined}
      />
      {error && (
        <div
          id={`${fieldName}-error`}
          role="alert"
          className="text-sm mt-[8px]"
        >
          <p>{error}</p>
        </div>
      )}
    </>
  );
}

export default Emailinput;
