import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* randomImages() {
    let response = yield axios.get(`/api/random`);
    
    yield put({ type: 'SET_RANDOM_IMAGES', payload: response.data })
}

function* randomSaga() {
    yield takeEvery('GET_RANDOM_IMAGES', randomImages);
}

export default randomSaga;