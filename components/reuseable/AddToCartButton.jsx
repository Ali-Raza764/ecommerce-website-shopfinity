"use client";
import { addToCart, removeFromCart } from "@/actions/cart.actions";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiShoppingCart } from "react-icons/ci";

const AddToCartButton = ({ id, text, className }) => {
  const [added, setAdded] = useState(false);

  const addCart = async (id) => {
    try {
      let res;
      if (added) {
        res = await removeFromCart(id);
      } else {
        res = await addToCart(id);
      }

      if (res.status === 200) {
        setAdded(!added);
        return res.message;
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      throw new Error("Some Error Occurred");
    }
  };

  return (
    <button
      onClick={() =>
        toast.promise(addCart(id), {
          loading: "Updating cart",
          success: (msg) => msg,
          error: (err) => err.message || "Some Error Occurred",
        })
      }
      className={`${className} flex items-center gap-3`}
    >
      {text && "Add to cart"} <CiShoppingCart size={30} />
    </button>
  );
};

export default AddToCartButton;
