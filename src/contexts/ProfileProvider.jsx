import { useState } from 'react';
import ProfileContext from './ProfileContext';

export function ProfileProvider({ children }) {
  const [user, setUser] = useState(null); // login info
  const [extraData, setExtraData] = useState([]); // other component data

  const handleLogout = () => {
    setUser(null);
    setExtraData([]);
    localStorage.removeItem('user');
    localStorage.removeItem('extraData');
  };

  const handleDeleteAccount = () => {
    setUser(null);
    setExtraData([]);
    localStorage.removeItem('user');
    localStorage.removeItem('extraData');
  };

  return (
    <ProfileContext.Provider
      value={{
        user,
        setUser,

        extraData,
        setExtraData,

        handleLogout,
        handleDeleteAccount,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
