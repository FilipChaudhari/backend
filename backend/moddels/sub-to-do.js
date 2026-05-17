import monngoose from "mongoose";

const subToDoSchema = new mongoose.Schema({

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
    subToDos:[
        {
           type:mongoose.schema.Types.ObjectId,
           ref:"SubToDo"
        }
    ]
},{timestamps:true})

export const SubToDo = mongoose.model("SubToDo",subToDoSchema)