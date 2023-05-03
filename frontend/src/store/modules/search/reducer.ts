import { Reducer } from 'react'
import { ISearchState } from './types'

interface IAction {
  type:
    | 'FETCHING_DATA'
    | 'FETCH_DATA_SUCCESS'
    | 'FETCH_DATA_ERROR'
    | 'CLEAR_DATA'
  payload: any
}

const INITIAL_STATE: ISearchState = {
  isLoading: false,
  error: '',
  items: [],
}

const search: Reducer<ISearchState, IAction> = (
  state = INITIAL_STATE,
  action: IAction,
) => {
  const actionReducer = {
    FETCHING_DATA: {
      ...state,
      isLoading: true,
    },
    FETCH_DATA_SUCCESS: {
      ...state,
      isLoading: false,
      items: action.payload,
    },
    FETCH_DATA_ERROR: {
      ...state,
      isLoading: false,
      error: action.payload,
    },
    CLEAR_DATA: {
      ...state,
      isLoading: false,
      items: [],
      error: null,
    },
  }
  return actionReducer[action.type] ?? state
}

export default search
