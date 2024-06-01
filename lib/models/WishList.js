import mongoose from "mongoose";
const { Schema } = mongoose;

const WishListSchema = new Schema(
  {
    userEmail: { type: String, required: true, unique: true },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export default mongoose.models.WishList ||
  mongoose.model("WishList", WishListSchema);
