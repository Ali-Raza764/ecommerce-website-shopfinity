import mongoose from "mongoose";
const { Schema } = mongoose;

const CartSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1, default: 1 },
      },
    ],
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
