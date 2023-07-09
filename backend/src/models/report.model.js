const { object } = require("joi");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const reportSchema = new mongoose.Schema({
    user:{
        type: ObjectId,
        ref:"users"
    },
    quiz:{
        type:ObjectId,
        ref:"quizs"
    },
    result:{
        type:Object,
        required:true
    }
},{
    timestamps:true
})

const Report = mongoose.model("reports", reportSchema)
module.exports ={Report};