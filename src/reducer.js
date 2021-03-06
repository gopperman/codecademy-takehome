const initialState = {
  quizzes: [],        // This will be the quizzes that are available
  quizResults: [],    // quizResults will store the user's score and quiz status
  currentQuiz: 0,     // currenQuiz is a reference to the index of what quiz we're taking
  currentAnswers: [], // currentAnswers will be an array of objects
  currentQuestion: 0, // currentQuestion is a reference to the index of what question we're on
  reportCards: []    // Report Cards are where your most recent quiz results are stored
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
      /**
       * We don't worry about incrementing past the length of questions in a quiz,
       * as we use that to determine when a quiz is finished
       */
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
    case "UPDATE_REPORT_CARD":
      // Return an array of report cards *except* the one we want to modify
      const noUpdate = state.reportCards.filter((rc) => {
        return rc.quiz !== action.payload.quiz
      })

      return {
        ...state,
        reportCards: [
          ...noUpdate,
          action.payload
        ]
      }
    default:
      return state
  }
}

export default rootReducer
