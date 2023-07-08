const mongoose = require("mongoose");
const app = require("./app");
const config = require ("./config/config");
const winston = require("winston");
const logConfiguration ={
    transports:[new winston.transports.Console()]
}

const logger = winston.createLogger(logConfiguration);

// Create Mongo connection and get the express app to listen on config.port
mongoose.connect(config.mongoose.url, config.mongoose.options).then(resp=>{
   logger.info("Data base connected at: " + config.mongoose.url) ;
   app.listen(config.port,()=>{
    logger.info("Backend started at: " + config.port)
   })
}).catch(err=>{
    logger.info("Something wrong happend", err)
})