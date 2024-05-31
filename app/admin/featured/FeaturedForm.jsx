"use client";
import { createFeaturedProduct } from "@/actions/admin/featuredproduct.actions";
import { Router } from "next/router";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const FeaturedForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      productId: e.target.productId.value,
      category: e.target.category.value,
      headingText: e.target.headingText.value,
      relatedText: e.target.relatedText.value,
    };
    setLoading(true);

    try {
      const response = await createFeaturedProduct(payload);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
    } catch (error) {
      console.error("There was a problem with the submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold font-sans">FeaturedProduct</h1>
      <form
        onSubmit={handleSubmit}
        className="border shadow rounded-md p-3 bg-gray-200 flex flex-col gap-3"
      >
        <input
          type="text"
          name="productId"
          placeholder="Product ID"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="headingText"
          placeholder="Heading Text"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="relatedText"
          placeholder="Related Text"
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="p-3 bg-red-500 hover:bg-red-400 transition text-white rounded flex items-center justify-center w-max"
          disabled={loading}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin mr-2" /> Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default FeaturedForm;
