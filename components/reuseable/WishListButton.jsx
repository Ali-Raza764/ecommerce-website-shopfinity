"use client";
import { addToWishList, removeFromWishList } from "@/actions/wishlist.actions";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const WishListButton = ({ id, size }) => {
  const [added, setAdded] = useState(false);

  const addToWish = async (id) => {
    try {
      if (added) {
        const res = await removeFromWishList(id);
        setAdded(false);
        return res.message;
      } else {
        const res = await addToWishList(id);
        setAdded(true);
        return res.message;
      }
    } catch (error) {
      throw new Error("Some Error Occurred");
    }
  };

  return (
    <button
      className="p-1 bg-white rounded-full"
      onClick={() => {
        toast.promise(addToWish(id), {
          loading: "Updating WishList",
          success: (msg) => msg,
          error: (err) => err.message || "Some Error Occurred",
        });
      }}
    >
      {added ? <AiFillHeart size={size} /> : <CiHeart size={size} />}
    </button>
  );
};

export default WishListButton;
