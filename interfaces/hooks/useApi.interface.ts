export interface apiHookProps{
  url?: string
}


interface IFilters{
  method: 'GET',
  search: string,
  orderByRelevance: boolean,
  page: number
}

export type apiHookReturn<Data = any> = {
  isLoading: boolean,
  response: Data,
  updateFilters: (filters: Filters)=> void,
  abort: ()=> void
}
export type Filters = Partial<IFilters>