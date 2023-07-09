const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const questionSchema = new mongoose.Schema({
        question:{
            type:String,
            required:true,
        },
        correctOptions:{
            type:[{type:String}],
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

const Question = mongoose.model("questions",questionSchema);

module.exports ={Question};