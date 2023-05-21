import * as React from 'react';
import * as ReactDOM from 'react-dom'; 

const Welcome = () => {
  return (
    <div>
      Welcome to this rails7/react app!
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Welcome />, document.getElementById('welcome'))
})


export default Welcome; 