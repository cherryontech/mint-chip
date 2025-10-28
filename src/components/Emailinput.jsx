import Baseinput from './Baseinput';
import { useState } from 'react';

function Emailinput({
  formValue = {},
  setFormValue,
  fieldName,
  label,
  required = false,
}) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState('');
  const handleChange = (e) => {
    const newEmail = e.target.value;
    if (!newEmail && required) {
      setError('Email is required');
    } else if (emailRegex.text(newEmail) === false) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
    console.log('Error', error);
    setFormValue(fieldName, newEmail);
  };
  let inputDynamicStyles = '';
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
        inputClassName={inputDynamicStyles}
        //aria-invalid={ariaInvalid}
      />
    </>
  );
}

export default Emailinput;
