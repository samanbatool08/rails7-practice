import * as React from 'react'; 
import { useState, useEffect } from 'react'; 
import * as ReactDOM from 'react-dom/client'; 
import QuestionDetails from './QuestionDetails';
import EmptyQuestionMessage from './EmptyQuestionMessage';
import Loader from './Loader';
import NewQuestion from './NewQuestion';


const QuestionList = () => {

  const questionTags = [
    {label: "All", value: 0 },
    {label: "Ruby", value: 1 },
    {label: "Rails", value: 2 },
    {label: "React", value: 3 },
    {label: "Javascript", value: 4 },
    {label: "Data Structures", value: 5 },
    {label: "Java", value: 6 }
  ]



  const [questionsList, setQuestionsList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(questionTags[0].value)
  const [isShowAlert, setIsShowAlert] = useState(false); 
  const [isShowLoader, setIsShowLoader] = useState(true);

  const questionsURL = 'http://localhost:3000/api/v1/questions'

  const getQuestions = () => {
    setIsShowLoader(false)
    fetch(questionsURL)
    .then(response => response.json())
    .then(data => {
      setQuestionsList(data)
      if(data.length == 0) {
        setIsShowAlert(true)
      } else {
        setIsShowAlert(false)
      }
    })
  }

  useEffect(() => {
    getQuestions()
  }, [])

  const questionList = [
    {
      title: "How to check if a key is present in a hash?",
      tag: "Ruby"
    },
    {
      title: "How to check if the useState hook is being used?",
      tag: "React"
    },
    {
      title: "How to check if the DOM is being loaded properly?",
      tag: "Javascript"
    },
    {
      title: "How to create a custom scope?",
      tag: "Rails"
    },
    {
      title: "When to use a class method vs instance method?",
      tag: "Ruby"
    },
    {
      title: "What is binary search?",
      tag: "Data Structures"
    },
    {
      title: "How to check if an id present in a response from API?",
      tag: "Rails"
    },
    {
      title: "How to check/test API endpoints?",
      tag: "Rails"
    }
  ]

  const updateSelectedItem = (e) => {
    setIsShowLoader(false)
    setIsShowAlert(false)
    setQuestionsList([])
    setSelectedOption(e.target.value)
    fetch(questionsURL + `?tags=${questionTags[e.target.value].label}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setQuestionsList(data)
      if(data.length == 0) {
        setIsShowAlert(true)
        setIsShowLoader(true)
      }
    }) 
  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <p className="lead fw-bold">Filter Questions By Tags</p>
          <button type="button" className="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Contribute your question
          </button>

            <select className="form-select form-select-lg" value={selectedOption} onChange={(e) => updateSelectedItem(e)}>
              {questionTags.map(tag => (
                <option key={tag.value} value={tag.value}>{tag.label}</option>
              ))}
            </select>

          { questionsList.length > 0 ? 
          questionsList.map((question, index) => 
            <QuestionDetails question={question} key={index}/>
          ) : <Loader isShowLoader={isShowLoader}/> }

          {isShowAlert && <EmptyQuestionMessage tagname={questionTags[selectedOption].label}/> }
        </div>
      </div>
      <NewQuestion />
    </div>
  )
}

export default QuestionList;