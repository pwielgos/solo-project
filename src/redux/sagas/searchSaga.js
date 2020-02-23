import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchImages(action) {
    let response = yield axios.get(`/api/search?searchterm=${action.payload}`);
    console.log('search images response', response);
    console.log('search images', action.payload);
    yield put({ type: 'SET_IMAGES', payload: response.data })
}

function* getEssentials(action) {
    let response = yield axios.get(`/api/search/essentials`);
    console.log('search images response', response);
    console.log('search images', action.payload);
    yield put({ type: 'SET_IMAGES', payload: response.data })
}

function* searchSaga() {
    yield takeEvery('GET_ARTWORK', searchImages);
    yield takeEvery('GET_ESSENTIALS', getEssentials);
}

export default searchSaga;