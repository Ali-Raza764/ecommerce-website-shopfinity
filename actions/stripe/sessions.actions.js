"use server";
import { auth } from "@/auth";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY);

export const createCheckout = async (data) => {
  const authSession = await auth();
  if (!authSession) {
    return {
      status: 400,
      message: "Unauthorized",
    };
  }
  const { productId, name, unitPrice, quantity, images } = data;
  console.log(data);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'], // Add other allowed countries as needed
    },
    metadata: {
      userId: authSession.user.id,
      productId,
    },
    line_items: [
      {
        price_data: {
          currency: "usd",

          product_data: {
            name: name,
            images,
          },
          unit_amount: unitPrice*100, // Price in cents
        },
        quantity: quantity,
      },
    ],

    mode: "payment",
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/cancel`,
  });
  return {
    status: 200,
    checkoutUrl: session.url,
  };
};
