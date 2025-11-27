import Button from '../components/Button';
import Baseinput from '../components/Baseinput';
import { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
function Profile() {
  let inputClassName =
    'rounded-none border-0 border-b border-eerie bg-transparent focus:border-stone-600 focus:ring-0';
  const { handleLogout, handleDeleteAccount } = useContext(ProfileContext);
  return (
    <section className="bg-white flex flex-col items-center min-h-[calc(100vh-80px)]">
      <form className="w-full max-w-md min-w-[60%] flex flex-col">
        <h3 className="text-2xl font-playfair mb-[24px] mt-[60px] place-self-center">
          Profile
        </h3>
        <div className="mb-[24px]">
          <Baseinput
            id="profile-email"
            value=""
            type="email"
            name="profile-email"
            required={false}
            label="Email"
            inputClassName={inputClassName}
            ariaInvalid={undefined}
            ariaDescribedBy={undefined}
            disabled={true}
          />
        </div>
        <div className="mb-[24px]">
          <Baseinput
            id="profile-password"
            value=""
            type="password"
            name="profile-password"
            required={false}
            label="Password"
            inputClassName={inputClassName}
            ariaInvalid={undefined}
            ariaDescribedBy={undefined}
            disabled={true}
          />
        </div>
        <div className="mb-[24px]">
          <Baseinput
            id="profile-onboarding-choices"
            value=""
            type="text"
            name="profile-onboarding-choices"
            required={false}
            label="Onboarding Selections"
            inputClassName={inputClassName}
            ariaInvalid={undefined}
            ariaDescribedBy={undefined}
            disabled={true}
          />
        </div>
        <div className="mb-[24px]">
          <button
            className="text-sangria delete-btn bg-transparent p-0 border-0 cursor-pointer hover:text-sangria"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </div>

        <Button
          size="sm"
          color="primary"
          label="Log Out"
          onClick={handleLogout}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleLogout();
            }
          }}
        />
      </form>
    </section>
  );
}

export default Profile;
