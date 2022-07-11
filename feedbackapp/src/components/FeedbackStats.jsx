import React, { useContext } from 'react'
import { FeedbackContext } from '../contexts/FeedbackContext'
function FeedbackStats() {

  const {Feedback} = useContext(FeedbackContext)
  let average = Feedback.reduce((sum, curr) => {
    return sum + curr.rating
  }, 0) / Feedback.length

  average = average.toFixed(1)

  return (
    <div className='feedback-stats'>

      <h4>Reviews: {Feedback.length} </h4>
      <h4 className='average'>Average: {average}</h4>
    </div>
  )
}

export default FeedbackStats