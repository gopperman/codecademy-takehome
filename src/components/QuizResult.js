import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessage } from '../data/messages'
import { gradeQuiz } from '../util/quizUtils'

/**
 * The QuizResult component is responsible for "grading" a user's quiz, and issuing
 * a quick "report card" of their results
 */
class QuizResult extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const reportCard = gradeQuiz(this.props.currentQuiz, this.props.currentAnswers)
    console.log(reportCard)
    return (
      <div>
        <p>You got <b>{reportCard.score}</b> of <b>{this.props.currentQuiz.questions.length}</b> Questions right.</p>
        <p>{getMessage()}</p>
        <p>You had:</p>
        <ol className="results">
          {reportCard.gradedAnswers.map((a) => {
            const classes = `results__answer results__answer--${a.correct ? 'correct' : 'incorrect'}`
            return (
              <li key={a.question} className="results__item">
                <i>{a.question}</i> <span className={classes}>{a.choice}</span>
              </li>
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
