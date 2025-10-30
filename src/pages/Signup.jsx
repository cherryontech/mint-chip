import Emailinput from '../components/Emailinput';
import Passwordinput from '../components/PasswordInput';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formValues, setFormValues] = useState({});
  const [isValidEmail, setisValidEmail] = useState(false);
  const [isValidPassword, setisValidPassword] = useState(false);
  const [formSubmitMessage, setFormSubmitMessage] = useState('');
  const setFormValue = (fieldName, value) => {
    setFormValues((prevValue) => ({ ...prevValue, [fieldName]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail || !isValidPassword) {
      setFormSubmitMessage('Fill form properly');
    } else {
      const signupFormData = new FormData();
      for (const key in formValues) {
        signupFormData.append(key, formValues[key]);
      }
      console.log('Submitting Signup Data:', signupFormData);
    }
  };
  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-gradient-to-b from-nyanza to-celeste md:h-screen md:bg-gradient-to-b md:from-nyanza md:via-celeste md:via-50% md:to-white md:to-50% ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white w-full max-w-lg md:min-w-[30vw]  mx-auto rounded-[10px] min-h-[68vh]  max-h-[80vh] h-auto shadow-[0px_4px_15px_8px_rgba(30,30,30,0.10)] p-14"
          noValidate
        >
          <h3 className="font-playfair text-2xl mb-[44px]">Sign Up</h3>
          <div className="relative">
            <Link
              to=""
              className="underline absolute top-0 right-0 focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1"
            >
              Forgot Username
            </Link>
            <Emailinput
              formValue={formValues}
              fieldName="signupEmail"
              setFormValue={setFormValue}
              label="Email Address"
              required={true}
              setisValidEmail={setisValidEmail}
              isValidEmail={isValidEmail}
            />
          </div>
          <div className="relative mt-[24px]">
            <Link
              to=""
              className="underline absolute top-0 right-0 focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1"
            >
              Reset Password
            </Link>
            <Passwordinput
              formValue={formValues}
              fieldName="signupPassword"
              setFormValue={setFormValue}
              label="Password"
              required={true}
              setisValidPassword={setisValidPassword}
              isValidPassword={isValidPassword}
              pageType="signup"
            />
          </div>
          <div className="block mt-[16px] mb-[44px]">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              aria-disabled="true"
              className="mr-[8px] focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {formSubmitMessage && <p className="text-sm">{formSubmitMessage}</p>}
          <div className="flex justify-center">
            <Button size="lg" color="primary" label="Complete Sign up" />
          </div>

          <div className="mt-[12px]">
            Existing user?{' '}
            <Link
              to="/login"
              className="text-persianblue underline focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1"
            >
              Sign in
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
