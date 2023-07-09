const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const morgan = require("morgan");
const {errorHandlers} = require("./middlewares");
const ApiError = require("./utils/ApiError");
const helmet  = require("helmet");
const authRoutes = require("./routes/userAuth.route")
const quizRoutes = require("./routes/quiz.route")
const reportRoutes = require("./routes/report.route")
const configurePassport = require("./config/passport")
const passport = require("passport");
const app= express();

configurePassport(passport);

// HTTP request logger middleware
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


// routes
// routes for registration and login
app.use("/auth",authRoutes);

// route for quiz
app.use("/quiz",quizRoutes);

// route for report/result
app.use("/report",reportRoutes);

// send back a 404 error for any unknown api request
app.use((req,res,next)=>{
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"))
});


// handle error
app.use(errorHandlers);

module.exports = app;