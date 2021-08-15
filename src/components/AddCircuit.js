import React, {useState} from "react";
import AddExercise from "./AddExercise";
import './AddCircuit.css';
import DisplayCurrentCircuit from "./DisplayCurrentCircuit";

//used to automatically give circuit a name
const circuitNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

//holds data for circuit entered by user
let EmptyFormData = {
  numberOfSets: '',
  restTimeBetweenSets: ''
}


function AddCircuit(props) {
  const [exercises, setExercises] = useState([]);
  const [formData, setFormData] = useState(EmptyFormData);
  const [circuit, setCircuit] = useState([]);
  let [nextId, setNextId] = useState(1);
  let [circuitNamesIX, setCircuitNamesIX] = useState(0)

  //adds an exercise from AddExercise.js to exercises state
  const addExercise = (newExercise) => {
 
    newExercise.id = nextId; //create ID
    let newExercises = [...exercises, newExercise]; //add exercise to current circuit exercises

    //reset
    let newNextId = nextId + 1; //increment id
    setExercises(exercises => newExercises); //set the new circuit
    setNextId(nextId => newNextId); //set nextId

  }

  const handleSubmit = (e) => {
    console.log("add circuit handlesubmit")

    e.preventDefault();

    let newCircuit = [...circuit];

    
    newCircuit.name = circuitNames[circuitNamesIX]; //add letter name to circuit e.g. 'A'
    newCircuit.exercises = exercises; //add exercises
    newCircuit.numberOfSets = formData.numberOfSets; //add number of sets
    newCircuit.restTimeBetweenSets= formData.restTimeBetweenSets; //add rest between sets
    
    
    console.log("addcircuit handlesubmit", newCircuit);
    props.addCircuitToWorkoutCb(newCircuit); //pass finished circuit to parent AddWorkout

    //reset
    setCircuit([]);
    setExercises([]);
    setFormData(EmptyFormData)
    let newCircuitNamesIX = circuitNamesIX + 1;
    setCircuitNamesIX(circuitNamesIX => newCircuitNamesIX);
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
          <h3> 1. Create workout by adding a new circuit: </h3>
          <span className="AddCircuitGrid">
          <AddExercise addExerciseCb={exercise => addExercise(exercise)}/>
          <DisplayCurrentCircuit 
            exercises={exercises}
            circuitNames={circuitNames}
            circuitNamesIX={circuitNamesIX}

            />
            </span>
          <span className="AddCircuitForm">
          <form onSubmit={e => handleSubmit(e)} >
          <label> Enter number of sets: </label>
          <input
            type="text"
            name="numberOfSets"
            placeholder="e.g. '4' "
            value={formData.numberOfSets}
            onChange={e => handleChange(e)}
          />
          <label> Enter rest time (seconds) between sets: </label>
          <input
            type="text"
            name="restTimeBetweenSets"
            placeholder="e.g. '60'"
            value={formData.restTimeBetweenSets}
            onChange={e => handleChange(e)}
          />
          <button type="submit" >Add Circuit to Workout</button>
          </form>
          </span>
          
  
      </div>
    );
  }
  
  export default AddCircuit;