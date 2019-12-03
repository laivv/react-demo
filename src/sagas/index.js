import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../api'

function* fetchArticles(action) {
    try {
        const articles = yield call(Api.fetchPage, action.payload.page)
        console.log(articles,'--------------')
        yield put({ type: "ARTICLES_FETCH_SUCCEEDED", articles })
    } catch (e) {
        yield put({ type: "ARTICLES_FETCH_FAILED", message: e.message })
    }
}


function* mySaga() {
    yield takeEvery("ARTICLES_FETCH_REQUESTED", fetchArticles)
}

export default mySaga