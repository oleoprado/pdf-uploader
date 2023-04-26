import { Reducer } from 'react'
import { ISearchState } from './types'

const INITIAL_STATE: ISearchState = {
  items: [],
}

const search: Reducer<ISearchState, any> = () => {
  return INITIAL_STATE
}

export default search
