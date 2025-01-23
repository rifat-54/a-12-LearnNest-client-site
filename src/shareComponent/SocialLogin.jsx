import React from "react";

import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider">OR</div>
      <button className="btn flex items-center w-full">
        <FcGoogle className="text-2xl md:text-3xl mr-3"></FcGoogle> <span>Login with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
