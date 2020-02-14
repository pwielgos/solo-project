const galleryReducer = (state = [], action) => {
    if(action.type === 'SET_GALLERY_IMAGE') {
        return action.payload;
    }
    return state;
}
 
  export default galleryReducer;