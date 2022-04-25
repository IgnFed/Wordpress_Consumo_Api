import { apiHookReturn, Filters } from "interfaces/hooks/useApi.interface";
import { useCallback, useEffect, useState } from "react";

let abortController: AbortController;

type StatusResponse = "idle" | "loading" | "success" | "error";

export const useApi = <DataResponse,>(
  url: string,
  initialFilters?: Filters,
  inmediate?: boolean
): apiHookReturn<DataResponse> => {

  if (!url.endsWith("/")) url += "/"

  const [data, setData] = useState<DataResponse | null>(null)
  const [urlValue, setUrlValue] = useState<string>(url)
  const [filters, setFilters] = useState<typeof initialFilters>(initialFilters)
  const [statusResponse, setStatusResponse] = useState<StatusResponse>("idle")

  const apiData = useCallback(async () => {
    if(!abortController) abortController = new AbortController()
    setStatusResponse("loading")
    await fetch(urlValue)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setStatusResponse("success")
      })

  }, [urlValue])

  useEffect(() => {
    if(!filters) return
    if (!Object.keys(filters).length) return
    let newUrl = ""
    Object.entries(filters).forEach(([key, value], idx) => {
      if (value) newUrl += `${key}=${value}` + (idx + 1 < Object.entries(filters).length ? "&" : "")
    })
    newUrl = url + "?" + newUrl
    setUrlValue(newUrl)
  }, [filters])

  useEffect(()=>{
    if(!inmediate) return
    abortController = new AbortController()
    apiData()
    return ()=> abortController.abort()
  }, [inmediate, apiData])

  return {
    response: data,
    statusResponse,
    updateFilters: (newFilters: Filters)=> setFilters((prev)=> !prev ? newFilters : {...prev, ...newFilters}),
    apiData,
    abort: ()=>{
      abortController && abortController.abort()
      setStatusResponse("idle")
    }
  }

}