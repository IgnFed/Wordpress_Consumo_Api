import { DataResponse } from "interfaces/DataResponse.interface";

interface IFilters{
  search: string,
  orderby: "relevance" | "date",
  page: number,
  order: "asc" | "desc"
}

type StatusResponse = "idle" | "loading" | "success" | "error";

export type apiHookReturn<Data> = {
  response: Data | null,
  statusResponse: StatusResponse,
  updateFilters(newFilters: Filters): void,
  abort(): void,
  apiData(): void
}
export type Filters = Partial<IFilters>

type OnlyIncludeData<Data, Exclude extends keyof Data>  = Pick<Data, Exclude> 
type InlcudedDataOnResponse = "id" | "featured_media" | "slug" | "title"
export type FiltredDataResponse = OnlyIncludeData<DataResponse["data"][0], InlcudedDataOnResponse>