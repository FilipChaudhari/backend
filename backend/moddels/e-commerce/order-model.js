import mongoose from "mongoose";

const orederItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice:{
        required:true,
        type:Number
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orederItemSchema]
    } ,
    address:{
        type:String,
        required:true   
    },
    status:{
        type:String,
        enum:["pending","shipped","delivered"],
        default:"pending"
    }
},{timestamps:true});

export const Order = mongoose.model("Order",orderSchema)