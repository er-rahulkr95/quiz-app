const config = require("../config/config");


// middleware to handle any error occured

const errorHandlers = (err,req,res,next)=>{
    let {statusCode,message} = err;
    res.locals.errorMessage = err.message;
    const response = {
        code: statusCode,
        message,
        ...(config.env === "development" && {stack:err.stack})
    };
    
    if(config.env === "development"){
        console.log(err);
    }

    res.status(statusCode).send(response);
}

module.exports = {
    errorHandlers
}