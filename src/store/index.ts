import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './modules/rootReducer'
import { ISearchState } from './modules/search/types'

export interface IState {
  search: ISearchState
}

const store = createStore(rootReducer, composeWithDevTools())

export default store
