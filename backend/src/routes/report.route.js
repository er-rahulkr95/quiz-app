const {submitReport,getReportByQuizId,getReportByUserId, getAllReport} = require("../controllers")
const router = require("express").Router();

const passport = require("passport");
const { isAdmin } = require("../middlewares");
const authenticateToken = passport.authenticate("jwt",{session:false});


router.post("/:quizId/submit", authenticateToken, submitReport);

router.get("/quiz/:quizId", authenticateToken,getReportByQuizId);

router.get("/user/:userId", authenticateToken, getReportByUserId)

router.get("/all", authenticateToken, isAdmin, getAllReport)

module.exports = router;