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
            throw error
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

    login = async(loginData) =>{
        try {
            const userLoggedInDetail = await this.verifyPassword(loginData.email,loginData.password);
            if(userLoggedInDetail){
                const token = await this.generateToken(userLoggedInDetail._id);
                return {isLoggedIn: true, token:token,fullName:userLoggedInDetail.fullName, role:userLoggedInDetail.role}
            }else{
                return {isLoggedIn:false}
            }
        } catch (error) {
            throw error;
        }
    }

     verifyPassword = async(email,password)=>{
        try {
            const userFromDb = await UserServiceInstance.findByEmail(email)
            const userPasswordFromDb = userFromDb.password;
            const isValidPassword = await bcrypt.compare(password, userPasswordFromDb)
            if(isValidPassword){
                return userFromDb;
            }else{
                return null;
            }
        } catch (error) {
            throw error;
        }
     }   
 
    secret = process.env.SECRET
    generateToken = async(userId)=>{
            try {
                const payload = {userId};
                const options = {expiresIn:"1d"};
                const token = jwt.sign(payload, this.secret, options)
                return token
            } catch (error) {
                throw error
            }

    }
}

module.exports = UserAuthService