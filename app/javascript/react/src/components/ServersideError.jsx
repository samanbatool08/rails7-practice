import * as React from 'react';
import * as ReactDOM from 'react-dom';

const ServersideError = (props) => {
  return (
    <div>
      <>
        <p className="lead fw-bold">Please fix the errors below</p>
        {props.errors.map((error, index) => (
          <p className="text-danger" key={index}>{error}</p>
        ))}
      </>
    </div>
  )
}

export default ServersideError; 