// import { Dispatch } from 'redux'
// import { api } from '../../../lib/api'
import { ISearch } from './types'

export function fetchingData() {
  return { type: 'FETCHING_DATA' }
}

export function fetchData(payload: ISearch[]) {
  return { type: 'FETCH_SUCCESS', payload }
}

export function fetchError(payload: string) {
  return { type: 'FETCH_ERROR', payload }
}

export function fetchDataWithSearchInput(searchInput: string) {
  return { type: 'FETCH_DATA_WITH_SEARCH_INPUT', payload: searchInput }
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
