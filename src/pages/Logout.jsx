import { Link } from 'react-router-dom';

function Logout() {
  return (
    <>
      <a
        href="#main-content"
        className="absolute top-[-9999px] left-0 z-50 p-1 ml-10 text-lg font-bold text-white bg-persianblue focus:top-0 focus:left-0 focus:z-50 focus:relative"
      >
        Skip to main content
      </a>

      <div
        id="main-content"
        className="flex flex-col items-center justify-start min-h-screen text-center pt-16"
      >
        <div>
          <img
            className="w-[400px] h-[400px] mx-auto object-contain"
            alt="Illustration of successful logout."
            src="/Logout.svg"
          />

          <h1 className="font-poppins font-normal text-2xl text-gray-800 tracking-normal leading-normal mt-2">
            See you later!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Logout;
