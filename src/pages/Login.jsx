import Emailinput from '../components/Emailinput';
import Passwordinput from '../components/PasswordInput';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formValues, setFormValues] = useState({});
  const setFormValue = (fieldName, value) => {
    setFormValues((prevValue) => ({ ...prevValue, [fieldName]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginFormData = new FormData();
    for (const key in formValues) {
      loginFormData.append(key, formValues[key]);
    }
    console.log('Login Submission Data:', loginFormData);
  };
  return (
    <section className="flex justify-center items-center min-h-screen md:h-screen bg-gradient-to-b from-nyanza to-celeste md:bg-gradient-to-b md:from-nyanza md:via-celeste md:via-50% md:to-white md:to-50%">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white w-full max-w-lg md:min-w-[30vw] md:h-auto mx-auto rounded-[10px] h-[68vh] shadow-[0px_4px_15px_8px_rgba(30,30,30,0.10)] p-14"
        noValidate
      >
        <h3 className="font-playfair text-2xl mb-[44px]">Sign In</h3>
        <div>
          <Emailinput
            formValue={formValues}
            setFormValue={setFormValue}
            fieldName="loginEmail"
            label="Email Address"
          />
        </div>
        <div className="relative mt-[44px]">
          <Link
            to=""
            className="underline absolute top-0 right-0 focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1"
          >
            Reset Password
          </Link>
          <Passwordinput
            formValue={formValues}
            setFormValue={setFormValue}
            fieldName="loginPassword"
            label="Password"
          />
        </div>
        <div className="block mt-[16px] mb-[44px]">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            aria-disabled="true"
            className="mr-[8px] focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1"
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <Button size="lg" color="primary" label="Sign in" />
        <div className="mt-[12px]">
          New user?{' '}
          <Link
            to="/signup"
            className="text-persianblue focus:outline-none focus:ring-2 focus:ring-persianblue focus:ring-offset-1"
          >
            Create an Account
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
