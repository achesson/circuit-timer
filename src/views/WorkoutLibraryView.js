import React from "react";
import './WorkoutLibraryView.css';

function WorkoutLibraryView(props) {
  

    return (
      <div className="DisplayWorkoutLibrary">
          <h1> Workout Library </h1>
          { props.workoutLibrary.map(w => <h2 key={w.workoutID}>{w.workoutName}</h2> )}
                
               

  
      </div>
    );
  }
  
  export default WorkoutLibraryView;