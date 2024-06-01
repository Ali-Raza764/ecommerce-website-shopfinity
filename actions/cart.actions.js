"use server";
import Cart from "@/lib/models/Cart";
import dbConnect from "@/utils/dbConnect";
import { auth, currentUser } from "@clerk/nextjs/server";

dbConnect();

export const addToCart = async (productId) => {
  const { userId } = auth();
  if (!userId) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

  // Get the user email from the database using the logged-in user information
  const { emailAddresses } = await currentUser();
  const email = emailAddresses[0].emailAddress;

  const cart = await Cart.findOne({ userEmail: email });

  if (cart) {
    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex > -1) {
      cart.products[productIndex].quantity += 1;
    } else {
      cart.products.push({ productId, quantity: 1 });
    }
    await cart.save();
    return JSON.parse(
      JSON.stringify({
        message: "Product Added to Cart Successfully",
        status: 200,
      })
    );
  }

  const newCart = await Cart.create({ userEmail: email, products: [{ productId, quantity: 1 }] });
  if (newCart) {
    return JSON.parse(
      JSON.stringify({
        message: "Product Added to Cart Successfully",
        status: 200,
      })
    );
  } else {
    return JSON.parse(
      JSON.stringify({
        message: "Failed to add product to cart",
        status: 500,
      })
    );
  }
};
export const removeFromCart = async (productId) => {
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

  const cart = await Cart.findOne({ userEmail: email });

  if (cart) {
    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex > -1) {
      if (cart.products[productIndex].quantity > 1) {
        cart.products[productIndex].quantity -= 1;
      } else {
        cart.products.splice(productIndex, 1);
      }
      await cart.save();
      return JSON.parse(
        JSON.stringify({
          message: "Product Removed from Cart Successfully",
          status: 200,
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          message: "Product Not Found in Cart",
          status: 404,
        })
      );
    }
  } else {
    return JSON.parse(
      JSON.stringify({
        message: "Cart Not Found",
        status: 404,
      })
    );
  }
};