//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import DisplayWorkout from './components/DisplayWorkout';
import AddWorkout from './components/AddWorkout';

function App() {
  const [workoutLibrary, setWorkoutLibrary] = useState([]);

  

  return (
    <div className="App">
      
      
      
      <AddWorkout addWorkoutCb = {workout => AddWorkout(workout)}/>

      


    </div>
  );
}

export default App;
