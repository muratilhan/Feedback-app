import { FaTimes,FaEdit } from 'react-icons/fa';
import React from 'react'
import Card from './shared/Card'
import { useContext } from 'react';
import '../App.css'
import { FeedbackContext } from '../contexts/FeedbackContext';

function FeedbackItem({ item }) {

    const {deleteFeedback,editFeedback} = useContext(FeedbackContext);



    return (    
        <Card reverse={true}>
            <div className="num-display">
                {item.rating}
            </div>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes className='icon' color='white' />
            </button>
            <button className='edit'>
                <FaEdit onClick={()=>{editFeedback(item)}} color="white"/>
            </button>
            <div className="text-display">
                {item.text}
            </div>

        </Card>
    )
}

export default FeedbackItem