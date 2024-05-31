"use server";
import FeaturedProduct from "@/lib/schemas/FeaturedProduct";
import Product from "@/lib/schemas/Product";
import checkRole from "@/utils/checkRole";
import dbConnect from "@/utils/dbConnect";

dbConnect();

export const createFeaturedProduct = async (payload) => {
  //* Validate the admin first to protect tbis action
  if (!checkRole("admin")) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }
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
