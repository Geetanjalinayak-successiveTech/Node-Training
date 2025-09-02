import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  customerName: { type: String },
  orderDate: { type: Date },
  status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered"],
    default: "Pending",
  },
  items: [{ productName: String, quantity: Number, price: Number }],
  totalAmount: { type: Number },
});

export const userModel= mongoose.model("userModel", userSchema)
