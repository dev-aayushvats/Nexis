import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b-2 shadow-sm">
      <div className="container mx-auto px-48">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <a
              href="#"
              className="text-3xl font-cinzel font-bold text-indigo-600"
            >
              Nexis
            </a>
          </Link>
          <div className="hidden md:block ml-10">
            <div className="flex items-center">
              <div className="space-x-4">
                <Link to="/">
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    Home
                  </a>
                </Link>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  About
                </a>
                <Link to="/topics">
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    Topics
                  </a>
                </Link>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Favorites
                </a>
              </div>
              <div className="ml-12 space-x-6">
                <button className="text-indigo-700 font-semibold">Login</button>
                <button className="h-10 rounded-xl bg-indigo-100 hover:bg-indigo-500 px-6">
                  <div className="text-indigo-700 font-semibold text-sm">
                    Getting Started
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
