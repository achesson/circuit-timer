import React from "react";
import './DisplayWorkout.css';

function DisplayWorkout(props) {
  let w = props.workout;

    return (
      <div className="DisplayWorkout">
          <h2> Display Workout</h2>
          {w.map(circuit => 
              circuit.exercises.map(e => 
                <h3 key = {e.id}>{e.exerciseName}{e.durationTime}</h3>))}

  
      </div>
    );
  }
  
  export default DisplayWorkout;