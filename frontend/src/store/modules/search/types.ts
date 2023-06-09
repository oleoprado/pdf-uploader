export interface ISearch {
  id: string
  name: string
  description: string
  unit: string
  quantity: number
}

export interface ISearchState {
  isLoading: boolean
  error: string | null
  items: ISearch[]
}

export interface IState {
  search: ISearchState
}
