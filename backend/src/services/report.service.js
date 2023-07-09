const { Report, Users, Quiz } = require("../models")

// Class to perform CRUD operation on reports collection in MongoDB using Report model

class ReportService {

    submit = async (quizId, userId, answersData) => {
        try {

            const result = await this.calculateResult(quizId, answersData)
            const data = { user: userId, quiz: quizId, result: result }
            const reportSubmit = new Report(data);
            const reportSave = await reportSubmit.save();
            return reportSave;
        } catch (error) {
            throw error;
        }
    }

    calculateResult = async (quizId, answersData) => {
        try {
            const correctAnswer = [];
            const wrongAnswer = [];
            const quiz = await Quiz.findById(quizId).populate("questions")
            quiz.questions.forEach(ques => {
                if (ques.correctOptions === answersData[ques._id]) {
                    correctAnswer.push(ques);
                } else {
                    wrongAnswer.push(ques);
                }
            })

            let verdict = "Pass";
            if (correctAnswer.length < quiz.passingMarks) {
                verdict = "Fail"
            }

            return { correctAnswer, wrongAnswer, verdict }

        } catch (error) {
            return error;
        }
    }

    report = async (quizId, userId) => {
        try {
            const getReport = await Report.find({ user: userId, quiz: quizId });
            return getReport;
        } catch (error) {
            return error;
        }
    }

    userReport = async (userId) => {
        try {
            const getReport = await Report.find({ user: userId }).populate("quiz").populate("user").sort({ createdAt: -1 });
            return getReport;
        } catch (error) {
            return error;
        }
    }

    allReport = async (searchTexts) => {
        try {
            
            const { quizName, userName } = searchTexts;

            const quizs = await Quiz.find({
                quizName: {
                    $regex: quizName,
                },
            });

            
            const matchedQuizIds = quizs.map((quiz) => quiz._id);
          
            const users = await Users.find({
                fullName: {
                    $regex: userName,
                },
            });

            const matchedUserIds = users.map((user) => user._id);

            const getReport = await Report.find({
                quiz: { $in: matchedQuizIds },
                user: { $in: matchedUserIds}
            }).populate("quiz").populate("user").sort({ createdAt: -1 });

            return getReport;
        } catch (error) {
            return error;
        }
    }


}


module.exports = ReportService;