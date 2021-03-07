import React from 'react'
import {TimerBtnTypes } from '../../Types/Timer'
import './timerbtn.css'
const TimerBtn:React.FC<TimerBtnTypes> = ({
    Startfnc,
    Stopfnc,
    Resetfnc,
    status,

}) => {

    return (
        <div>
             
      {
        status===0 ?(
          <div>
          <button id="start" className="btn"  onClick={Startfnc} >Start</button>
          <button id="stop" className="btn" onClick={Stopfnc}>Stop</button>
        </div>
        ):
        <div>
          <button id="resume" className="btn" onClick={Startfnc}>Resume</button>
          <button className="btn" onClick={Resetfnc}>Reset</button>
       </div>
      }
        </div>
    )
}
export default TimerBtn