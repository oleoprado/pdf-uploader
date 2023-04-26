export interface ISearch {
  id: string
  name: string
  unit: string
  quantity: number
}

export interface ISearchState {
  items: ISearch[]
}
