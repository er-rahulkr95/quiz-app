const {createQuiz, getAllQuiz, getQuizById,updateQuiz, deleteQuiz, addQuizQuestion, updateQuizQuestion,deleteQuizQuestion,allPublishedQuiz,getPublishedQuizById} = require("../controllers")
const {isAdmin} = require("../middlewares");
const router = require("express").Router();


//For authentication of the registered user and admin
const passport = require("passport");
const authenticateToken = passport.authenticate("jwt",{session:false});


/**
 * Routes for only admin role to add, update and delete a quiz.
 */

// Post route to add a new quiz
router.post("/add", authenticateToken,isAdmin,createQuiz)

// Get Route to get all quiz created by the admin
router.get("/all-quiz",authenticateToken, isAdmin, getAllQuiz )

// Get route to get quiz details along with the questions and its options and correct answer for particular quiz created by admin
router.get("/id/:quizId", authenticateToken, isAdmin, getQuizById)

// Patch route to update quiz details only for particular quiz created by admin
router.patch("/id/:quizId",authenticateToken, isAdmin, updateQuiz)

//Delete route to delete a quiz along with its questions
router.delete("/id/:quizId",authenticateToken,isAdmin,deleteQuiz)


/**
 * Routes for only admin role to add, update and delete a question from the quiz
 */

// Post route to add quiz Questions by admin
router.post("/question/:quizId",authenticateToken, isAdmin, addQuizQuestion)

//Patch route to update a question by admin
router.patch("/question/:questionId", authenticateToken,isAdmin, updateQuizQuestion )

//Delete route to delete a question by admin
router.delete("/question/:questionId",authenticateToken, isAdmin,deleteQuizQuestion)


/**
 * Routes For Normal User to get quiz and along with questions
 *  
 * */ 

// Get route to get all published quiz for normal user
router.get("/published/all-quiz",authenticateToken,allPublishedQuiz)

// Get route to get paticular published quiz details along with question and option for normal user
router.get("/published/id/:quizId",authenticateToken,getPublishedQuizById)

module.exports = router;
