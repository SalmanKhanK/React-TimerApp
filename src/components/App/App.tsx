import React,{useState} from 'react';
import  TimerBtn  from '../Timer/TimerBtn';
import {timer} from '../../Types/Timer'
import  {Timer}  from '../Timer/Timer';
import './App.css';

function App() {
 
    var [second, setSecond] = useState<any>(0)
    const [status, Setstatus] = useState(0);
    const [timer,SetTimer]=useState<timer>({milisecond:0,second:0,min:0})

   const start = () =>{
  
      update();
    setSecond(setInterval(update,10))
    
   
   }
    
    const Stop=()=>{
      clearInterval(second);
      Setstatus(1);
    }


    const Reset=()=>{
        clearInterval(second);
        Setstatus(0);
        timer.milisecond=0;
        timer.second=0;
        timer.min=0;
    }

   var updateSec:number=timer.milisecond;
   var updateMin:number=timer.second;
   var updateHour:number=timer.min;
    const update=()=>{
        if(updateSec===100){
          console.log("SEcond update")
             updateMin++;
             updateSec=0;
        }
        if(updateMin===60){
           updateHour++;
           updateMin=0;
        }
        updateSec++;
      return SetTimer({milisecond:updateSec,second:updateMin,min:updateHour})
    }
  return (
    <div className="App">
 <Timer timerprops={timer} />

       <TimerBtn 
           Startfnc={start} 
           Stopfnc={Stop} 
           Resetfnc={Reset}
           status={status}
           
      />

       
    </div>
  );

}

export default App;
