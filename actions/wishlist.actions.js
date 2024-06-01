"use server";
import WishList from "@/lib/models/WishList";
import dbConnect from "@/utils/dbConnect";
import { auth, currentUser } from "@clerk/nextjs/server";

dbConnect();

export const addToWishList = async (productId) => {
  const { userId } = auth();
  if (!userId) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const { emailAddresses } = await currentUser();
  const email = emailAddresses[0].emailAddress;

  const wishlist = await WishList.findOne({ userEmail: email });

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
    userEmail: email,
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
  const { userId } = auth();
  if (!userId) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  const { emailAddresses } = await currentUser();
  const email = emailAddresses[0].emailAddress;

  const wishlist = await WishList.findOne({ userEmail: email });

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