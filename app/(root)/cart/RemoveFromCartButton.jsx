"use client";
import { removeFromCart } from "@/actions/cart.actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RemoveFromCartButton = ({ id }) => {
  const router = useRouter();
  const handleRemove = async (id) => {
    try {
      const res = await removeFromCart(id);
      if (res.status === 200) {
        console.log(res);
        router.refresh();
        return res;
      } else {
        throw new Error("Error when removing from cart");
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  return (
    <button
      className="btn bg-red-500 text-white px-3 py-1 rounded"
      onClick={() =>
        toast.promise(handleRemove(id), {
          loading: "Removing From cart",
          success: "Successfully Removed from cart",
          error: "Error when Removing From cart",
        })
      }
    >
      Remove
    </button>
  );
};

export default RemoveFromCartButton;
