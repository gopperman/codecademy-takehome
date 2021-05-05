/**
 * Returns whether or not a user has finished all available quizzes
 * @param  {array} reportCards
 * @param  {array} quizzes
 * @return {boolean}
 */
const finishedAllQuizzes = (reportCards, quizzes) => {
  return reportCards.length === quizzes.length
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

/**
 * isPerfectStudent checks to see if a student has 100% comprehension
 * on all available quizzes
 * @param  {array} reportCards Report cards for completed quizzes
 * @return {boolean} true if all answers are correct
 */
const isPerfectStudent = (reportCards) => {
  // This will return an array of booleans, i.e [true, false, ...]
  const perfectScores = reportCards.map((rc) => {
    return rc.score === rc.gradedAnswers.length
  })
  /**
   * This implementation has an interesting edge-case.
   * If user has no report cards, i.e there weren't avaiable quizzes,
   * then they have a "perfect score" and can load more quizzes
   * It's a feature, not a bug!
   */
  const isPerfect = perfectScores.reduce((accumulator, perfect) => {
    return accumulator && perfect
  }, true)

  return isPerfect
}

export {
  finishedAllQuizzes,
  gradeQuiz,
  isPerfectStudent
}
