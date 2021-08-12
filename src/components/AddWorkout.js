import React, {useState} from "react";
import AddCircuit from "./AddCircuit";
import DisplayWorkout from "./DisplayWorkout"





function AddWorkout(props) {
  
  const [workout, setWorkout] = useState([]);
  

  const addCircuitToWorkout = (newCircuit) => {
    console.log(newCircuit);
    let newWorkout = [...workout, newCircuit];
    setWorkout(workout => newWorkout);

  }

    return (
      <div className="AddWorkout">
         
          <DisplayWorkout workout={workout}/>
          <AddCircuit addCircuitToWorkoutCb={circuit => addCircuitToWorkout(circuit)}/>
          
      
  
      </div>
    );
  }
  
  export default AddWorkout;