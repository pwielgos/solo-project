import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchImages() {
    let response = yield axios.get('/random');
    yield put({ type: 'SET_IMAGES', payload: response.data })
}

function* searchSaga() {
    yield takeEvery('GET_ARTWORK', searchImages);
}

export default searchSaga;