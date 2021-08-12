import React from "react";
import './DisplayCurrentCircuit.css';

function DisplayCurrentCircuit(props) {
    let e = props.exercises;


    return (
      <div className="DisplayCurrentCircuit">
          <h2> Display Current Circuit</h2>
          <ul >
            {e.map(x => <h3 key={x.id}>{x.exerciseName} {x.durationTime}</h3>)}
          </ul>
  
      </div>
    );
  }
  
  export default DisplayCurrentCircuit;