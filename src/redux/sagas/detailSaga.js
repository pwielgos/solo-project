import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchDetail(action) {
    let response = yield axios.get(`/api/search/details/${action.payload.id}`);
    console.log('search images response', response);
    console.log('search images', action.payload);
    yield put({ type: 'SET_IMAGES', payload: response.data })
}

function* detailSaga() {
    yield takeEvery('GET_DETAILS', searchDetail);
}

export default detailSaga;