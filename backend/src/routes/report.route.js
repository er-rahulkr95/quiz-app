const {submitReport,getReportByQuizId,getReportByUserId, getAllReport} = require("../controllers")
const { isAdmin } = require("../middlewares");
const router = require("express").Router();

//For authentication of the registered user and admin
const passport = require("passport");
const authenticateToken = passport.authenticate("jwt",{session:false});

//Post rout to Submit the answers by the user
router.post("/:quizId/submit", authenticateToken, submitReport);

//Get route to get the result or report of the quiz just after submission
router.get("/quiz/:quizId", authenticateToken,getReportByQuizId);

// Get route to get all the report of all the quizes attempted by the user
router.get("/user/:userId", authenticateToken, getReportByUserId)

//Get route for admin to get all the report of all the quizes attempted by all the user registered
router.get("/all", authenticateToken, isAdmin, getAllReport)

module.exports = router;