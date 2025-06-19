import {Schema,model} from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
},{
    timestamps:true,
    strict:false
});

export default model ("Task",taskSchema);