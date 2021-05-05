const initialState = {
  quizzes: [], // This will be the quizzes that are available
  quizResults: [], // quizResults will store the user's score and quiz status
  currentQuiz: null, // For convenience, we will stash the active quiz in a new variable
  currentAnswers: [], // currentAnswers will be an array of objects
  currentQuestion: 0, // currentQuestion is a reference to the index of what question we're on
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ANSWER_QUESTION":
      // for now we're assuming a question can be answered
      // once and only once, and that's reflected in this state transformation
      return {
        ...state,
        currentAnswers: [
          ...state.currentAnswers,
          action.payload
        ]
      }
    case "INCREMENT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      }
    case "LOAD_QUIZZES":
      return {
        ...state,
        quizzes: action.payload,
      }
    case "START_QUIZ":
      return {
        ...state,
        currentQuiz: action.payload,
        currentQuestion: 0,
        currentAnswers: []
      }
    default:
      return state
  }
}

export default rootReducer
