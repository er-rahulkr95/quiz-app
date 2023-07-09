const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//mongoose schema for question model
const questionSchema = new mongoose.Schema({
        question:{
            type:String,
            required:true,
        },
        correctOptions:{
            type:String,
            required:true,
        },
        options:{
            type:Object,
            required:true
        },
        quiz:{
            type:ObjectId,
            ref:"quizs"
        }

},{
    timestamps:true
})


// creating a mongoose model for Question using question schema

const Question = mongoose.model("questions",questionSchema);

module.exports ={Question};