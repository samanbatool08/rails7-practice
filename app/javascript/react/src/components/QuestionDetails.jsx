import * as React from 'react'; 
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

const QuestionDetail = (props) => {

  const [likeCount, setLikeCount] = useState(0)
  const [dislikeCount, setDislikeCount] = useState(0)
  return (
    <div>
      <div className="card rounded-0 mt-3">
        <div className="card-body">
          <h3 className="card-title">{props.question.title}</h3>
          <p className="lead">
            <span className="badge bg-primary">{props.question.tag}</span>
          </p>
          <button type="button" className="btn btn-primary position-relative" style={{marginRight: 1 + "em" }} onClick={() => setLikeCount(likeCount + 1)}>
            Like
            { likeCount > 0 ? 
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {likeCount}
              </span> : '' }
          </button>

          <button type="button" className="btn btn-primary position-relative" onClick={() => setDislikeCount(dislikeCount + 1)}>
            Dislike
            { dislikeCount > 0 ? 
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {dislikeCount}
              </span> : '' }
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail;