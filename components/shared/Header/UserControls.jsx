"use client";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

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
        <div>Sign in</div>
      )}
    </>
  );
};

export default UserControls;
