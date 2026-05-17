import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    content:{
        type:string,
        required:true
    },
    completed:{
        type:boolean,
        default:false
    },
    createdBy:{
        type:mongoose.schema.Types.ObjectId,
        ref:"User"
    },

},{timestamps:true});


export const ToDo = mongoose.model("ToDo",userSchema)
