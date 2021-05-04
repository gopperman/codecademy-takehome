import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getQuizzes } from './data/quizzes'
import { initializeQuizzes } from './actions'
import Quiz from './components/Quiz'

/**
 * The App component is responsible for loading available quizzes, deciding which
 * quiz is next, and rendering the appropriate quiz
 */
class App extends Component {
  constructor(props) {
    super(props)

    getQuizzes().then((quizzes) => {
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

function mapDispatchToProps(dispatch) {
  return {
    initializeQuizzes: quizzes => dispatch(initializeQuizzes(quizzes))
  }
}

const mapStateToProps = (state, ownProps) => ({
    quizzes: state.quizzes
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
