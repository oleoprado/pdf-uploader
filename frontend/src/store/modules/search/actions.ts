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
