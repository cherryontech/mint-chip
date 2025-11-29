import Button from '../components/Button';
import Baseinput from '../components/Baseinput';
import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { profileData, setProfileData } = useState(null);
  const { loading, setLoading } = useState(true);
  const navigate = useNavigate();
  let inputClassName =
    'rounded-none border-0 border-b border-eerie bg-transparent focus:border-stone-600 focus:ring-0';
  useEffect(() => {
    async function fetchProfileData() {
      try {
        const uid = auth.currentUser.uid;

        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        } else {
          console.log('No user document found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfileData();
  }, []);
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('authToken');
    navigate('/logout');
  };
  if (loading) return <p>Loading</p>;
  return (
    <section className="bg-white flex flex-col items-center min-h-[calc(100vh-80px)]">
      <form className="w-full max-w-md min-w-[60%] flex flex-col">
        <h3 className="text-2xl font-playfair mb-[24px] mt-[60px] place-self-center">
          Profile
        </h3>
        <div className="mb-[24px]">
          <Baseinput
            id="profile-email"
            value={profileData.email}
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
            value="**********"
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
            value={
              profileData.onboardingConcerns?.length > 0
                ? profileData.onboardingConcerns
                    .map((item) => `#${item}`)
                    .join('\u00A0\u00A0')
                : 'No concerns were selected'
            }
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
