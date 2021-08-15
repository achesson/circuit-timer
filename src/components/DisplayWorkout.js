import React from "react";
import './DisplayWorkout.css';

function DisplayWorkout(props) {
  let circuits = props.circuits;
  

    return (
      <div className="DisplayWorkout">
          <h3> 2. Add Workout to Library </h3>
        { circuits.map(c=> 
        <h2 key={c.name}>{c.name}
          {c.exercises.map(e => <h3 key={e.id}>
            {e.exerciseName}
          </h3>)}
        
        </h2>)
         

        }
             
          <ul >
         
          </ul>
               

  
      </div>
    );
  }
  
  export default DisplayWorkout;