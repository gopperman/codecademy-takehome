/**
 * Given a set of report cards and a quiz title, finds the correct report card
 * @param  {array} reportCards
 * @param  {string} quizTitle
 * @return {object} the report card (or undefined)
 */
const getReportCard = (reportCards, quizTitle) => {
  return reportCards.find((rc) => {
    return rc.quiz === quizTitle
  })
}

/**
 * Generates a "report card" for a quiz, with the quiz title, score,
 * and all answers as well as their "correctness"
 * @param  {object} quiz
 * @param  {array} answers
 * @return {object}
 */
const gradeQuiz = (quiz, answers) => {
  const gradedAnswers = answers.map((a) => {
    // Lookup question based on question text
    const question = quiz.questions.find((q) => {
      return q.text === a.question
    })

    return {
      ...a,
      correct: question.correctAnswer === a.choice
    }
  })

  const score = gradedAnswers.reduce((accumulator, answer) => {
    const answerPoints = answer.correct ? 1 : 0
    return accumulator + answerPoints
  }, 0)


  return {
    quiz: quiz.title,
    score: score,
    gradedAnswers: gradedAnswers
  }
}

export {
  getReportCard,
  gradeQuiz
}
