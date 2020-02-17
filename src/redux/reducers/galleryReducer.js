const galleryReducer = (state = [], action) => {
    if(action.type === 'SET_GALLERY') {
        return action.payload;
    }
    return state;
}
 
export default galleryReducer;