import React, { useState } from "react"
import { useApi } from "hooks/useApi"
import { Input } from 'components/Input'
import { Form } from "components/Form"
import { DataList } from "components/DataList"
import { Loader } from "components/Loader"
import { Button } from "components/Button"
import { NoData } from "components/NoData"
import { DataResponse } from "interfaces/DataResponse.interface"
import { Filters } from "interfaces/hooks/useApi.interface"
import { Select } from "components/Select"
import ReactPaginate from "react-paginate"

export default function Home() {

  const [filters, setFilters] = useState<Filters>({
    search: '',
    orderby: 'date',
    page: 1,
    order: 'desc',
  })
  const { updateFilters, statusResponse, response, abort } = useApi<DataResponse>("https://beta.mejorconsalud.com/wp-json/mc/v3/posts", filters, true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateFilters(filters)
  }

  const handleAbort = () => {
    abort()
  }

  const handlePageChange = (selectedItem: { selected: number }) => {
    console.log(selectedItem.selected + 1)
    setFilters({ ...filters, page: selectedItem.selected + 1 })
  }

  return (
    <section className="pb-2 pr-2 pl-2 h-screen grid grid-rows-[auto_1fr] overflow-y-auto">
      <div className="pt-2 pb-2 flex flex-col sticky top-0 z-10 w-full items-center flex-cols gap-2 bg-slate-900">
        <Form submitEvent={handleSubmit} >
          <Input
            handleChange={handleChange}
            value={filters?.search || ""}
            id='search'
            name="search"
            placeholder="Search"
          />
          <div className="flex flex-wrap justify-center gap-2">
            <Select
              name="orderby"
              onChange={handleChange}
            >
              <option value="date" defaultChecked >Date</option>
              <option value="relevance" >Relevance</option>
            </Select>
            <Select
              name="order"
              onChange={handleChange}
            >
              <option value="desc" defaultChecked >Descendence</option>
              <option value="asc" >Ascendence</option>
            </Select>
          </div>
          <ReactPaginate
            pageCount={response?.pages || 1}
            pageRangeDisplayed={10}
            initialPage={filters.page! - 1}
            previousLabel={"←"}
            nextLabel={"→"}
            breakLabel={"..."}
            onPageChange={handlePageChange}
            containerClassName={"bg-gray-800 p-2 rounded-md flex gap-2 flex-wrap align-middle items-center justify-center"}
            nextLinkClassName='bg-blue-400 pr-2 pl-2 rounded-md'
            previousLinkClassName='bg-blue-400 pr-2 pl-2 rounded-md'
            activeClassName="bg-blue-500 text-center pr-2 pl-2 rounded-md"
          />
          <Button onClick={handleAbort} type="submit" className="w-10/12 sm:w-2/5">Search</Button>
        </Form>
        <p>Total Elements {response?.size || 0}</p>
      </div>
      {
        statusResponse === 'loading' ?

          <div className="flex flex-col justify-self-center items-center gap-2 pt-10">
            <Loader />
            <Button onClick={handleAbort} className="w-56 sm:w-96">Cancel</Button>
          </div>
          :
          statusResponse === 'success' && !response!.size ?

            <NoData>¡No hay artículos relacionados con el término de búsqueda!</NoData>
            :
            <DataList data={response && response.data || []} />
      }

    </section>
  )
}