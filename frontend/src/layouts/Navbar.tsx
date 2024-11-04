import { Link } from 'react-router-dom';
import LoginButton from '../components/loginComponents/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/loginComponents/LogoutButton';
import { useState, useRef, useEffect } from 'react';
import { CircleUserRound } from 'lucide-react';

function Navbar() {
  const { user, isAuthenticated } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isAuthenticated) {
    console.log(user);
  }
  return (
    <nav className="bg-neutral-100 shadow-sm">
      <div className="container mx-auto px-48">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <a
              href="#"
              className="text-3xl font-space_grotesk font-bold text-primary-400"
            >
              NEXIS
            </a>
          </Link>
          <div className="hidden md:block ml-10">
            <div className="flex items-center">
              <div className="space-x-4">
                <Link to="/">
                  <a
                    href="#"
                    className="text-neutral-500 hover:text-primary-600 transition-colors"
                  >
                    Home
                  </a>
                </Link>
                <Link to="/topics">
                  <a
                    href="#"
                    className="text-neutral-500 hover:text-primary-600 transition-colors"
                  >
                    Topics
                  </a>
                </Link>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-primary-600 transition-colors"
                >
                  Favorites
                </a>
              </div>
              <div className="ml-8 space-x-6">
                {isAuthenticated ? (
                  <div className="relative" ref={dropdownRef}>
                    {user?.picture ? (
                      <div>
                        <img
                          src={user?.picture}
                          alt="Profile"
                          className="w-10 h-10 rounded-full cursor-pointer"
                          title={user?.name || 'User profile'}
                          onClick={() => setShowDropdown(!showDropdown)}
                          loading="eager"
                          decoding="async"
                          crossOrigin="anonymous"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const sibling = e.currentTarget.nextElementSibling;
                            if (sibling)
                              (sibling as HTMLElement).style.display = 'block';
                          }}
                        />
                        <CircleUserRound
                          className="w-10 h-10 cursor-pointer text-neutral-500 hidden"
                          onClick={() => setShowDropdown(!showDropdown)}
                        />
                      </div>
                    ) : (
                      <CircleUserRound
                        className="w-10 h-10 cursor-pointer text-neutral-500"
                        onClick={() => setShowDropdown(!showDropdown)}
                      />
                    )}
                    {showDropdown && (
                      <div className="absolute right-0 mt-3 w-64 bg-neutral-50 rounded-b-lg shadow-xl py-2 z-20">
                        <div className="px-4 py-2 border-b border-gray-200">
                          <p className="text-sm text-gray-500">Signed in as</p>
                          <p className="font-semibold text-gray-700">
                            {user?.name}
                          </p>
                        </div>
                        <div className="mt-2 mx-2">
                          <LogoutButton />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center space-x-6">
                    <LoginButton />
                    <button className="h-10 rounded-xl bg-primary-400 hover:text-white px-6 transition-colors">
                      <div className="text-white font-semibold text-sm">
                        Getting Started
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
