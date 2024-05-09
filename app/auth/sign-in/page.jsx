import Image from "next/image";
import React from "react";
import LoginForm from "../_components/LoginForm";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex items-center flex-row">
      <div className="w-full  h-full hidden  md:flex items-center justify-center">
        <Image
          height={700}
          width={700}
          src={"/images/image.png"}
          alt="Image-1"
        />
      </div>
      <div className="h-full w-full flex items-center justify-center py-11">
        <LoginForm />
      </div>
    </div>
  );
};

export default SignIn;
