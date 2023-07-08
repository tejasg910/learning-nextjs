import Link from "next/link";
import React from "react";

import Button from "../clients/Button";
const Login = () => {
  return (
    <div>
      Login page
      <div>
        <h4>Linking</h4>
        <Link href="/about">Go to About</Link>
        <Link href="/">Go to Home</Link>
      </div>
      <div>
        <h4>Navigation</h4>

        <Button path={"/"} buttonText={"Go to Home"} />

        <Button path={"/about"} buttonText={"Go to About"} />
      </div>
    </div>
  );
};

export default Login;
