import mongoose, { Schema } from "mongoose"

const orderSchema = new Schema({
    totalAmount: {
        type: float,
        required: true
    },
    orderItems: {
        type: Schema.Types.ObjectId,
        ref: "OrderItems",
    }
}, {timestamps: true});

export const User = new mongoose.model("User", orderSchema);