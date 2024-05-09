import Image from "next/image";
import React from "react";
import SignUpForm from "../_components/SignUpForm";

const SignUp = () => {
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
      <div className="h-full w-full flex items-center justify-center flex-col  py-11">
        <SignUpForm />
        
      </div>
    </div>
  );
};

export default SignUp;
