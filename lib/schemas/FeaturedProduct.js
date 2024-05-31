import mongoose from "mongoose";
const { Schema } = mongoose;

const FeaturedProduct = new Schema({
  productId: String,
  image: String,
  category: String,
  headingText: String,
  relatedText: String,
});

export default mongoose.models.FeaturedProduct ||
  mongoose.model("FeaturedProduct", FeaturedProduct);

