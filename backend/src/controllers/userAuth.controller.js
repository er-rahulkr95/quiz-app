const UserAuthService = require("../services/userAuth.service");
const UserAuthServiceInstance = new UserAuthService();
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

/**
 * Utilizing the UserAuth Service Layer to register and login a user, for routes requesting these controllers
 */

const userRegister = catchAsync(async(req,res)=>{
    try {
        const registerUser = await UserAuthServiceInstance.signup(req.body)
        res.status(200).json({message: "User Registered Successfully", success:true, data:{userId:registerUser._id}})
    } catch (error) {
       if(error.code === 11000){
        throw new ApiError(httpStatus.CONFLICT,"User already registered")
       }else {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to create new user")
    }
    }
})

const userLogin = catchAsync(async(req,res)=>{
    try {
        const logInUser = await UserAuthServiceInstance.login(req.body);
        if(logInUser.isLoggedIn){
            res.status(200).json({message:"Log In Successful",data:logInUser});
        }else{
           res.status(403).json({message:"Invalid Password"})
        }    
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to login")
        
    }
})

module.exports = {userRegister, userLogin}