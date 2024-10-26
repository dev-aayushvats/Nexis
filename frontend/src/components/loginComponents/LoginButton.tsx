import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="text-primary-600 font-semibold"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
