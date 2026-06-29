const Quiz = require("../models/Quiz");

// Create Quiz
const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);

    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({
      message: "Quiz Creation Failed",
    });
  }
};

// Get all quizzes
const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();

    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch quizzes",
    });
  }
};

module.exports = {
  createQuiz,
  getQuizzes,
};
