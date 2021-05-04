import React, { Component } from 'react'
import Question from './Question'

class Quiz extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Question />
      </div>
    )
  }

}

export default Quiz
