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
export default function Home() {

  const [inputValues, setInputValues] = useState({
    search: '',
    orderby: ''
  })
  const [isDisable, setIsDisable] = useState(true)
  const [filters, setFilters] = useState<Filters>({ search: '', page: 1, orderby: 'relevance' })
  const { updateFilters, statusResponse, response, abort } = useApi<DataResponse>("https://beta.mejorconsalud.com/wp-json/mc/v3/posts", true)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) setIsDisable(true)
    else setIsDisable(false)
    setInputValues((prev)=> ({...prev, [e.target.name]: e.target.value}))
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateFilters(filters)
  }

  const handleAbort = () => {
    if (!inputValues) setIsDisable(true)
    else setIsDisable(false)
    abort()
  }

  return (
    <section className="p-2 h-screen grid grid-rows-[250px_1fr] gap-2 overflow-y-auto">
      <div className="flex flex-cols">
        <Form submitEvent={handleSubmit} >
          <div>
          <Input
            handleChange={handleChange}
            value={inputValues.search}
            id='searcher'
            name="searcher"
            placeholder="Search"
          >
            Search
          </Input>
          </div>
          <Button onClick={handleAbort} disabled={isDisable} type="submit" className="w-10/12 sm:w-2/5">Search</Button>
        </Form>
      </div>
      {
        statusResponse === 'loading' ?

          <div className="flex flex-col justify-self-center items-center gap-2 pt-10">
            <Loader />
            <Button className="w-56 sm:w-96">Cancel</Button>
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