import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      {/* Accessibility: Skip to main content link. 
        It jumps to the main content div for keyboard users.
      */}
      <a
        href="#main-content"
        className="absolute top-[-9999px] left-0 z-50 p-1 ml-10 text-lg font-bold text-white bg-persianblue focus:top-0 focus:left-0 focus:z-50 focus:relative"
      >
        Skip to main content
      </a>

      <div id="main-content" className="flex flex-col items-center justify-center min-h-screen text-center ">
        <div>
          <img
            className="mx-auto max-w-xs md:max-w-sm object-contain"
            alt="Page not found. Illustration of an error page."
            src="/PageNotFound.svg"
          />

          <h1 className="font-poppins font-normal text-2xl text-gray-800 tracking-normal leading-normal mt-2">
            {' '}
            Oh no, what happened?
          </h1>

          <Link
            to={'/'}
            className="mt-2 inline-block text-errier underline font-semibold text-lg text-persianblue hover:font-bold transition duration-300"
          >
            Return to Healie Home Page
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;