export type TimerBtnTypes={
 
    Startfnc: ()=>void;
    Stopfnc: ()=>void; 
    Resetfnc: ()=>void;
    status : number
  
 

}
export type timer={
    milisecond:number;
    second:number;
    min:number;
}
export type timerprops={
    
timerprops:timer;

}