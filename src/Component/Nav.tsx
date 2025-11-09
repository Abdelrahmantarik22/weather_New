import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { FaGear } from 'react-icons/fa6';
import Select from './Select';
export default function Nav() {



    const [open ,setOpen]=useState(false)
    console.log(open);
    
  return (
    <nav className='w-full px-2 absolute top-0 left-0  h-20'>
        <div className="container flex justify-between items-center">
      <img src={logo} alt="logo" className='size-28 ' />



<div className='relative'>
  <button 
  onClick={()=>setOpen(!open)}
  id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-white bg-main font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center gap-2 cursor-pointer" type="button"><FaGear/>  Units <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
    </svg>
  </button>
  {/* Dropdown menu */}
  <div>


    <Select open={open}/>
  </div>
</div>



      </div>

    </nav>
  )
}
