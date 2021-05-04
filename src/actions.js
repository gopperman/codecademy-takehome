const initializeQuizzes = (payload) => {
  return { type: "LOAD_QUIZZES", payload }
}

export {
  initializeQuizzes
}
