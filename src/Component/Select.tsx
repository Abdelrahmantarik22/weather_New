import { FaCheck } from 'react-icons/fa';
import { C, F, selectTemp } from '../AppRedux/ReduxSlice/tempSelector/tempSlice';
import { useDispatch, useSelector } from 'react-redux';
import { km, mp, selectWind } from '../AppRedux/ReduxSlice/windselector/windSlice';
import { inch, mm, selectPrecip } from '../AppRedux/ReduxSlice/precipselector/precipSlice';
import { useEffect } from 'react';


export default function Select({open}:{open:boolean}) {
        const wind = useSelector(selectWind);
        const precip = useSelector(selectPrecip);
const temp = useSelector(selectTemp);
const dispatch = useDispatch();

useEffect(()=>{
localStorage.setItem('temp',JSON.stringify(temp))
localStorage.setItem('wind',JSON.stringify(wind))
localStorage.setItem('precip',JSON.stringify(precip))
},[wind,temp,precip])








    
  return (
<div className=''>



  <div id="dropdownDivider" className={`z-[999] ${!open&&'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600 absolute -left-8 md:left-0 top-[110%] p-3`}>
    <span className='w-full block'>Temperature</span>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li className='flex items-center justify-between relative'>
        <p onClick={()=>dispatch(C())}  className={`block w-full ${temp&&'bg-gray-600'} cursor-pointer mb-2 px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>Celsius (°C)</p>
        {temp&&<FaCheck className='absolute right-2'/>}
      </li>
      <li className='flex items-center justify-between relative'>
        <p onClick={()=>dispatch(F())} className={`block w-full ${!temp&&'bg-gray-600'} cursor-pointer mb-2 px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>Fahrenheit (°F)</p>
        {!temp&&<FaCheck className='absolute right-2'/>}
      </li> 
      
    </ul>
    

    <div className="py-2">
<span className='w-full block'>Wind Speed</span>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li className='flex items-center justify-between relative'>
        <p onClick={()=>dispatch(km())} className={`block w-full ${wind&&'bg-gray-600'} cursor-pointer mb-2 px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>km/h</p>
        {wind&&<FaCheck className='absolute right-2'/>}
      </li>
      <li className='flex items-center justify-between relative'>
        <p onClick={()=>dispatch(mp())} className={`block w-full ${!wind&&'bg-gray-600'} cursor-pointer mb-2 px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>mph</p>
        {!wind&&<FaCheck className='absolute right-2'/>}
      </li>
      
    </ul>  
      </div>



      <div className="py-2">
<span className='w-full block'>Precipitation</span>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li className='flex items-center justify-between relative'>
        <p onClick={()=>dispatch(mm())} className={`block w-full ${precip&&'bg-gray-600'} cursor-pointer mb-2 px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>Millimeters (mm)</p>
        {precip&&<FaCheck className='absolute right-2'/>}
      </li>
      <li className='flex items-center justify-between relative'>
        <p onClick={()=>dispatch(inch())} className={`block w-full ${!precip&&'bg-gray-600'} cursor-pointer mb-2 px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>Inches (in)</p>
        {!precip&&<FaCheck className='absolute right-2'/>}
      </li>
      
    </ul>  
      </div>
  </div>
  </div>
  )
}
