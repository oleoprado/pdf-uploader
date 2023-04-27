import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../lib/api'
import { fetchDataSuccess, fetchDataError } from './actions'

interface ISagaProps {
  type: string
  payload: string
}

function* fetchDataSaga(action: ISagaProps): Generator<any, void, any> {
  try {
    const response = yield call(api.get, `/files?search=${action.payload}`)
    yield put(fetchDataSuccess(response.data))
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchDataError(error.message))
    }
  }
}

export default all([
  takeLatest('REQUEST_DATA_WITH_SEARCH_INPUT', fetchDataSaga),
])
