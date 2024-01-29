import React from 'react'

const TimerDisplay = ({time}) => {

    
  return (
    <div>
      <h1 style={{fontFamily:'serif',fontSize:'80px'}}>
      {time < 10 ? `0${time}` : time}
      </h1>
    </div>
  )
}

export default TimerDisplay
