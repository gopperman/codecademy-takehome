import React, { Component } from 'react'

class Question extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Basics of HTML</h1>
        <p>Which element is used for a top-level heading?</p>
        <ul className="choice__list">
          <li className="choice">h0</li>
          <li className="choice choice--correct">h1</li>
          <li className="choice">div</li>
          <li className="choice choice--incorrect">p</li>
        </ul>
      </div>
    )
  }

}

export default Question
