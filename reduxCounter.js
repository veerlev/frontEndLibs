const INCREMENT = 'INCREMENT';
   // define a constant for increment action types
const DECREMENT = 'DECREMENT'; // define a constant for decrement action types

const counterReducer = (counter = 0, action) => {
  switch(action.type){
    case INCREMENT: return counter + 1;
    case DECREMENT: return counter - 1;
    default: return counter;
  }
} // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () =>{
  return {
    type: INCREMENT
  }
} // define an action creator for incrementing

const decAction = () => {
  return {
    type: DECREMENT
    }
} // define an action creator for decrementing

const store = Redux.createStore(counterReducer); // define the Redux store here, passing in your reducers