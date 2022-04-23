import { useState } from "react"
import useApi from "../hooks/useApi"
import { Input } from '../components/Input'
import { Form } from "../components/Form"
import { DataList } from "../components/DataList"
import { Loader } from "components/Loader"
export default function Home() {

  const [searcherValue, setSearcherValue] = useState('')
  const [ isEnable, setIsEnable ] = useState(false)
  const { data, isLoading, updateFilters, abort } = useApi({})
  const handleChange = (e: any) =>{
    if(!e.target.value) setIsEnable(false)
    else setIsEnable(true)
    setSearcherValue(e.target.value)
  }
  const handleSubmit = (e:any)=>{
    e.preventDefault()
    updateFilters({ search: searcherValue })
    setIsEnable(false)
  }

  const handleAbort = ()=>{
    setIsEnable(true)
    abort()
  }

  return (
    <section className="h-full flex flex-col items-center pt-3 gap-10">
      <Form submitEvent={handleSubmit} >
        <Input handleChange={handleChange} value={searcherValue} />
        <button type="submit" disabled={!isEnable ? true : false} className={`bg-gray-700 w-10/12 p-3 rounded-md text-gray-400 ${isEnable && 'hover:bg-gray-800'} ${isEnable && 'hover:text-white'} transition-colors sm:w-2/5`} >Search</button>
      </Form>
      {
        isLoading ? 
        <>
        <Loader />
        <button type="button" onClick={handleAbort} className={` absolute top-1/2 left-1/2 translate-y-20 -translate-x-1/2 bg-gray-700 w-2/5 p-3 rounded-md text-gray-400 ${isEnable && 'hover:bg-gray-800'} ${isEnable && 'hover:text-white'} transition-colors`} >Cancel</button>
        </>
        
        :
        <DataList data={data} />
      }
    </section>
  )
}