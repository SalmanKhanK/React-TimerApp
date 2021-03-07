import React from 'react'
import {timerprops} from '../../Types/Timer'
export const Timer:React.FC<timerprops> = ({timerprops}) => {
    return (
        <div>
            <h1>Timer</h1>
             <h1 id="timer">
                 {timerprops.min>=10 ? timerprops.min:"0"+timerprops.min} : {" "}
                 {timerprops.second>=10 ? timerprops.second:"0"+timerprops.second} : {" "}
                 {timerprops.milisecond>=10 ? timerprops.milisecond:"0"+timerprops.milisecond}
            </h1>
            
        </div>
    )
}
