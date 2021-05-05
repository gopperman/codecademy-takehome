/**
 * answerLetter takes an integer offset and returns
 * a character offset starting from "A", i.e
 * answerLetter(1) should return "B"
 */
const answerLetter = (offset) => {
  return String.fromCharCode('A'.charCodeAt(0) + offset)
}

/**
 * Check answer takes in a question and an answer and tells you if it's correct
 * @param  {object} question
 * @param  {string} answer
 * @return {boolean}
 */
const checkAnswer = (question, answer) => {
  return true
}

/**
 * Given a quiz and a question index, fetches that question from a quiz
 * @param  {object} quiz
 * @param  {integer} questionIndex
 * @return {object} the question (or null)
 */
const getQuestion = (quiz, questionIndex) => {
  if (quiz.questions.length > questionIndex && questionIndex >= 0) {
    return quiz.questions[questionIndex]
  } else {
    return null
  }

}
/**
 * shuffleAnswers takes in an array of answers and returns
 * an array of randomly sorted answers. Uses the Knuth Shuffle!
 */
const shuffleAnswers = ( answers ) => {
  let currentIndex = answers.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = answers[currentIndex]
    answers[currentIndex] = answers[randomIndex]
    answers[randomIndex] = temporaryValue
  }

  return answers
}

export {
  answerLetter,
  checkAnswer,
  getQuestion,
  shuffleAnswers
}
