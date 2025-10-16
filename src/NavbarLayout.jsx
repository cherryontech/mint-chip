import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function NavbarLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavbarLayout;
