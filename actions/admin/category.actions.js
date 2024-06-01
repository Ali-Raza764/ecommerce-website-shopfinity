"use server";
import Category from "@/lib/models/Category";
import checkRole from "@/utils/checkRole";
import dbConnect from "@/utils/dbConnect";

dbConnect();

export const createCategory = async (payload) => {
  //* Validate the admin first to protect tbis action
  if (!checkRole("admin")) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const categories = await Category.create(payload);
  const data = JSON.stringify(categories);

  return JSON.parse(
    JSON.stringify({
      message: "Product Created Successfully",
      status: 200,
      data: data,
    })
  );
};
export const updateCategory = async (id, payload) => {
  //* Validate the admin first to protect tbis action
  if (!checkRole("admin")) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const categories = await Category.findByIdAndUpdate(id, payload);

  return JSON.parse(
    JSON.stringify({
      message: "Category Created Successfully",
      status: 200,
    })
  );
};

export const deleteCategory = async (id) => {
  //* Validate the admin first to protect tbis action
  if (!checkRole("admin")) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const products = await Category.findByIdAndDelete(id);
  const data = JSON.stringify(products);

  return JSON.parse(
    JSON.stringify({
      message: "Product Deleted Successfully",
      status: 200,
      data: data,
    })
  );
};
