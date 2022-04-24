interface IFilters{
  search: string,
  orderby: 'relevance',
  page: number
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