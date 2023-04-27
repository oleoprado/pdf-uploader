import { Reducer } from 'react'
import { ISearchState } from './types'

interface IAction {
  type: 'FETCHING_DATA' | 'FETCH_SUCCESS' | 'FETCH_ERROR'
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
  // console.log(action.payload)

  const actionReducer = {
    FETCHING_DATA: {
      ...state,
      isLoading: true,
    },
    FETCH_SUCCESS: {
      ...state,
      isLoading: false,
      items: [action.payload],
      // items: action.payload,
    },
    FETCH_ERROR: {
      ...state,
      isLoading: false,
      error: action.payload,
    },
  }
  return actionReducer[action.type] ?? state
  // switch (action.type) {
  //   case 'FETCHING_DATA':
  //     return {
  //       ...state,
  //       isLoading: true,
  //     }
  //   case 'FETCH_SUCCESS':
  //     return {
  //       ...state,
  //       isLoading: false,
  //       items: action.payload.data,
  //     }
  //   default:
  //     return state
  // }
}

export default search
