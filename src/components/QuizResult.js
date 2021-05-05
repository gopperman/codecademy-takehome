import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessage } from '../data/messages'
import { gradeQuiz } from '../util/quizUtils'
import ResultItem from './ResultItem'

/**
 * The QuizResult component is responsible for "grading" a user's quiz, and issuing
 * a quick "report card" of their results
 */
class QuizResult extends Component {
  render() {
    const reportCard = gradeQuiz(this.props.currentQuiz, this.props.currentAnswers)

    return (
      <div>
        <p>You got <b>{reportCard.score}</b> of <b>{this.props.currentQuiz.questions.length}</b> Questions right.</p>
        <p>{getMessage()}</p>
        <p>You had:</p>
        <ol className="results">
          {reportCard.gradedAnswers.map((a) => {
            return (
              <ResultItem
                key={a.question}
                choice={a.choice}
                correct={a.correct}
                question={a.question}
              />
            )
          })}
        </ol>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentQuiz: state.currentQuiz,
    currentAnswers: state.currentAnswers
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizResult)
