const randomReducer = (state = [], action) => {
    if(action.type === 'SET_RANDOM_IMAGES') {
        return action.payload;
    }
    return state;
}
 
  export default randomReducer;