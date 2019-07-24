import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchArticles(action) {
    try {
        const articles = yield call('/', action.payload.page)
        yield put({ type: "ARTICLES_FETCH_SUCCEEDED", articles })
    } catch (e) {
        yield put({ type: "ARTICLES_FETCH_FAILED", message: e.message })
    }
}


function* mySaga() {
    yield takeEvery("ARTICLES_FETCH_REQUESTED", fetchArticles)
}

export default mySaga