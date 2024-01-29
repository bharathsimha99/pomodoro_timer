import React from 'react';

const TimerControls = ({ isActive, onStartStop, setTime ,time,reset}) => {
  return (
    <div>
     
      <label style={{color:'green',fontSize:'20px',fontFamily:'fantasy'}}>
        Set time <span style={{color:'red'}}>(seconds)</span>:
        <input
          type="number"
          value={time}
          onChange={(e)=>{
            const inputVal = e.target.value
            setTime((inputVal) !== '' ? parseInt(inputVal):'')
          }}
        />
      </label>
       <button onClick={onStartStop} 
       style={{ backgroundColor: isActive ? 'red' : 'green' }}
       >{isActive ? 'Pause' : 'Start'}</button>
       <button onClick={reset} style={{backgroundColor:'blue'}}>Reset</button>
    </div>
  );
};

export default TimerControls;

