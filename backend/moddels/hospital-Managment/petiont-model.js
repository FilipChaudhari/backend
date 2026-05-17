import mongoose from "mongoose"

const petiontSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        enum:["male","female","other"],
        required:true   
    },
    addmittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        required:true
    }

},{timestamps:true});

export const Petiont = mongoose.model("Petiont",petiontSchema)