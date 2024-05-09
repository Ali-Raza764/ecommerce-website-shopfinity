import React from "react";
import OAuthProviders from "./OAuthProviders";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className="w-[25rem] overflow-hidden p-4 h-full flex  justify-center flex-col">
      <h1 className="text-3xl font-semibold text-left w-full mb-6">
        Create An Account
      </h1>
      <form action="" className="flex flex-col gap-y-4 p-2">
        <input
          type="text"
          name="useremail"
          id="useremail"
          placeholder="Enter Your Email"
          className="border-b-2 border-gray-400 focus:border-red-500 outline-none  p-2 transition autofill:bg-none"
        />
        <input
          type="text"
          name="phonenumber"
          id="phonenumber"
          placeholder="Enter Your Phone Number"
          className="border-b-2 border-gray-400 focus:border-red-500 outline-none   p-2 transition"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          className="border-b-2 border-gray-400 focus:border-red-500 outline-none   p-2 transition"
        />
        <button
          type="submit"
          className="bg-red-500 w-full p-2 text-white rounded-md hover:bg-red-400 transition"
        >
          Create Account
        </button>
      </form>
      <div className="w-full text-center">or</div>
      <div className="w-full p-3">
        <OAuthProviders />
      </div>
      <div className="more flex items-center justify-between w-full p-3">
        <p>Already have an Account?</p>
        <Link
          href={"/auth/sign-in"}
          className="text-green-700 underline font-semibold font-sans"
        >
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
