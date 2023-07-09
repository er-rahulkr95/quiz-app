
// middleware to validate the JOI schema for inputs coming during registration and login action performed by the user
const validateSchema = (schema) => (req,res,next)=>{
    const {error} = schema.validate(req.body);
    if(error){
        res.status(422).json(error);
    }else{
        next();
    }
}

module.exports = {validateSchema};


