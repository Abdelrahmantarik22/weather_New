/* eslint-disable */

import { useEffect, useState } from "react"
import { setCity } from "../AppRedux/ReduxSlice/citySlice"
import { useDispatch } from "react-redux";

export default function Search() {

const dispatch = useDispatch();
const [cityNAme,setCityName]=useState('')



function handleSubmit(e:  React.FormEvent<HTMLFormElement>){
  e.preventDefault()
  if (!cityNAme.trim()) return; 
  dispatch(setCity(cityNAme))
  localStorage.setItem('cityName',cityNAme)
  setCityName('')
}
useEffect(()=>{
    if(localStorage.getItem('cityName')){
dispatch(setCity(`${localStorage.getItem('cityName')}`))
    }
},[])

  return (
 
<form onSubmit={handleSubmit}  className="max-w-md mx-auto mb-10">   
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input
    onChange={(e)=>{
        setCityName(e.target.value)
    }}
    value={cityNAme}
    type="search" id="default-search" className="block w-full p-4 ps-10 text-sm border-gray-300 rounded-lg bg-[#2F2F49] " placeholder="Search for a place..." required />
    <button
    type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 transition-colors duration-500 cursor-pointer  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">Search</button>
  </div>
</form>


  )
}
