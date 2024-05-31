import { deleteCategory } from "@/actions/admin/category.actions";
import { deleteProduct } from "@/actions/admin/product.actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const DeleteItemDialog = ({ open, setOpen, id, name, type }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setLoading(true);
    try {
      if (type == "product") {
        console.log("Deleting Product");
        const res = await deleteProduct(id);
        res.status === 200 && router.refresh();
      } else if (type == "category") {
        console.log("Deleting category");
        const res = await deleteCategory(id);
        console.log(res);
        res.status === 200 && router.refresh();

      }
    } catch (error) {
      console.error;
    } finally {
      setLoading(false);
      setOpen(!open);
    }
  };
  if (!open) {
    return;
  }
  return (
    <div
      className={
        "absolute z-50 top-0 left-0 bottom-0 right-0 backdrop-blur-sm transition"
      }
    >
      <div className="w-[25rem] m-auto mt-[40vh] bg-gray-300 rounded-md p-4">
        <h2>Are You Sure? To permanently Delete</h2>
        <h3>{name}</h3>
        <div className="w-full flex items-center justify-between mt-6">
          <button
            className="px-3 p-2 rounded-md border bg-gray-800 hover:bg-gray-700 transition text-white"
            onClick={() => setOpen(!open)}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="flex items-center gap-3 px-3 p-2 rounded-md border bg-red-500 hover:bg-red-400 transition text-white"
            disabled={loading}
            onClick={handleClick}
          >
            Delete{loading && <FaSpinner size={25} className="animate-spin" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemDialog;
