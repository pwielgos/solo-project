import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postImage(action) {
    console.log('ready to post image', action.payload);
    let response = yield axios.post(`/api/gallery`, {url: action.payload});
    console.log('search images response', response);
    console.log('search images', action.payload);
    yield put({ type: 'SET_GALLERY_IMAGE' })
}

function* gallerySaga() {
    yield takeEvery('POST_IMAGE', postImage);
}

export default gallerySaga;