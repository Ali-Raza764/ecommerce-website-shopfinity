"use server";
import { auth } from "@/auth";
import Product from "@/lib/models/Product";
import dbConnect from "@/utils/dbConnect";

export const createProduct = async (payload) => {
  //* Validate the admin first to protect this action
  const session = await auth();
  if (!session) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  await dbConnect();

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
  //* Validate the admin first to protect this action
  const session = await auth();
  if (!session) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  await dbConnect();

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
  //* Validate the admin first to protect this action
  const session = await auth();
  if (!session) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  await dbConnect();

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