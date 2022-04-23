import { DataResponse } from "interfaces/DataResponse"

export interface apiHookProps{
  url?: string
}


interface IFilters{
  method: 'GET',
  search: string,
  orderByRelevance: boolean,
  page: number
}

export type apiHookReturn<Data = Array<{}>> = {
  isLoading: boolean,
  data: Array<DataResponse>,
  updateFilters: (filters: Filters)=> void,
  abort: ()=> void
}
export type Filters = Partial<IFilters>