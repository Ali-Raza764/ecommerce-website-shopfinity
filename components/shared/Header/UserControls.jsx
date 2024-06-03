import { PiShoppingCartThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import SignInButton from "@/components/reuseable/SignInButton";
import Link from "next/link";
import { auth } from "@/auth";
import { FaUserAlt } from "react-icons/fa";

const UserControls = async() => {
  const session = await auth();
  return (
    <div>
      {session ? (
        <div className="flex items-center justify-end gap-3">
          <Link href={"/cart"}>
            <PiShoppingCartThin size={30} />
          </Link>
          <Link href={"/wishlist"}>
            <CiHeart size={30} />
          </Link>
          
          <Link href={"/profile"}>
            <FaUserAlt size={30} />
          </Link>

        </div>
      ) : (
        <div className="flex items-center justify-end gap-2">
          <SignInButton
            href={"/auth/signin"}
            className={
              "shadow p-2 md:px-3 rounded border hover:bg-gray-100 transition "
            }
          >
            Sign In
          </SignInButton>
          <SignInButton
            href={"/auth/signup"}
            className={
              "bg-black text-white hover:bg-gray-800 transition p-2 md:px-3 rounded-md font-sans"
            }
          >
            Sign Up
          </SignInButton>
        </div>
      )}
    </div>
  );
};

export default UserControls;
