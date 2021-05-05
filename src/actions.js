const answerQuestion = (payload) => {
  return { type: "ANSWER_QUESTION", payload}
}

const incrementQuestion = () => {
  return { type: "INCREMENT_QUESTION" }
}

const initializeQuizzes = (payload) => {
  return { type: "LOAD_QUIZZES", payload }
}

const startQuiz = (payload) => {
  return { type: "START_QUIZ", payload }
}

const updateReportCard = (payload) => {
  return { type: "UPDATE_REPORT_CARD", payload }
}

export {
  answerQuestion,
  incrementQuestion,
  initializeQuizzes,
  startQuiz,
  updateReportCard
}
