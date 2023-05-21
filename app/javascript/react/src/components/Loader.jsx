import * as React from 'react';
import * as ReactDOM from 'react-dom/client'

const Loader = (props) => {
  return (
    <div>
      {
        !props.isShowLoader ? 
        <div class="mt-5 d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div> : " " 
      }

    </div>
  )
}

export default Loader; 