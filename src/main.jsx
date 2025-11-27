import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProfileProvider } from './contexts/ProfileContext';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Achievements from './pages/Achievements';
import Community from './pages/Community';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Journal from './pages/journal';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Challenges from './pages/Challenges';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'community', element: <Community /> },
      { path: 'signup', element: <Signup /> },
      { path: 'login', element: <Login /> },
      { path: 'onboarding', element: <Onboarding /> },
      { path: 'achievements', element: <Achievements /> },
      { path: 'journal', element: <Journal /> },
      { path: 'logout', element: <Logout /> },
      { path: 'profile', element: <Profile /> },
      { path: 'error', element: <Error /> },
      { path: 'challenges', element: <Challenges /> },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileProvider>
      <RouterProvider router={router} />
    </ProfileProvider>
  </StrictMode>
);
