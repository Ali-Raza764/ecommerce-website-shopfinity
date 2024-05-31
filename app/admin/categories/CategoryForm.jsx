"use client";

import { createCategory, updateCategory } from "@/actions/admin/category.actions";
import revalidate from "@/actions/revalidate.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const CategoryForm = ({ initialData, id }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const editPage = initialData;
  const newPage = !initialData || initialData === undefined;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.category_name.value,
    };
    setLoading(true);
    try {
      if (editPage) {
        const res = await updateCategory(id, payload);
        revalidate("/admin/categories");
        res.status === 200 && router.push("/admin/categories");
      } else if (newPage) {
        const res = await createCategory(payload);
        revalidate("/admin/categories");
        res.status === 200 && router.push("/admin/categories");
      }
    } catch (error) {
      console.error;
    } finally {
      setLoading(false);
    }
  };
  console.log(initialData);
  return (
    <div className="w-full h-max shadow border rounded-md bg-gray-200 p-4">
      <form
        action=""
        className="w-full flex flex-col items-center justify-center gap-3"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label htmlFor="category_name" className="font-semibold text-lg">
            Category Name
          </label>
          <input
            type="text"
            placeholder="Enter Category Name"
            className="w-full h-12 rounded-md p-2 border shadow transition-all duration-300 hover:bg-gray-100"
            name="category_name"
            required
            disabled={loading}
            defaultValue={editPage ? initialData.name : ""}
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <button
            type="submit"
            className="px-4 p-2 bg-gray-900 hover:bg-gray-800 transition rounded-md text-white"
            disabled={loading}
          >
            Create
          </button>
          {loading && <FaSpinner size={30} className="animate-spin ml-2" />}
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
