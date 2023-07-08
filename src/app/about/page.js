import Link from "next/link";
import React from "react";

import Button from "../clients/Button";
const About = () => {
  return (
    <div>
      About page
      <div>
        <h4>Linking</h4>
        <Link href="/">Go to Home</Link>
        <Link href="/login">Go to Login</Link>
      </div>
      <div>
        <h4>Navigation</h4>
        <Button path={"/"} buttonText={"Go to Home"} />

        <Button path={"/login"} buttonText={"Go to Login"} />
      </div>
    </div>
  );
};

export default About;
