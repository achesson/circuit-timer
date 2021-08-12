import React from "react";
import './DisplayWorkout.css';

function DisplayWorkout(props) {
  let w = props.circuits;

    return (
      <div className="DisplayWorkout">
          <h1> Display Workout</h1>
          {w.map(circuit => {
              return circuit.exercises.map(e => (
                <h2 key={circuit.name}> 
                {e.exerciseName } {' '} {e.durationTime }</h2>
                ))})}
                
               

  
      </div>
    );
  }
  
  export default DisplayWorkout;