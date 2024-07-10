import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema({
    cartId: {
        type: Schema.Types.ObjectId,
        ref: "Cart"
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        default: 1
    }
}, {timestamps})

export const CartItem = mongoose.model("CartItem", cartItemSchema);