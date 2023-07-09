
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// mongoose schema for quiz model
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
    questions:[{type:ObjectId, ref:"questions"}],

    isPublished:{
        type: Boolean,
        required:true,
        default:false
    }
},
{timestamps:true}
)

//creating a quiz model
const Quiz = mongoose.model("quizs", quizSchema);

module.exports ={ Quiz}
