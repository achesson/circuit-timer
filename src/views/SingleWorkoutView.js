import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Error404View from './Error404View';


function SingleWorkoutView(props) {
    let { id } = useParams();  // get user ID from URL
    let workout = props.workoutLibrary.find(w => w.workoutID === Number(id));

    // Return 404 if user doesn't exist
    if (!workout) {
        return <Error404View />;
    }

    return (
        <div className="UserProfileView">
            <h2>{workout.name}</h2>
          
            <Link to="/workouts/">back</Link>
        </div>
    );
}

export default SingleWorkoutView;