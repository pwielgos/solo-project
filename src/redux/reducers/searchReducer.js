const searchReducer = (state = [], action) => {
    if(action.type === 'SET_IMAGES') {
        return action.payload;
    }
    return state;
}
 
  export default searchReducer;