import React from 'react'
import Card from './shared/Card'
import { useState,useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect';
import { FeedbackContext } from '../contexts/FeedbackContext';
import Button from './shared/Button';
function FeedbackForm() {

    const {addFeedback,updateFeedback,feedbackEdit} = useContext(FeedbackContext);

    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [message, setMessage] = useState("");


    useEffect(()=>{ 
        if(feedbackEdit.edit===true){
            setButtonDisabled(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
                id: ""
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id ,newFeedback)
            }else {
                addFeedback(newFeedback)  
            }
            
        }
    }

    const handleText = (e) => {
        setText(e.target.value);
        if (text === '') {
            setMessage(null);
            setButtonDisabled(true);
        } else if (text !== "" && text.trim().length <= 10) {
            setButtonDisabled(true);
            setMessage("Text must be at least 10 charactes");
        } else {
            setButtonDisabled(false);
            setMessage("")
        }

    }

    return (
        <div className='form-container'>
            <Card className="form-card">
                <form onSubmit={handleSubmit} className='form-area'>
                    <h2>how would you rate your service with us ?</h2>
                    <RatingSelect select={(rating) => setRating(rating)} />
                    <div className='input-group'>
                        <input value={text} onChange={handleText} className='input' placeholder="write a review" />
                        <Button isDisabled={buttonDisabled} version='secondary'>Send</Button>
                    </div>
                    {message && <div className='message'>{message}</div>}
                </form>
            </Card>
        </div>
    )
}

export default FeedbackForm