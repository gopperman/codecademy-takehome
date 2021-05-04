const initialState = {
  quizzes: [], // This will be the quizzes that are available
  quizResults: [] // quizResults will store the user's score and quiz status
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_QUIZZES":
      return {
        quizzes: action.payload,
        quizResults: state.quizResults
      }
    default:
      return state
  }
}

export default rootReducer
