import { Outlet } from 'react-router-dom';

function AuthenticationLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthenticationLayout;
