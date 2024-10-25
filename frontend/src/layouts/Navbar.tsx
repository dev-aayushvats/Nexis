import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b-2 shadow-sm">
      <div className="container mx-auto px-48">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <a
              href="#"
              className="text-3xl font-space_grotesk font-bold text-primary-400"
            >
              Nexis
            </a>
          </Link>
          <div className="hidden md:block ml-10">
            <div className="flex items-center">
              <div className="space-x-4">
                <Link to="/">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    Home
                  </a>
                </Link>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  About
                </a>
                <Link to="/topics">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    Topics
                  </a>
                </Link>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Favorites
                </a>
              </div>
              <div className="ml-12 space-x-6">
                <button className="text-primary-600 font-semibold">
                  Login
                </button>
                <button className="h-10 rounded-xl bg-primary-400 hover:text-white px-6 transition-colors">
                  <div className="text-white font-semibold text-sm">
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
