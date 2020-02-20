import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postImage(action) {
    console.log('action.payload postimage', action.payload ); // is just the url
    yield axios.post(`/api/gallery`, action.payload);
}

function* postNewGallery(action) {
    console.log('action.payload postimage', action.payload );
    yield axios.post(`/api/gallery/create`, action.payload);
}

function* getGalleryImages(action){
    let response = yield axios.get(`/api/account/gallery/${action.payload.id}`)
    yield put({type: 'SET_GALLERY', payload: response.data})
}

function* getGalleryDetail(action){
    let response = yield axios.get(`/api/account`)
    yield put({type: 'SET_GALLERY', payload: action.payload})
}

function* getUserGalleries(){
    let response = yield axios.get(`/api/account`)
    yield put({type: 'SET_GALLERY', payload: response.data})
}

function* editGalleryName(action) {
    console.log('ready to edit the name on this gallery', action.payload)
    let id = action.payload.gallery_id
    //let galleryName = action.payload.gallery_name
    console.log('action.payload.gallery_id', action.payload.gallery_id);
    let response = yield axios.put(`/api/account/gallery/${id}`, action.payload)
    console.log('broke', action.payload)
    //yield put ({type: 'GET_GALLERY_DETAIL', payload: galleryName });
}

function* deleteGallery(action) {
    console.log('ready to delete gallery', action.payload)
    let id = action.payload.gallery_id
    //let galleryName = action.payload.gallery_name
    console.log('action.payload.gallery_id', action.payload.gallery_id);
    let response = yield axios.delete(`/api/account/gallery/${id}`, action.payload)
    console.log('broke', action.payload)
    //yield put ({type: 'GET_GALLERY_DETAIL', payload: galleryName });
}

function* gallerySaga() {
    yield takeEvery('POST_IMAGE', postImage);
    yield takeEvery('POST_NEW_GALLERY', postNewGallery);
    yield takeEvery('GET_USER_GALLERIES', getUserGalleries);
    yield takeEvery('GET_GALLERY_IMAGES', getGalleryImages);
    yield takeEvery('GET_GALLERY_DETAIL', getGalleryDetail);//not working :(
    yield takeEvery('EDIT_GALLERY_NAME', editGalleryName);
    yield takeEvery('DELETE_GALLERY', deleteGallery);
}

export default gallerySaga;