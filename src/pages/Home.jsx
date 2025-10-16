import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-emerald-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-lime-500">Home Page! 🎉</h1>
      <Link to="/user/achievements" className="m-4">
        Achievements{' '}
      </Link>
      <Link to="/user/community" className="m-4">
        Community{' '}
      </Link>
      <Link to="/user/dashboard" className="m-4">
        Dashboard{' '}
      </Link>
      <Link to="/auth/login" className="m-4">
        Login{' '}
      </Link>
      <Link to="/auth/onboarding" className="m-4">
        Onboarding{' '}
      </Link>
      <Link to="/auth/signup" className="m-4">
        Sign up{' '}
      </Link>
    </div>
  );
}

export default Home;
