module.exports.userRegister = require("./userAuth.controller").userRegister;
module.exports.userLogin = require("./userAuth.controller").userLogin;


module.exports.createQuiz = require("./quizs.controller").createQuiz;
module.exports.getAllQuiz = require("./quizs.controller").getAllQuiz;
module.exports.getQuizById = require("./quizs.controller").getQuizById;
module.exports.updateQuiz = require("./quizs.controller").updateQuiz;
module.exports.deleteQuiz = require("./quizs.controller").deleteQuiz;


module.exports.addQuizQuestion = require("./quizs.controller").addQuizQuestion;
module.exports.updateQuizQuestion = require("./quizs.controller").updateQuizQuestion;
module.exports.deleteQuizQuestion = require("./quizs.controller").deleteQuizQuestion;

