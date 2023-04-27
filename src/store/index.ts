import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'
import { ISearchState } from './modules/search/types'

export interface IState {
  search: ISearchState
}

const sagaMiddleware = createSagaMiddleware()

// array de middlewares para o saga observar
const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

// passar as funções do saga
sagaMiddleware.run(rootSaga)

export default store
