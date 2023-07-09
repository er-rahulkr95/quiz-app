const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const quizSchema = new mongoose.Schema({
    quizName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    duration:{
        type:Number,
        required:true,
    },
    totalMarks:{
        type:Number,
        required:true,
    },
    passingMarks:{
        type:Number,
        required:true
    },
    createdBy:{
        type : ObjectId,
        ref:"users",
        required:true
    },
    questions:[{type:ObjectId, ref:"questions"}]
},
{timestamps:true}
)

const Quiz = mongoose.model("quizs", quizSchema);

module.exports ={ Quiz}
