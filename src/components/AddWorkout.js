import React, {useState} from "react";
import AddCircuit from "./AddCircuit";
import DisplayWorkout from "./DisplayWorkout"


const EmptyFormData = {
  workoutName: "",
  restBetweenCircuits: ""
}


function AddWorkout(props) {
  const [formData, setFormData] = useState(EmptyFormData);
  const [workout, setWorkout] = useState([]);
  const [circuits, setCircuits] = useState([]);
  const [workoutID, setWorkoutID] = useState(0);
  

  const addCircuitToWorkout = (newCircuit) => {
    //console.log(newCircuit);
    let newCircuits = [...circuits, newCircuit];
    setCircuits(circuits => newCircuits);

  }

  const handleSubmit = (e) => {
    console.log("Add workout submit")
    e.preventDefault();
    

    let newWorkout = [...workout]

    //add new workout properties
    newWorkout.circuits = circuits;
    newWorkout.workoutID = workoutID;
    newWorkout.workoutName = formData.workoutName;
    newWorkout.restBetweenCircuits = formData.restBetweenCircuits;
    
    //pass to parent
    props.addWorkoutToLibraryCb(newWorkout);

    //reset 
    let nextWorkoutID = workoutID + 1;
    setWorkoutID(workoutID => nextWorkoutID);
    setCircuits([]);
    setFormData(EmptyFormData);

  }

  const handleChange = e => {
    
    let { name , value } = e.target; //extract data
    let newFormData = {...formData}; //make copy of the state
    newFormData[name] = value; //update state
    setFormData(formData => newFormData); //set state
    
  };

    return (
      <div className="AddWorkout">
         
          <DisplayWorkout circuits={circuits}/>
          <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            name="workoutName"
            placeholder="Name this workout"
            value={formData.workoutName}
            onChange={e => handleChange(e)}
          />

        <input
            type="text"
            name="restBetweenCircuits"
            placeholder="Enter rest time between circuits"
            value={formData.restBetweenCircuits}
            onChange={e => handleChange(e)}
          />
          <button type="submit"> Save Workout </button>
            </form>
          <AddCircuit addCircuitToWorkoutCb={circuit => addCircuitToWorkout(circuit)}/>
          
      
  
      </div>
    );
  }
  
  export default AddWorkout;