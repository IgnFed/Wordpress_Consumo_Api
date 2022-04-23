import React, { useState } from "react"
import useApi from "hooks/useApi"
import { Input } from 'components/Input'
import { Form } from "components/Form"
import { DataList } from "components/DataList"
import { Loader } from "components/Loader"
import { Button } from "components/Button"
export default function Home() {

  const [searcherValue, setSearcherValue] = useState('')
  const [isDisable, setIsDisable] = useState(true)
  const { response, isLoading, updateFilters, abort } = useApi({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) setIsDisable(true)
    else setIsDisable(false)
    setSearcherValue(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateFilters({ search: searcherValue })
    setIsDisable(false)
  }

  const handleAbort = () => {
    if (!searcherValue) setIsDisable(true)
    else setIsDisable(false)
    abort()
  }

  return (
    <section className="p-2 grid grid-rows-[150px_1fr] gap-10">
      <Form submitEvent={handleSubmit} >
        <Input handleChange={handleChange} value={searcherValue} />
        <Button disabled={isDisable} type="submit" className="w-10/12 sm:w-2/5">Search</Button>
      </Form>
      {
        isLoading ?

          <div className="flex flex-col w-fit justify-self-center items-center gap-2 pt-10">
            <Loader />
            <Button onClick={handleAbort} className="w-56 sm:w-96">Cancel</Button>
          </div>

          :

          !response.size && !isLoading ?

            <span className="text-center text-gray-600 text-2xl">¡No hay artículos relacionados con el término de búsqueda!</span>

            :

            <DataList data={response.data} />

      }
    </section>
  )
}