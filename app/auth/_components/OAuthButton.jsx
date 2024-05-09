"use client";
// import { signIn } from "next-auth/react";
// import { redirect } from "next/dist/server/api-utils";
import {FcGoogle, FcReddit} from 'react-icons/fc'

export default function OAuthButton({ auth, type }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-x-2 w-full rounded-md p-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 bg-gray-200 hover:bg-gray-300"
    //   onClick={() => {
    //     signIn(auth?.id || "");
    //   }}
    >
      {auth.type === "github" ? <FcReddit size={20} /> : <FcGoogle size={20} />}
      {auth ? auth.name : "Loading"}
    </button>
  );
}
