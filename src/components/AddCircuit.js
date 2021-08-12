import React, {useState} from "react";
import AddExercise from "./AddExercise";
import './AddCircuit.css';
import DisplayCurrentCircuit from "./DisplayCurrentCircuit";


const circuitNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let EmptyFormData = {
  numberOfSets: '',
  restTimeBetweenSets: ''
}


function AddCircuit(props) {
  const [circuit, setCircuit] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [formData, setFormData] = useState(EmptyFormData);
  let [nextId, setNextId] = useState(1);
  let [circuitNamesIX, setCircuitNamesIX] = useState(0)

  const addExercise = (newExercise) => {
 
    //not sure if i need an Id but why not
    newExercise.id = nextId;
    //add exercise to current circuit
    let newExercises = [...exercises, newExercise];
    //increment id
    let newNextId = nextId + 1;
    //set the new circuit
    setExercises(exercises => newExercises);
    setNextId(nextId => newNextId);

  }

  const handleSubmit = (e) => {
    console.log("add circuit handlesubmit")
    e.preventDefault();

    let newCircuit = [...circuit]

    //add letter name to circuit
    newCircuit.name = circuitNames[circuitNamesIX];

  //add exercises
    newCircuit.exercises = exercises;
   //add number of sets
   newCircuit.numberOfSets = formData.numberOfSets;
    //add rest between sets
    newCircuit.restTimeBetweenSets= formData.restTimeBetweenSets;

    //add circuit
    props.addCircuitToWorkoutCb(newCircuit);

    //reset
    setCircuit([]);
    setExercises([]);
    setFormData(EmptyFormData)
    let newCircuitNamesIX = circuitNamesIX + 1;
    setCircuitNamesIX(newCircuitNamesIX);
  }
  

  const handleChange = e => {
    //extract data
    let { name , value } = e.target;

    //set data
    let newFormData = {...formData};

    newFormData[name] = value;
    setFormData(formData => newFormData);
    
  };

    return (
      <div className="AddCircuit">
          <h3>New Circuit Form</h3>
          <DisplayCurrentCircuit exercises={exercises}/>
          <AddExercise addExerciseCb={exercise => addExercise(exercise)}/>
          <form onSubmit={e => handleSubmit(e)} >
          <input
            type="text"
            name="numberOfSets"
            placeholder="Enter Number of Sets"
            value={formData.numberOfSets}
            onChange={e => handleChange(e)}
          />
          <input
            type="text"
            name="restTimeBetweenSets"
            placeholder="Enter rest time in between sets"
            value={formData.restTimeBetweenSets}
            onChange={e => handleChange(e)}
          />
          <button type="submit" >Add Circuit to Workout</button>
          </form>
          
      
  
      </div>
    );
  }
  
  export default AddCircuit;