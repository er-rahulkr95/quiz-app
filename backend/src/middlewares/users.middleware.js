const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");


// middleware to check if user trying to login exists in database or not
const checkUserExistsInDB = catchAsync(async(req,res,next)=>{
    try{
        const {email} = req.body;
        const user = await UserServiceInstance.findByEmail(email);
        if(!user){
          res.status(404).json({message:"User Does Not Exist", success:false})

        }else{
            next()
        }
    }catch(error){
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            "Could not find user"
          );
    }
})


//middleware to check is logged in user is admin or normal user
const isAdmin = catchAsync(async(req,res,next)=>{
    try {
        const user  = await UserServiceInstance.findWithId(req.user._id);
        if(user.role === "admin"){
            next()
        }else{
            res.status(401).json({message: "You are not authorized", success:false})
        }
  
    } catch (error) {
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            "Could not find user"
          );
    }
})

module.exports = {checkUserExistsInDB, isAdmin };