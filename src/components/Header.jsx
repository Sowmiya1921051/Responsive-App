import { useState } from "react";
import Title from './title'


const ComponentWithBackgroundImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80)'
      }}
    >
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="#" className="text-white text-xl font-bold">
                ROXINE
              </a>
            </div>
            <div className="md:hidden"> {/* Hide on desktop screens */}
              <button
                className="focus:outline-none text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`md:flex flex-col md:flex-row md:items-center ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="md:flex md:flex-row md:space-x-4 text-white mt-4 md:mt-0">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Elements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Team About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="absolute top-0 left-0 p-8 mt-40">
        <Title />
      </div>
    </div>
  );
};

export default ComponentWithBackgroundImage;
