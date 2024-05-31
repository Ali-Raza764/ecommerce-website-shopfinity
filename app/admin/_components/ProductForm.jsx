"use client";
import { createProduct, updateProduct } from "@/actions/admin/product.actions";
import revalidate from "@/actions/revalidate.action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

// TODO Create The image Upload function and configure react-dragable-sort
const ProductForm = ({ id, initailData, categories }) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(
    initailData?.images || [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-2uJROSe27fOGhpbhRTQjlJ1IBS19Iwgbw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-2uJROSe27fOGhpbhRTQjlJ1IBS19Iwgbw&s",
    ]
  );
  const editForm = initailData;
  const newForm = !initailData | (initailData === undefined);
  const router = useRouter();

  const handleUpload = async (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImages((prev) => [...prev, reader.result]);
    };
    reader.onerror = () => {
      console.error("Error");
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.product_name.value,
      price: e.target.product_price.value,
      images: images,
      category: e.target.categories.value,
      excerpt: e.target.excerpt.value,
      description: e.target.description.value,
    };
    setLoading(true);
    try {
      if (editForm) {
        console.log("Updating Product");
        const res = await updateProduct(id, payload);
        revalidate("/admin/products");
        res.status === 200 && router.push("/admin/products");
      } else if (newForm) {
        const res = await createProduct(payload);
        revalidate("/admin/products");
        res.status === 200 && router.push("/admin/products");
      }
    } catch (error) {
      console.error;
    } finally {
      setLoading(false);
    }
  };

  console.log(categories);

  return (
    <div className="w-full h-max shadow-md shadow-gray-400 px-4 py-6">
      <form
        action=""
        className="flex flex-col items-center justify-center gap-3"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label htmlFor="product_name" className="font-semibold text-lg">
            Enter Your Product Name
          </label>
          <input
            type="text"
            className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
            placeholder="Product Name"
            defaultValue={editForm ? initailData.name : ""}
            name="product_name"
            disabled={loading}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="product_price" className="font-semibold text-lg">
            Enter Your Product Price in $
          </label>
          <input
            type="text"
            className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
            placeholder="Product Price"
            defaultValue={editForm ? initailData.price : ""}
            name="product_price"
            disabled={loading}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="product_image" className="font-semibold text-lg">
            Upload Your Product Image
          </label>
          <div className="w-full flex items-center">
            <div className="flex items-center gap-3">
              {images?.map((url, i) => (
                <Image
                  key={i}
                  src={url}
                  width={50}
                  height={100}
                  alt="Product image"
                />
              ))}
            </div>

            <input
              type="file"
              className="w-[5rem] h-[5rem] vis bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
              placeholder="Product image"
              name="product_image"
              disabled={loading}
              required={images.length === 0}
              onChange={handleUpload}
            />
          </div>
        </div>
        <div className="category flex w-full flex-col">
          <label htmlFor="categories" className="font-semibold text-lg">
            Select Your category
          </label>
          <select
            name="categories"
            id="categories"
            className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
            defaultValue={editForm ? initailData.category : ""}
            disabled={loading}
            required
          >
            {categories?.map((item) => {
              return (
                <option value="Computer Accessories" key={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="description w-full">
          <label htmlFor="description" className="font-semibold text-lg">
            Enter Product Excerpt
          </label>
          <textarea
            name="excerpt"
            id="excerpt"
            cols="30"
            rows="5"
            className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
            defaultValue={editForm ? initailData.excerpt : ""}
            disabled={loading}
            required
          ></textarea>
        </div>
        <div className="description w-full mt-4">
          <label htmlFor="description" className="font-semibold text-lg">
            Enter Product Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
            defaultValue={editForm ? initailData.description : ""}
            disabled={loading}
            required
          ></textarea>
        </div>
        <div className="w-full flex items-center justify-between">
          <button
            type="submit"
            className="px-6 p-2 bg-gray-900 text-md text-white rounded-md hover:bg-gray-800 transition"
            disabled={loading}
          >
            Create
          </button>
          {loading && <FaSpinner size={30} className="animate-spin" />}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
