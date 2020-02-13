import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchDetail(action) {
    console.log('brooooo');
    console.log(action.payload.id);
    
    
    let response = yield axios.get(`/api/search/details/${action.payload.id}`);
    //let response = yield axios.get(`/api/search?searchterm=${action.payload}`);
    yield put({type: 'SET_DETAILS', payload: response.data})
}

function* detailSaga() {
    yield takeEvery('GET_DETAILS', searchDetail);
}

export default detailSaga;