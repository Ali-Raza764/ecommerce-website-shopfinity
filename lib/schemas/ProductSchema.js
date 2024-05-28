import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  category: String,
  mainImageUrl: String,
  images: Array,
  price: String, //todo make price and object price:{actualPrice:"", discountedPrice:"", isSaleOn:false}
  excerpt: String,
  description: String,
  rating: String,
  reviews: Array,
});

export default mongoose.models.Product || mongoose.model("Product", userSchema);
