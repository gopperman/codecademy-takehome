import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz'

import './styles.css';

const App = () => {
  return (
    <div className="app">
      <Quiz />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
