import React, { Component } from 'react'
import { connect } from 'react-redux'
import { answerQuestion } from '../actions'

/**
 * The question component is responsible for rendering a question's text and
 * a randomized list of potential answers
 */
class Choice extends Component {
  constructor(props) {
    super(props)

    this.selectChoice = this.selectChoice.bind(this)
  }

  selectChoice() {
    this.props.answerQuestion({
      question: this.props.questionTitle,
      choice: this.props.choice
    })
  }

  render() {
    let classes = "choice"
    if (this.props.resultStyle === true) {
      classes += " choice--correct"
    } else if (this.props.resultStyle === false) {
      classes += " choice--incorrect"
    }

    return (
      <li className={classes} onClick={this.selectChoice}>
        <b>{this.props.letter}:</b> {this.props.choice}
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    answerQuestion: userAnswer => dispatch(answerQuestion(userAnswer))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Choice)
