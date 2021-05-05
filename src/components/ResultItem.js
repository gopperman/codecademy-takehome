import React, { Component } from 'react'

/**
 * The result item component is responsible for rendering a single answer result
 */
class ResultItem extends Component {
  render() {
    const classes = `results__answer results__answer--${this.props.correct ? 'correct' : 'incorrect'}`
    return (
      <li className="results__item">
        <i>{this.props.question}</i> <span className={classes}>{this.props.choice}</span>
      </li>
    )
  }
}

export default ResultItem
