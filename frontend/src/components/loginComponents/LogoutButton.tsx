import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="w-full h-8 text-white bg-primary-400 font-semibold flex items-center justify-center px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-sm"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
