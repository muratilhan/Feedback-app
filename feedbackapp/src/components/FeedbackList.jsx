import React,{useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import '../App.css'
import { FeedbackContext } from '../contexts/FeedbackContext'



function FeedbackList() {

  const {Feedback} = useContext(FeedbackContext)

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {
          Feedback.map((item) => (
            <motion.div key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 10 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8
              }}
            >
              <FeedbackItem key={item.id} item={item}/>
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div >
  )
}



export default FeedbackList