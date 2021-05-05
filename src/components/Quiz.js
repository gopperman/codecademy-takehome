import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startQuiz } from '../actions'
import Question from './Question'
import QuizResult from './QuizResult'

/**
 * The quiz component is responsible for starting a new quiz, and checking
 * for quiz completion. Quizzes are considered complete when the value of
 * currentAnswer exceeds the length of the quizzes' questions
 */
class Quiz extends Component {
  constructor(props) {
    super(props)

    // We'll always start with the first quiz, if available
    if (!this.props.currentQuiz && this.props.quizzes.length) {
      this.props.startQuiz(this.props.quizzes[0])
    }
  }

  isQuizFinished() {
    if (this.props.currentQuestion && this.props.currentQuiz) {
      return this.props.currentQuestion >= this.props.currentQuiz.questions.length
    } else {
      return undefined
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }

  render() {
    if (this.props.currentQuiz) {
      const quizBody = this.isQuizFinished() ? (<QuizResult />) : (<Question key={this.props.currentQuestion} />)
      return (
        <div key={this.props.currentQuiz.title}>
          <h1>{this.props.currentQuiz.title}</h1>

          {quizBody}
        </div>
      )
    } else {
      return (
        <h2>Loading quiz...</h2>
      )
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    startQuiz: quiz => dispatch(startQuiz(quiz))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentQuiz: state.currentQuiz,
    currentQuestion: state.currentQuestion,
    quizzes: state.quizzes,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
