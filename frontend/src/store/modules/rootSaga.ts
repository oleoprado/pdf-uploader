import { all } from 'redux-saga/effects'

import search from './search/saga'

export default function* rootSaga(): Generator {
  return yield all([search])
}
