import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postImage(action) {
    console.log('ready to post image', action.payload);
    let response = yield axios.post(`/api/gallery`, {url: action.payload});
    console.log('search images response', response);
    console.log('search images', action.payload);
    yield put({ type: 'SET_GALLERY_IMAGE' })
}

function* getUserGallery(action){
    let response = yield axios.get(`/api/account/gallery/${action.payload.id}`)
    yield put({type: 'SET_USER_GALLERY', payload: response.data})
}

function* gallerySaga() {
    yield takeEvery('POST_IMAGE', postImage);
    yield takeEvery('GET_GALLERY_IMAGES', getUserGallery);
}

export default gallerySaga;