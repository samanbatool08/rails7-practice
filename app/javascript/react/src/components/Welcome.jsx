import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import QuestionList from './QuestionList';

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to this rails7/react app!</h1>
      <p className="lead">Practice questions</p>

      <QuestionList />

    </div>
  )
}

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(<Welcome />, document.getElementById('welcome'))
// })

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
)


export default Welcome; 