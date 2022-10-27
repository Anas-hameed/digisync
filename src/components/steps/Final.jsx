import { Link } from 'react-router-dom';
export default function Final() {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-violet-400">
          Congratulations!
        </div>
        <div className=" text-black text-center">
          Your templates have been created.<br />
          Press continue to see.
        </div>
        <Link className="mt-10" to="/templates">
          <button className="h-10 px-5 bg-violet-400 text-white font-roboto font-bold transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-violet-500 hover:text-green-100">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
