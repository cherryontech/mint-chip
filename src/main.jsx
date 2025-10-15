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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/onboarding',
    element: <Onboarding />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/community',
    element: <Community />,
  },
  {
    path: '/achievements',
    element: <Achievements />,
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
