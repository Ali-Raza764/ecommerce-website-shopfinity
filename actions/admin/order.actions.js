"use server";

import Order from "@/lib/models/Order";
import dbConnect from "@/utils/dbConnect";

export const createOrder = async (payload) => {
  await dbConnect();
  try {
    const order = await Order.create(payload);
    if (order) {
      console.log(order);
      return {
        status: 200,
        message: "Order Created Successfully",
        data: order,
      };
    } else {
      return {
        status: 401,
        message: "Some Error Occured",
        data: order,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
