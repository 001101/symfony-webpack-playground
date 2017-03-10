import { call, put, takeEvery } from 'redux-saga/effects';
import 'isomorphic-fetch'

function callApi(endpoint) {
    return fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json()
        }).then((json) => json);
}

function* fetchItems(action) {
    try {
        const items = yield call(callApi, 'http://jsonplaceholder.typicode.com/users');
        yield put({type: action.prefix + '_SET_ITEMS', payload: items});
    } catch (e) {
        yield put({type: 'CONTACT_FETCH_FAILED', message: e.message});
    }
}

function* watchFetchItems() {
    yield takeEvery('FETCH_REQUESTED', fetchItems);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        watchFetchItems(),
    ]
}
