const detailReducer = (state = [], action) => {
    if(action.type === 'SET_IMAGES') {
        return action.payload;
    }
    return state;
}
 
  export default detailReducer;