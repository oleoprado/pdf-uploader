// import { Dispatch } from 'redux'
// import { api } from '../../../lib/api'
import { ISearch } from './types'

export function fetchingData() {
  return { type: 'FETCHING_DATA' }
}

export function fetchDataSuccess(payload: ISearch[]) {
  return { type: 'FETCH_DATA_SUCCESS', payload }
}

export function fetchDataError(payload: string) {
  return { type: 'FETCH_DATA_ERROR', payload }
}

export function requestDataWithSearchInput(searchInput: string) {
  return { type: 'REQUEST_DATA_WITH_SEARCH_INPUT', payload: searchInput }
}

// export const fetchData = () => async (dispatch: Dispatch) => {
//   dispatch(fetchingData())
//   try {
//     const response = await api.get('/files')
//     dispatch(fetchSuccess(response.data))
//   } catch (error) {
//     if (error instanceof Error) {
//       dispatch(fetchError(error.message))
//     }
//   }
// }
