import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuizzes } from './data/quizzes'
import { initializeQuizzes } from './actions'
import Quiz from './components/Quiz'

/**
 * The App component is responsible for loading available quizzes, then
 * rendering the Quiz component
 */
class App extends Component {
  constructor(props) {
    super(props)

    getQuizzes().then((quizzes) => {
      // Load the quizzes into our state "asynchronously"
      this.props.initializeQuizzes(quizzes)
    })
  }

  render() {
    if (this.props.quizzes.length) {
      // Render the first quiz, if we have it
      return (
        <div className="app">
          <Quiz />
        </div>
      )
    } else {
      // Render a loading message
      return (
        <div className="app">
          <p>One second, loading data...</p>
        </div>
      )
    }
  }



}

const  mapDispatchToProps = (dispatch) => {
  return {
    initializeQuizzes: quizzes => dispatch(initializeQuizzes(quizzes))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    quizzes: state.quizzes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
