import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../lib/api'
import { fetchDataSuccess, fetchDataError } from './actions'

interface ISagaProps {
  type: string
  payload: string
}

// FIXME: arrumar tipagem generiscs GENERATOR
function* fetchDataSaga(action: ISagaProps): Generator<any, void, any> {
  try {
    // yield put(fetchingData())
    const response = yield call(api.get, `/files?search=${action.payload}`)
    yield put(fetchDataSuccess(response.data))
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchDataError(error.message))
    }
  }
}

// 1- é qual action vai escutar e a 2 é qual função vai executar
// takeLatest pega somente a ultima request (se fizer 5 seguidas, descarta as 4 primeira e só executa a ultima)
export default all([
  takeLatest('REQUEST_DATA_WITH_SEARCH_INPUT', fetchDataSaga),
])
