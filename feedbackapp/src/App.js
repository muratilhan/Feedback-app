import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import {FeedbackContext} from './contexts/FeedbackContext.jsx'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './components/FeedbackData';
import './App.css';
import FeedbackForm from './components/FeedbackForm';

function App() {

  const [Feedback,setFeedback] = useState(FeedbackData);

  const updateFeedback = (id,updItem) => {

    setFeedback(Feedback.map((item)=>item.id === id ? {...item,...updItem} : item))

  }
  const addFeedback=(newFeedback)=>{
    newFeedback.id=Date.now();
    setFeedback([newFeedback,...Feedback])
  }
  
  const [feedbackEdit,setFeedbackEdit] = useState({
    item: {},
    edit: false
  })
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })

  }

  const deleteFeedback = (id) =>{
     if(window.confirm("are u sure to delete ?")){
       setFeedback(Feedback.filter(item => (item.id !== id) ))
     }

  }

  return (
    <FeedbackContext.Provider value={{Feedback,updateFeedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit}}>
      <Header bgColor='red' textColor='blue' text={"hello world"}  />
      <div className="App">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackContext.Provider>
  );
}

export default App;
