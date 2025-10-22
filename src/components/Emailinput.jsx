import Baseinput from './Baseinput';
function Emailinput({ formValue = {}, setFormValue, fieldName }) {
  return (
    <>
      <Baseinput
        id={fieldName}
        value={setFormValue}
        onChange={handleChange}
        type="email"
        name={fieldName}
        required="true"
        className=""
        aria-invalid={ariaInvalid}
      />
    </>
  );
}

export default Emailinput;
