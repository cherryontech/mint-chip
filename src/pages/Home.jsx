import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-emerald-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-lime-500">Home Page! 🎉</h1>
      <Link to="/achievements" className="m-4">
        Achievements{' '}
      </Link>
      <Link to="/community" className="m-4">
        Community{' '}
      </Link>
      <Link to="/dashboard" className="m-4">
        Dashboard{' '}
      </Link>
      <Link to="/login" className="m-4">
        Login{' '}
      </Link>
      <Link to="/onboarding" className="m-4">
        Onboarding{' '}
      </Link>
      <Link to="signup" className="m-4">
        Sign up{' '}
      </Link>
    </div>
  );
}

export default Home;
