import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../lib/api'
import { fetchingData, fetchData, fetchError } from './actions'
import { ISearch } from './types'

interface ISagaProps {
  type: string
  payload: string
}

function* fetchDataSaga(action: ISagaProps) {
  try {
    // yield put(fetchingData())
    const response = yield call(api.get, `/files?search=${action.payload}`)
    yield put(fetchData(response.data))
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchError(error.message))
    }
  }
}

// 1 para é qual action vai escutar e a 2 é qual vai executar
// takeLatest pega somente a ultima request
export default all([takeLatest('FETCH_DATA_WITH_SEARCH_INPUT', fetchDataSaga)])
