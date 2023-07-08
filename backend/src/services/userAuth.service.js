const UserService = require("./user.service")
const UserServiceInstance = new UserService();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserAuthService {
    signup =async(userDetails)=>{
        try {
            const securedPassword = await this.encryptPassword(userDetails.password);
            const userRegister = await UserServiceInstance.register({...userDetails, password:securedPassword})
            return userRegister;
        } catch (error) {
            
        }
    }

    encryptPassword = async(password)=>{
        try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password,salt);
            return hashedPassword;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserAuthService