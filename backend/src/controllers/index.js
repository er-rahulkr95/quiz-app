module.exports.userRegister = require("./userAuth.controller").userRegister;
module.exports.userLogin = require("./userAuth.controller").userLogin;


module.exports.createQuiz = require("./quizs.controller").createQuiz;
module.exports.getAllQuiz = require("./quizs.controller").getAllQuiz;
module.exports.getQuizById = require("./quizs.controller").getQuizById;
module.exports.updateQuiz = require("./quizs.controller").updateQuiz;
module.exports.deleteQuiz = require("./quizs.controller").deleteQuiz;
module.exports.allPublishedQuiz = require("./quizs.controller").allPublishedQuiz;
module.exports.getPublishedQuizById = require("./quizs.controller").getPublishedQuizById;




module.exports.addQuizQuestion = require("./quizs.controller").addQuizQuestion;
module.exports.updateQuizQuestion = require("./quizs.controller").updateQuizQuestion;
module.exports.deleteQuizQuestion = require("./quizs.controller").deleteQuizQuestion;

module.exports.submitReport = require("./report.controller").submitReport;
module.exports.getReportByQuizId = require("./report.controller").getReportByQuizId;
module.exports.getReportByUserId = require("./report.controller").getReportByUserId;
module.exports.getAllReport = require("./report.controller").getAllReport;
