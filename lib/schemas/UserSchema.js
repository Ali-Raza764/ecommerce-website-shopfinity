import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  AuthId: String,
  adress: String,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
