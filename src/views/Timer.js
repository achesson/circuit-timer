import React, {useState, useEffect} from "react"; 


const testArr = [30,10,30,10,30,120];

function Timer(props) {
    const [counter, setCounter] = useState(60);
  
    // 
  useEffect(() => {
     
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
  
    return (
      <div className="Timer">
        <div>Countdown: {counter}</div>
      </div>
    );
  }

  export default Timer;