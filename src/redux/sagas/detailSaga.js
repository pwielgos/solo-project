import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchDetail(action) {
    // console.log('brooooo');
    // console.log(action.payload.id);
    let response = yield axios.get(`/api/search/details/${action.payload.id}`);
    yield put({type: 'SET_DETAILS', payload: response.data.data.thumbnail.url});
    //yield put({type: 'SET_DETAILS', title: response.data.data.title});
}

function* detailSaga() {
    yield takeEvery('GET_DETAILS', searchDetail);
}

export default detailSaga;