import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, unique: true },
});

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
