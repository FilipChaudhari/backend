import mongoose from "mongoose";

const userSchema = new mongoose.schema(
    {
        username:{
            type:string,
            required:true,
            unique:true
        },
        email:{
            type:string,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:string,
            required:[true, "password is required"]

        }
    },{timestamps:true}
)