import React, { Children } from 'react'
import '../../App.css'
function Button({children,version,isDisabled,type}) {
  return (
    <button type={type} disabled={isDisabled} className={'btn'}>{children}</button>
  )
} 

export default Button