

export default [


{
  workoutID: 0,
  workoutName: "my first workout",
  restBetweenCircuits: "60",
  circuits: 
 [{name: "A", exercises: [
              {exerciseName: "jump squats", timeOn: "30", timeOff:"10", id:1},
              {exerciseName: "burpees", timeOn: "30", timeOff:"10", id:2},
              {exerciseName: "push ups", timeOn: "30", timeOff:"10", id:3},
              ],
    numberOfSets: "4", restTimeBetweenSets: "60"},

  {name: "B", exercises: [
    {exerciseName: "plank hold", timeOn: "60", timeOff:"10", id:4},
    {exerciseName: "superman hold", timeOn: "30", timeOff:"10", id:5},
    ], 
    numberOfSets: "2", restTimeBetweenSets: "30"}],
}

]