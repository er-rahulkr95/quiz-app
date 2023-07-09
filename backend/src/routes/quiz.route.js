const {createQuiz, getAllQuiz, getQuizById,updateQuiz, deleteQuiz, addQuizQuestion, updateQuizQuestion,deleteQuizQuestion} = require("../controllers")
const {isAdmin} = require("../middlewares");
const router = require("express").Router();



const passport = require("passport");
const authenticateToken = passport.authenticate("jwt",{session:false});

router.post("/add", authenticateToken,isAdmin,createQuiz)

router.get("/all-quiz",authenticateToken, isAdmin, getAllQuiz )

router.get("/id/:quizId", authenticateToken, isAdmin, getQuizById)

router.patch("/id/:quizId",authenticateToken, isAdmin, updateQuiz)

router.delete("/id/:quizId",authenticateToken,isAdmin,deleteQuiz)

router.post("/question/add/:quizId",authenticateToken, isAdmin, addQuizQuestion)

router.patch("/question/update/:questionId", authenticateToken,isAdmin, updateQuizQuestion )

router.delete("/question/delete/:questionId",authenticateToken, isAdmin,deleteQuizQuestion)

module.exports = router;
