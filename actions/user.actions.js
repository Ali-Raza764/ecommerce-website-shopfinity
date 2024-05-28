"use server";
import User from "@/lib/schemas/UserSchema";
import dbConnect from "@/utils/dbConnect";
import { auth } from "@clerk/nextjs/server";

export const CreateUser = async (payload) => {
  //* Protect the server action to allow only authenticated users to vist. Server action is basically an api endpoint exposed by the nextjs server
  const { userId } = auth();
  if (!userId) {
    return JSON.parse(
      JSON.stringify({
        message: "Unauthorized",
        status: 401,
      })
    );
  }

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
