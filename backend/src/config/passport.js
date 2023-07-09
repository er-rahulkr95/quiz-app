const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const secret = process.env.SECRET;
const UserService = require("../services/user.service")
const UserServiceInstance = new UserService()

// options for creating a strategy for authentication using passport
const options ={
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : secret
}

// Creating JWT strategy for authentication using passport.
const strategy = new JWTStrategy(options, async(payload,done)=>{
    try {
        const userFromDb = await UserServiceInstance.findWithId(payload.userId);
         done (null, userFromDb);
    } catch (error) {
        done(error,null)
    }
    
})

module.exports = (passport)=>{
    passport.use(strategy);
}