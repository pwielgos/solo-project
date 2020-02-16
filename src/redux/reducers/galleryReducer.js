import { combineReducers } from 'redux';

const galleryReducer = (state = [], action) => {
    if(action.type === 'SET_GALLERY_IMAGE') {
        return action.payload;
    }
    return state;
}

const userGalleryReducer = (state = [], action) => {
    if(action.type === 'SET_USER_GALLERY') {
        return action.payload;
    }
    return state;
}
 
export default combineReducers({
    galleryReducer,
    userGalleryReducer,
  });