const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const morgan = require("morgan");
const {errorHandlers} = require("./middlewares/error.middleware");
const ApiError = require("./utils/ApiError");
const helmet  = require("helmet");

const app= express();

app.use(morgan('dev'));

// set security HTTP headers
app.use(helmet());


// parse json request body
app.use(express.json({limit:"10mb"}))

// parse urlencoded request body
app.use(express.urlencoded({extended:true, limit:"10mb"}))

//gzip compression
app.use(compression());

//enable cors

const corsConfig = {
    origin:true,
    credentials :true,
}

app.use(cors(corsConfig));
app.options("*",cors());


// send back a 404 error for any unknown api request
app.use((req,res,next)=>{
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"))
});


// handle error
app.use(errorHandlers);

module.exports = app;