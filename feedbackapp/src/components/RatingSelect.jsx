import React, { useState,useContext, useEffect } from 'react'
import { FeedbackContext } from '../contexts/FeedbackContext';

function RatingSelect({ select }) {

    const {feedbackEdit} = useContext(FeedbackContext);
    const [selected, setSelected] = useState(10);
    
    useEffect(()=>{
        setSelected(feedbackEdit.item.rating)
    },[feedbackEdit])

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    return (
        <ul className='rating'>
            {new Array(10).fill(null).map((e, i) =>
                <li key={String(i)}>
                    <input
                        id={`num${i + 1}`}
                        value={String(i + 1)}
                        type="radio"
                        onChange={handleChange}
                        checked={selected === i + 1} />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>)}

        </ul>
    )
}

export default RatingSelect