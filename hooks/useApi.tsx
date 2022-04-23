import { useEffect, useState } from 'react';
import { apiHookProps, apiHookReturn, Filters } from 'interfaces/hooks/useApi.interface';
import { DataResponse } from 'interfaces/DataResponse';

const INITIAL_STATE = [] as Array<DataResponse>
let abortController:AbortController;
const INITIAL_FILTERS = {
  method: 'GET',
  orderByRelevance: false,
  page: 1,
  search: '',
} as Filters

const BASE_URL = "https://beta.mejorconsalud.com/wp-json/mc/v3/"

const fetchData = async (url: string, parameters: Filters) => {
  const { search, orderByRelevance, method, page } = parameters
  const URL_REQUEST = `posts?search=${search}&page=${page}${orderByRelevance ? '&orderby=relevance' : ''}`
  return await fetch(url + URL_REQUEST, {
    method: method,
    signal: abortController.signal
  })
}

export default function useApi<Props extends apiHookProps>(
  {
    url = BASE_URL,
  }: Props
): apiHookReturn {

  const [data, setData] = useState<typeof INITIAL_STATE>(INITIAL_STATE)
  const [ isLoading, setIsLoading ] = useState(true)
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  useEffect(()=>{
    if(!filters.search) return
    abortController = new AbortController()
    fetchData(url, filters)
      .then(res => res.json())
      .then(res => {
        setData(()=>res.data)
        setIsLoading(false)
      })
      return ()=>{
        abortController.abort()
        setIsLoading(true)
      }
    }, [filters])

    return {
      data,
      isLoading,
      updateFilters: (filters: Filters) => setFilters((prevFilters) => ({ ...prevFilters, ...filters })),
      abort: ()=>{
        abortController && abortController.abort()
        console.log("Abort")
        setIsLoading(false)
      }
  }
}