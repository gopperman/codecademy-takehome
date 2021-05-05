import React, { Component } from 'react'
import { connect } from 'react-redux'
import { answerLetter, getQuestion, shuffleAnswers } from '../util/questionUtils'
import { incrementQuestion } from '../actions'
import Choice from './Choice'

/**
 * The question component is responsible for rendering a question's text and
 * a randomized list of potential answers.
 */
class Question extends Component {
  constructor(props) {
    super(props)

    // This component's state will be initialized with the current question
    // and randomized answers (choices). Choices are stored in the component state so that
    // order can be preserved after answering
    const quiz = this.props.quizzes[this.props.currentQuiz]
    const question = getQuestion(quiz, this.props.currentQuestion)
    const choices = shuffleAnswers([
      question.correctAnswer,
      ...question.incorrectAnswers
    ])

    // Question is stored in the state mostly for convenience. In a world where
    // we're making real asynchronous calls, persisting the question here could
    // improve performance
    this.state = {
      question: question,
      choices: choices,
    }

    this.incrementQuestion = this.incrementQuestion.bind(this)
  }

  /**
   * Determines if a user has answered the question
   * @return {object} the answer, or undefined
   */
  getAnswer() {
    if (this.props.currentAnswers) {
      return this.props.currentAnswers.find((a) => {
        return a.question === this.state.question.text
      })
    } else {
      return undefined
    }
  }

  /**
   * Given a user's answer (choice) to a question, determines whether to show
   * the choice as correct (true), incorrect (false), or neither (undefined)
   * @param  {string} selectedChoice The user's selected choice
   * @return {boolean} The relevant classnames for the choice
   */
  getChoiceStatus(selectedChoice, choice) {
    if (choice === this.state.question.correctAnswer) {
      return true
    } else if (selectedChoice === choice) {
      return false
    } else {
      return undefined
    }
  }

  /**
   * checks if a userAnswer is correct
   * @param  {object}  userAnswer
   * @return {Boolean}
   */
  isCorrect(userAnswer) {
    return userAnswer.choice === this.state.question.correctAnswer
  }

  /**
   * Conditionally renders question results
   * @param  {object} userAnswer
   * @return {jsx}
   */
  maybeRenderQuestionResult(userAnswer) {
    if (userAnswer) {
      return (
        <div>
          <p className='question__result'>
            {this.isCorrect(userAnswer) ? 'Correct!' : 'Incorrect...'}
          </p>
          <button className="button" onClick={this.incrementQuestion}>Next</button>
        </div>
      )
    }
  }

  incrementQuestion() {
    this.props.incrementQuestion()
  }

  render() {
    const userAnswer = this.getAnswer()

    return (
      <div>
        <p>{this.state.question.text}</p>

        <ul className="choice__list">
          {this.state.choices.map((choice, index) => {
            const resultStyle = userAnswer ? this.getChoiceStatus(userAnswer.choice, choice) : undefined
            const letter = answerLetter(index)
            return (
              <Choice
                key={letter}
                letter={letter}
                choice={choice}
                questionTitle={this.state.question.text}
                resultStyle={resultStyle} />
            )
          })}
        </ul>
        { this.maybeRenderQuestionResult(userAnswer) }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementQuestion: () => dispatch(incrementQuestion())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentAnswers: state.currentAnswers,
    currentQuestion: state.currentQuestion,
    currentQuiz: state.currentQuiz,
    quizzes: state.quizzes
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Question)
