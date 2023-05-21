import * as React from 'react'; 
import * as ReactDOM from 'react-dom/client'
import { useState } from 'react';
import ServersideError from './serverSideError';

const NewQuestion = () => {

  const questionTags = [
    {label: "All", value: "All" },
    {label: "Ruby", value: "Ruby" },
    {label: "Rails", value: "Rails" },
    {label: "React", value: "React" },
    {label: "Javascript", value: "Javascript" },
    {label: "Data Structures", value: "Data Structures" },
    {label: "Java", value: "Java" }
  ]

  // const [title, setTitle] = useState('')
  // const [tag, setTag] = useState(questionTags[0].value)

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value)
  // }

  // const handleTagChange = (e) => {
  //   setTag(e.target.value)
  // }

  const [isServerSideError, setIsServerSideError] = useState(false)
  const [serverErrors, setServerErrors] = useState([])

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    console.log(formField)
    postQuestion(formField)
  }

  const [formField, setFormField] = useState({
    title: '', 
    tag: questionTags[0].value
  })

  const handleFormFields = (e) => {
    setFormField({...formField, [e.target.name]: e.target.value })
  }

  const postQuestion = (data) => {
    fetch('http://localhost:3000/api/v1/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('success', data)
      if(data.status === "failure") {
        setIsServerSideError(true)
        setServerErrors(data.data)
      } else {
        setIsServerSideError(false)
        setServerErrors([])
      }
    })
    .catch(error => {
      console.log('error', error)
    })
  }
  


  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id ="exampleModalLabel">Submit your question here</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleQuestionSubmit}>
              <div className="modal-body">
                { isServerSideError && <ServersideError errors={serverErrors}/>}
                <div className="form-group"> 
                  <label className="form-label mt-3 mb-3">Title</label>
                  <input type="text" name="title" value={formField.title} onChange={(e) => handleFormFields(e)} className="form-control form-control-lg"/>
                </div>

                <div className="form-group">
                  <label className="form-label mt-3 mb-3">Select the question tag</label>
                  <select value={formField.tag} name="tag" onChange={(e) => handleFormFields(e)} className="form-select form-select-lg">
                    {questionTags.map(tag => (
                      <option key={tag.value} value={tag.value}>{tag.label}</option>
                    ))}
                  </select>

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Submit Question</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewQuestion; 