import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createOrder } from "@/actions/admin/order.actions";

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY);
export async function POST(req, res) {
  const payload = await req.text();
  const response = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");

  const dateTime = new Date(response?.created * 1000).toLocaleDateString();
  const timeString = new Date(response?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type == "checkout.session.completed") {
      const userId = event.data.object.metadata.userId;
      const productId = event.data.object.metadata.productId;
      const shippingAddress = event.data.object.customer_details?.address;
      const pricePaid = event.data.object.amount_total;
      // console.log(userId, productId, shippingAddress, pricePaid);
      const res = await createOrder({
        userId,
        productId,
        shippingAddress,
        pricePaid,
        quantity: 1,
      });
      // console.log(res);
    }
    return NextResponse.json({
      status: "success",
      event: event.type,
    });
  } catch (error) {
    return NextResponse.json({ error: "Error" });
  }
}
