import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const { pathname } = location;
  const hideNav = ['/login', '/signup', '/onboarding'].includes(pathname);
  const showHomeNav = ['/'].includes(pathname);
  const hideFooter = ['/login', '/signup', '/onboarding'].includes(pathname);

  return (
    <div>
      {!hideNav && (showHomeNav ? <Navbar /> : <Navbar />)}

      <Outlet />

      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
