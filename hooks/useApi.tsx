import { useEffect, useState } from 'react';
import { apiHookProps, apiHookReturn, Filters } from 'interfaces/hooks/useApi.interface';
import { DataResponse } from 'interfaces/DataResponse.interface';

const INITIAL_STATE = {} as DataResponse
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
  const url_request = `posts?search=${search}&page=${page}${orderByRelevance ? '&orderby=relevance' : ''}`
  return await fetch(url + url_request, {
    method: method,
    signal: abortController.signal
  })
}

export default function useApi<Props extends apiHookProps>(
  {
    url = BASE_URL,
  }: Props
): apiHookReturn<DataResponse> {

  const [response, setReponse] = useState<typeof INITIAL_STATE>(INITIAL_STATE)
  const [ isLoading, setIsLoading ] = useState(false)
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  useEffect(()=>{
    if(!filters.search) return
    abortController = new AbortController()
    fetchData(url, filters)
      .then(res => res.json())
      .then(res => {
        setReponse(()=>res)
        setIsLoading(false)
      })
      return ()=>{
        abortController.abort()
        setIsLoading(true)
      }
    }, [filters])

    return {
      response,
      isLoading,
      updateFilters: (filters: Filters) =>{
        setFilters((prevFilters) => ({ ...prevFilters, ...filters }))
        setIsLoading(true)
      },
      abort: ()=>{
        abortController && abortController.abort()
        setIsLoading(false)
      }
  }
}