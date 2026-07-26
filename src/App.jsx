import './App.css';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useRef } from 'react';

// hook for restoring scroll position
function useScrollRestoration() {
  // current location from react router
  const location = useLocation();
  // this will allow more control over the scroll behavior for first clicks or manual back or forward nav from the browser
  const navType = useNavigationType();
  // stores data without triggering rerenders - will store the x and y positions
  const scrollPosition = useRef({});

  // use effect depending on location & navType to determine the scroll position
  useEffect(() => {
    // disable browser native scroll restoration that interferes when manual refresh from browser
    history.scrollRestoration = 'manual';
    // POP means when you use back/forward buttons on the browser, it'll give the last known scroll position
    if (navType === 'POP' && scrollPosition.current[location.pathname]) {
      // add to wait until data fetches or full render before going to the saved scroll position
      setTimeout(() => {
        window.scrollTo(scrollPosition.current[location.pathname])
      }, 0)
    } else {
      // first visits to route & fresh nav link clicks always go back to the top
      window.scrollTo(0, 0)
    }

    // cleanup which stores the path name as a string key and the object with the positions as values & will always run before another useEffect runs when on a new link
    return () => {
      scrollPosition.current[location.pathname] = {
        left: window.scrollX,
        top: window.scrollY
      };
    }
  }, [location, navType])
}

function App() {
  const location = useLocation();
  const { pathname } = location;

  // call scroll hook
  useScrollRestoration();

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
