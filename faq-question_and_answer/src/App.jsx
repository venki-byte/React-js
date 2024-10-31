import { useState } from 'react'
import './App.css'

const FaqItem = ({question, answer}) => {

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  }

  return (
    <div className= {`faq-item ${show ? "active" : ""}`} >
      <div className="faq-item-header" onClick={toggleShow} >
        {question}
      </div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
          {answer}
        </div>
      </div>
    </div>
  )
}

const FaqAcoordion = ({data}) => {
  return (
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer}  />
      ))}
    </div>
  )
};

const data = [
  {id: 1, question: "What is React?", answer: "React is a front-end Javascript library for building user interfaces or UI components."},
  {id: 2, question: "What are the benefirs of React?", answer: "Some of the benefirs of react are: it is fast, scalable, modular, easy to debug, and supports server-side rendering"},
  {id: 3, question: "What are the main concepts of React?", answer: "Some of the main concepts of React are: components , props, state, hooks, lifecycle methods and JSX."}
]

function App() {

  return (
    <>
      <div className="App">
        <FaqAcoordion data = {data}/>
      </div>
    </>
  )
}

export default App
