"use server";
import { auth } from "@/auth";
import WishList from "@/lib/models/WishList";
import dbConnect from "@/utils/dbConnect";

dbConnect();

export const addToWishList = async (productId) => {
  const session = await auth();
  if (!session) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const userId = session.user.id;

  const wishlist = await WishList.findOne({ userId });

  if (wishlist) {
    const productIndex = wishlist.products.findIndex(
      (p) => p.productId.toString() === productId
    );
    if (productIndex === -1) {
      wishlist.products.push({ productId });
      await wishlist.save();
      return JSON.parse(
        JSON.stringify({
          message: "Product Added to Wishlist Successfully",
          status: 200,
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          message: "Product Already in Wishlist",
          status: 400,
        })
      );
    }
  }

  const newWishList = await WishList.create({
    userId,
    products: [{ productId }],
  });
  if (newWishList) {
    return JSON.parse(
      JSON.stringify({
        message: "Product Added to Wishlist Successfully",
        status: 200,
      })
    );
  } else {
    return JSON.parse(
      JSON.stringify({
        message: "Failed to add product to wishlist",
        status: 500,
      })
    );
  }
};
export const removeFromWishList = async (productId) => {
  const session = await auth();
  if (!session) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const userId = session.user.id;

  const wishlist = await WishList.findOne({ userId });

  if (wishlist) {
    const productIndex = wishlist.products.findIndex(
      (p) => p.productId.toString() === productId
    );
    if (productIndex > -1) {
      wishlist.products.splice(productIndex, 1);
      await wishlist.save();
      return JSON.parse(
        JSON.stringify({
          message: "Product Removed from Wishlist Successfully",
          status: 200,
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          message: "Product Not Found in Wishlist",
          status: 404,
        })
      );
    }
  } else {
    return JSON.parse(
      JSON.stringify({
        message: "Wishlist Not Found",
        status: 404,
      })
    );
  }
};
