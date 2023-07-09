const {Quiz} = require("../models");
const {Question} = require("../models")

// Class to perform CRUD operation on quizs collection in mongoDB using Quiz model

class QuizService{
    create = async(quizData, createdBy)=>{
        try {
                const data = {...quizData, createdBy}
            const createQuiz = new Quiz(data);
            const saveQuiz = await createQuiz.save();
            return saveQuiz;
        } catch (error) {
            return error;
        }
    }

    getAllQuiz = async()=>{
        try {
            const allQuiz = await Quiz.find({});
            return allQuiz;
        } catch (error) {
            throw error;
        }
    }

    getAllPublishedQuiz = async()=>{
        try {
            const allQuiz = await Quiz.find({}).where('isPublished').equals(true).select("-createdBy");
            return allQuiz;
        } catch (error) {
            throw error;
        }
    }


    quizById = async(quizId)=>{
        try {
            const quiz = await Quiz.findById(quizId).populate("questions")
            return quiz; 
        } catch (error) {
            throw error;
        }
    }

    publishedQuizById =async(quizId)=>{
        try {
            const quiz = await Quiz.findById(quizId).populate("questions", "-correctOptions").select("-createdBy")
            return quiz; 
        } catch (error) {
            throw error;
        }
    }

    quizUpdate = async(quizId, changes)=>{
        try {
            const updatedQuiz = await Quiz.findByIdAndUpdate({_id:quizId}, changes, {new:true});
            return updatedQuiz;
        } catch (error) {
            throw error
        }
    }

    quizDelete = async(quizId)=>{
        try {
            const deleteQuiz =  await Quiz.findByIdAndDelete({_id:quizId})
            return deleteQuiz
        } catch (error) {
            throw error;
        }
    }

    addQuestion = async(quizId, question)=>{
        try{
            const quizData = {...question, quiz:quizId}
            const questionAdd = new Question(quizData);
            const saveQuestion = await questionAdd.save();
            const quiz = await Quiz.findByIdAndUpdate(
                {_id :quizId},
                {$push: {questions:saveQuestion._id}},
                {new:true})
                return {saveQuestion,quiz};
        }catch(error){
            throw error;
        }
    }

    updateQuestion = async(questionId, changes)=>{
        try {
            const questionUpdate = await Question.findByIdAndUpdate({_id:questionId}, changes,{new:true});
            return questionUpdate;
        } catch (error) {
            throw error;
        }
    }

    deleteQuestion = async(questionId)=>{
        try {
            const questionDeleted = await Question.findByIdAndDelete({_id:questionId});

            const deleteFromQuiz = await  Quiz.findOneAndUpdate({_id:questionDeleted.quiz},{$pull:{questions:questionId}},{new:true});
            return {questionDeleted, deleteFromQuiz}
        } catch (error) {
            throw error;
        }
    }
}


module.exports = QuizService;