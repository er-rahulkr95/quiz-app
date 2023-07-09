const ReportService = require("../services/report.service");
const ReportServiceInstance = new ReportService();
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

/**
 * Utilizing the Report Service Layer to submit answer and get detailed report/result from mongoDB, 
 * and return them as reponse for routes requesting these controllers
 */


const submitReport = catchAsync(async(req,res)=>{
    try {

        const {quizId} = req.params;
        const userId = req.user._id; 
        const report  = await ReportServiceInstance.submit(quizId,userId, req.body)
        res.status(201).json({message:"Quiz Answers submitted Succesfully", success:true, data:report})
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to submit report");   
    }
})

const getReportByQuizId = catchAsync(async(req,res)=>{
    try {
        const {quizId} = req.params;
        const userId = req.user._id;
        const report  = await ReportServiceInstance.report(quizId,userId)
        res.status(200).json({message:"Report Fetched Succesfully", success:true, data:report})
         
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to get report");   
        
    }
})

const getReportByUserId = catchAsync(async(req,res)=>{
    try {
        const {userId} = req.params;
        const report  = await ReportServiceInstance.userReport(userId)
        res.status(200).json({message:"Report Fetched Succesfully", success:true, data:report})
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to get report");   
        
    }
})

const getAllReport = catchAsync(async(req,res)=>{
    try {
        const report  = await ReportServiceInstance.allReport(req.body)
        res.status(200).json({message:"All Report Fetched Succesfully", success:true, data:report})
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to get all report");   
        
    }
})


module.exports = {submitReport,getReportByQuizId, getReportByUserId,getAllReport}