import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const {loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
    >Login
    </button>
  );
};

export default LoginButton;
