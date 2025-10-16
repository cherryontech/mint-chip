import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Achievements from './pages/Achievements';
import Community from './pages/Community';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import Signup from './pages/Signup';
import App from './App';
import NavbarLayout from './NavbarLayout';
import AuthenticationLayout from './AuthenticationLayout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [{ index: true, Component: Home }],
  },
  {
    path: 'auth',
    Component: AuthenticationLayout,
    children: [
      { path: 'login', Component: Login },
      { path: 'signup', Component: Signup },
      { path: 'onboarding', Component: Onboarding },
    ],
  },
  {
    path: 'user',
    Component: NavbarLayout,
    children: [
      { path: 'dashboard', Component: Dashboard },
      { path: 'community', Component: Community },
      { path: 'achievements', Component: Achievements },
    ],
  },

  {
    path: '*',
    element: <Error />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
