import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessage } from '../data/messages'
import { gradeQuiz } from '../util/quizUtils'
import { startQuiz, updateReportCard } from '../actions'
import ResultItem from './ResultItem'

/**
 * The QuizResult component is responsible for "grading" a user's quiz, and issuing
 * a quick "report card" of their results
 */
class QuizResult extends Component {
  constructor(props) {
    super(props)

    this.startNextQuiz = this.startNextQuiz.bind(this)

    // We'll store a user's "report card" via this component's state
    const quiz = this.props.quizzes[this.props.currentQuiz]
    this.state = gradeQuiz(quiz, this.props.currentAnswers)

    // Finally, we'll update the user's "report card", i.e their graded quiz results
    this.props.updateReportCard(this.state)
  }

  startNextQuiz() {
    // If we're at the end of the list of quizzes, set the next index to 0 to go
    // back to the start
    const nextQuizIndex = (this.props.currentQuiz < (this.props.quizzes.length - 1)) ?
      this.props.currentQuiz + 1 : 0
    this.props.startQuiz(nextQuizIndex)
  }


  render() {
    return (
      <div>
        <p>You got <b>{this.state.score}</b> of <b>{this.state.gradedAnswers.length}</b> Questions right.</p>
        <p>{getMessage()}</p>
        <p>You had:</p>
        <ol className="results">
          {this.state.gradedAnswers.map((a) => {
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
        <button className="button" onClick={this.startNextQuiz}>Next</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startQuiz: quiz => dispatch(startQuiz(quiz)),
    updateReportCard: reportCard => dispatch(updateReportCard(reportCard))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentQuiz: state.currentQuiz,
    currentAnswers: state.currentAnswers,
    reportCards: state.reportCards,
    quizzes: state.quizzes
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizResult)
