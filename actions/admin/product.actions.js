"use server";
import Product from "@/lib/schemas/Product";
import checkRole from "@/utils/checkRole";
import dbConnect from "@/utils/dbConnect";

dbConnect();

export const createProduct = async (payload) => {
  //* Validate the admin first to protect tbis action
  if (!checkRole("admin")) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const products = await Product.create(payload);
  const data = JSON.stringify(products);

  return JSON.parse(
    JSON.stringify({
      message: "Product Created Successfully",
      status: 200,
      data: data,
    })
  );
};
export const updateProduct = async (id, payload) => {
  //* Validate the admin first to protect tbis action
  if (!checkRole("admin")) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const products = await Product.findByIdAndUpdate(id, payload);
  const data = JSON.stringify(products);

  return JSON.parse(
    JSON.stringify({
      message: "Product Created Successfully",
      status: 200,
      data: data,
    })
  );
};
export const deleteProduct = async (id) => {
  //* Validate the admin first to protect tbis action
  if (!checkRole("admin")) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const products = await Product.findByIdAndDelete(id);
  const data = JSON.stringify(products);

  return JSON.parse(
    JSON.stringify({
      message: "Product Created Successfully",
      status: 200,
      data: data,
    })
  );
};