import Category from "@/lib/schemas/Category";
import dbConnect from "./dbConnect";
import Product from "@/lib/schemas/Product";
import FeaturedProduct from "@/lib/schemas/FeaturedProduct";

await dbConnect();

export const fetchAllProducts = async () => {
  try {
    const products = await Product.find({}).exec();
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchAllCategories = async () => {
  try {
    const categories = await Category.find({}).exec();
    return categories;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchFeaturedProduct = async () => {
  try {
    const product = await FeaturedProduct.find({}).exec();
    return product[0];
  } catch (error) {
    throw new Error(error);
  }
};
