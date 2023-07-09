const QuizService = require("../services/quiz.service");
const QuizServiceInstance = new QuizService;
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");



const createQuiz = catchAsync(async(req,res)=>{
        try {
            const createQuiz = await QuizServiceInstance.create(req.body, req.user._id);
            if(createQuiz.code === 11000){
                res.status(409).json({message: "Quiz Already Exits By Same Quiz Name", success:false})
            }else{
                res.status(200).json({message: "Quiz created Successfully", success:true, createQuiz})
            }
        } catch (error) {
            if(error.code === 11000){
                throw new ApiError(httpStatus.CONFLICT,"Quiz Already Exits By Same Quiz Name")
               }else {
                throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to create new user")
            }
        }
})


const getAllQuiz = catchAsync(async(req,res)=>{
    try {
        const allQuiz = await QuizServiceInstance.getAllQuiz();
        res.status(200).json({message:" All Quiz fetched successfully", success:true, data:allQuiz});  
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to get quiz's")
    }
})

const getQuizById = catchAsync(async(req,res)=>{
    try {
        const quiz = await QuizServiceInstance.quizById(req.params.quizId);
        if(quiz){
        res.status(200).json({message:"Quiz fetched successfully", success:true, data:quiz})
        }else{
        res.status(404).json({message:"Quiz Not exists", success:false, data:quiz})

        }
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to get quiz");
    }
})

const updateQuiz = catchAsync(async(req,res)=>{
    try {
        const {quizId} = req.params;
        const updatedQuiz = await QuizServiceInstance.quizUpdate(quizId,req.body);
        res.status(200).json({message:"Quiz updated successfully", success:true, data:updatedQuiz})

    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to update quiz");
        
    }
})

const deleteQuiz = catchAsync(async(req,res)=>{
    try {
        const {quizId} = req.params;
        const updatedQuiz = await QuizServiceInstance.quizDelete(quizId);
        res.status(200).json({message:"Quiz deleted successfully", success:true, data:updatedQuiz})

    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to delete quiz");
        
    }
})

const addQuizQuestion = catchAsync(async(req,res)=>{
    try {
        const {quizId} = req.params;
        const question = await QuizServiceInstance.addQuestion(quizId,req.body);
        res.status(200).json({message:"Question Added SuccessFully", success:true, data:question})
        
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to add question");
    }
})

const updateQuizQuestion = catchAsync(async(req,res)=>{
    try {
        const {questionId} = req.params;
        const updatedQuestion = await QuizServiceInstance.updateQuestion(questionId, req.body)
        res.status(200).json({message:"Question updated SuccessFully", success:true, data:updatedQuestion})
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to update question");
        
    }
})

const deleteQuizQuestion = catchAsync(async(req,res)=>{
    try {
        const {questionId} = req.params;
        const deletedQuestion = await QuizServiceInstance.deleteQuestion(questionId);
        res.status(200).json({message:"Question Deleted SuccessFully", success:true, data:deletedQuestion})
        
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to delete question");
        
    }
})

module.exports = {createQuiz, getAllQuiz, getQuizById, updateQuiz, deleteQuiz, addQuizQuestion,updateQuizQuestion,deleteQuizQuestion }
