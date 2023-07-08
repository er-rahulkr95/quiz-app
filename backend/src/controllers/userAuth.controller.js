const UserAuthService = require("../services/userAuth.service");
const UserAuthServiceInstance = new UserAuthService();
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");


const userRegister = catchAsync(async(req,res)=>{
    try {
        const registerUser = await UserAuthServiceInstance.signup(req.body)
        res.status(200).json({message: "User Registered Successfully", success:true})
    } catch (error) {
       if(error.code === 11000){
        throw new ApiError(httpStatus.CONFLICT,"User already registered")
       }else {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to create new user")
    }
    }
})


module.exports = {userRegister}