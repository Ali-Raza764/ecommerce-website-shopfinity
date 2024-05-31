"use server";
import { revalidatePath } from "next/cache";
const revalidate = async (path) => {
  revalidatePath(path);
};
export default revalidate;
