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
    score: score,
    gradedAnswers: gradedAnswers
  }
}

export {gradeQuiz}
