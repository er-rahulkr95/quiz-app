const {Users} = require("../models");

// Class to perform CRUD operation on users collection in MongoDB using Users model

class UserService{

    findByEmail = async(email)=>{
        try {
        const userResult = await Users.findOne({email})
            return userResult;
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

    findWithId = async(id) =>{
        try {
            const user =  await Users.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = UserService;