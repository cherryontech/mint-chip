import { Link } from 'react-router-dom';
function Error() {
  return (
    <div className="min-h-screen bg-emerald-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-lime-500">Error Page! 🎉</h1>
      <Link to={'/'}> Return to Home Page</Link>
    </div>
  );
}

export default Error;
