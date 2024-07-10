import mongoose from "mongoose";
import { Schema } from "mongoose";

const paymentSchema = new Schema({
    transactionId: {
        type: String
    },
    paymentMethod: {
        type: String,
        enum: ["Card", "Cash", "UPI", "Net Banking"],
        required: true,
        default: "Card"
    },
    paymentStatus: {
        type: String
    },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    }
}, {timestamps: true});

export const Payment = mongoose.model("Payment", paymentSchema);