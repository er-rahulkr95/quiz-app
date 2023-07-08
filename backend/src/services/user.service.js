const {Users} = require("../models");



class UserService{

    findByEmail = async(email)=>{
        try {
            
        const userResult = await Users.findOne({email})
         return userResult
        } catch (error) {
            return error;
        }
    }

    register = async(userDetails)=>{
        try {
            const newUser = new Users(userDetails)
            const result = await newUser.save();
            return result;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = UserService;