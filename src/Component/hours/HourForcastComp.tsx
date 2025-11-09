import  { useEffect, useState } from 'react'
import { selectCity } from '../../AppRedux/ReduxSlice/citySlice';
import { useSelector } from 'react-redux';
import forCastDays from '../../API/forCast.api';
import type { RootCurrent } from '../../interface/currentday.interface';
import { selectTemp } from '../../AppRedux/ReduxSlice/tempSelector/tempSlice';
import { selectSkele } from '../../AppRedux/ReduxSlice/skeleton/skele';

export default function HourForcastComp() {
      const [weather, setWeather] = useState<RootCurrent |null>(null)
      const [ND,setND]=useState(0)
          const temp = useSelector(selectTemp);
          const DayName=new Date(weather?.forecast?.forecastday[ND].date??'').toLocaleDateString("en-US", {
    weekday: "long", 
  })
    const skele = useSelector(selectSkele);

      
const [open ,setOpen]=useState(false)
        const city = useSelector(selectCity);
 useEffect(()=>{
        const weatherData=  async function (city:string) {
            const data =await forCastDays(city) 
            setWeather(data)
            return data
          }
           
      weatherData(city)
        },[city])
        
        


  return (
    <section id='HourForcast' className='lg:w-1/3 w-full '>
      
<div className='flex flex-col bg-[#2F2F50] rounded-lg p-5'>
    <div id='sectionTitle' className='w-full flex items-center justify-between'>
                <h2 className="px-1 text-xl font-bold my-3">Hourly Forcast</h2>
 <div className='relative'>
                   
<button onClick={()=>{setOpen(!open)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-white bg-blue-700 hover:bg-blue-800    font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 " type="button">{DayName}
 <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
  </svg>
</button>


<div id="dropdown" className={`z-10 ${!open&&'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-sm absolute top-10 right-0 w-44  dark:bg-gray-700`}>
  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

{weather?.forecast.forecastday.map((day,index)=>{
const DateName=new Date(day.date).toLocaleDateString("en-US", {
    weekday: "long", 
  })
    return(
         <li key={index}>
      <span onClick={()=>{setND(index)
        setOpen(false)
      }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{skele&&DateName}</span>
    </li>


    )
})}

  
  </ul>
</div>

</div>
</div>



<div className='h-96 overflow-y-scroll'>
    <ul className=''>
        {weather?.forecast.forecastday[ND].hour.map((H,index)=>{
          const DateHour=new Date(H.time).getHours()
            const period = DateHour >= 12 ? "PM" : "AM";

        const hour = DateHour % 12 === 0 ? 12 : DateHour % 12; // 0 -> 12

  return(
            <li key={index}className={`block w-full bg-[#2F2F49] cursor-pointer mb-2 px-2 py-2 rounded-lg hover:bg-[#2F2F49]  dark:hover:text-white w-[356px] h-[64px]`}>
            {skele&&    <div className='flex items-center w-full justify-between'>
                    <div className='flex items-center'>
                        <img src={`${H.condition.icon}`} alt="" />
                        <span className='font-semibold '>{`${hour} ${period}`}</span>
                    </div>

                    <p  className='font-semibold ' >{temp?`${H.temp_c} °`:`${H.temp_f} °`}</p>
                </div>}
                  </li>
        )})}
    </ul>
</div>

    
</div>



    </section>
  )
}
