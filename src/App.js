//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import DisplayWorkoutLibrary from './components/DisplayWorkoutLibrary';
import AddWorkout from './components/AddWorkout';

function App() {
  const [workoutLibrary, setWorkoutLibrary] = useState([]);

  const addWorkoutToLibrary = (newWorkout) => {
    console.log(newWorkout);
    let newWorkoutLibrary = [...workoutLibrary, newWorkout];
    setWorkoutLibrary(workoutLibrary => newWorkoutLibrary);

  }

  

  return (
    <div className="App">
      
      
      <DisplayWorkoutLibrary workoutLibrary={workoutLibrary} />
      <AddWorkout addWorkoutToLibraryCb = {workout => addWorkoutToLibrary(workout)}/>

      


    </div>
  );
}

export default App;
