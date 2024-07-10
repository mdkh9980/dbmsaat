import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: float,
        required: true
    },
    stock: {
        type: Number,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    specification: {
        type: String,
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    }
}, {timestamps: true});

export const Product = mongoose.model("Product", productSchema);