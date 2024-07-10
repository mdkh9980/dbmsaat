import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order",
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: float,
    }
}, {timestamps: true});

export const OrderItem = mongoose.model("OrderItem", orderItemSchema);