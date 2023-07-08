const { string } = require("joi");
const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
        fullName:{
            type:String,
            required:true,
            trim:true,
            default:""
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
            validate:(value)=>validator.isEmail(value)
        },
        password:{
            type:String,
            required:true,
            trim:true,
            minLength:6
        },
        role:{
            type:String,
            trim:true,
            default:"user"
        }
},{
    timestamps:true
})


const Users = mongoose.model("users", userSchema);

module.exports ={Users};