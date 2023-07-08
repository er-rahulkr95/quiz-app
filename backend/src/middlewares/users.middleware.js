const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

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

module.exports = {checkUserExistsInDB };