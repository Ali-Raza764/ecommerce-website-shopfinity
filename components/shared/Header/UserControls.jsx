"use client";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import SignInButton from "@/components/reuseable/SignInButton";

const UserControls = () => {
  const session = false;
  return (
    <>
      {session ? (
        <>
          <button>
            <PiShoppingCartThin size={30} />
          </button>
          <button>
            <CiHeart size={30} />
          </button>
          <div>User</div>
        </>
      ) : (
        <div className="flex items-center justify-end gap-2">
          <SignInButton href={'/auth/sign-in'} className={'shadow p-2 px-3 rounded border hover:bg-gray-100 transition '}>Sign In</SignInButton>
          <SignInButton href={'/auth/sign-up'} className={'bg-black text-white hover:bg-gray-800 transition p-2 px-3 rounded-md font-sans'}>Sign Up</SignInButton>
        </div>
      )}
    </>
  );
};

export default UserControls;
