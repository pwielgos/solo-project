import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postImage(action) {
    let response = yield axios.post(`/api/gallery`, {url: action.payload});
}

function* getUserGallery(action){
    let response = yield axios.get(`/api/account/gallery/${action.payload.id}`)
    yield put({type: 'SET_GALLERY', payload: response.data})
}

function* getGalleryDetail(action){
    let response = yield axios.get(`/api/account`)
    yield put({type: 'SET_GALLERY', payload: action.payload})
}

function* gallerySaga() {
    yield takeEvery('POST_IMAGE', postImage);
    yield takeEvery('GET_GALLERY_IMAGES', getUserGallery);
    yield takeEvery('GET_GALLERY_DETAIL', getGalleryDetail);
}

export default gallerySaga;