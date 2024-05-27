"use server";
import User from "@/lib/schemas/UserSchema";
import dbConnect from "@/utils/dbConnect";

export const CreateUser = async (payload) => {
  const email = payload.email;
  const conn = await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return JSON.parse(
      JSON.stringify({
        message: "User Already Exists",
        status: 400,
      })
    );
  }

  const users = await User.create(payload);

  const data = JSON.stringify(users);
  console.log("users ", users);
  return JSON.parse(
    JSON.stringify({
      status: 200,
      success: true,
      data: data,
    })
  );
};