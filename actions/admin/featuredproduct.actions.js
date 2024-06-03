"use server";
import { auth } from "@/auth";
import FeaturedProduct from "@/lib/models/FeaturedProduct";
import Product from "@/lib/models/Product";
import dbConnect from "@/utils/dbConnect";


export const createFeaturedProduct = async (payload) => {
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

  const resp = await Product.findById(payload.productId);
  const image = resp.images[0];

  const res = await FeaturedProduct.create({ ...payload, image });

  if (res) {
    return JSON.parse(
      JSON.stringify({
        message: "Featured Product Created Successfully",
        status: 200,
        data: res,
      })
    );
  } else {
    return JSON.parse(
      JSON.stringify({
        message: "Featured Product Not Created",
        status: 400,
      })
    );
  }
};
