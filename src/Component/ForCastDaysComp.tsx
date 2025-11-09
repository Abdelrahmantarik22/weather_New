import { useSelector } from "react-redux";
import { selectTemp } from "../AppRedux/ReduxSlice/tempSelector/tempSlice";
import type { Root } from "../interface/forCastinterface";
import { selectSkele } from "../AppRedux/ReduxSlice/skeleton/skele";


export default function ForCastDaysComp({forcast}:{forcast:Root}) {

        const temp = useSelector(selectTemp);
  const skele = useSelector(selectSkele);

console.log(forcast);


  return (
    <section id='forCastData' className="w-full  my-4">
        <h2 className="px-1 text-xl font-bold my-3">Daily Forcast</h2>
        <div className="flex  flex-wrap items-center ">
{forcast?.forecastday.map((day,index)=>{
const DateName=new Date(day.date).toLocaleDateString("en-US", {
    weekday: "long", 
  })
    return(

        <div key={index} className=" md:w-1/6 w-1/3 mb-3">
        <div className="px-1 w-full">
              <div className="flex flex-col gap-1 items-center bg-[#2F2F49] rounded-lg p-2 md:w-[98.66px] md:h-[136px]">
               
               {skele&&<>
                <span>{DateName}</span>
                <img src={day.day.condition.icon}  alt="weatherIcon" />
                <div className="w-full flex items-center justify-between">
                    <span>{temp?`${day.day.maxtemp_c}°`:`${day.day.maxtemp_f}°`}</span>
                    <span>{temp?`${day.day.mintemp_c}°`:`${day.day.mintemp_f}°`}</span>
                </div>
               </>
}
            </div>

        </div>
    </div>
    )
})}
{forcast?.forecastday.map((day,index)=>{
const DateName=new Date(day.date).toLocaleDateString("en-US", {
    weekday: "long", 
  })
    return(

        <div key={index} className=" md:w-1/6 w-1/3 mb-3">
        <div className="px-1 w-full">
            <div className="flex flex-col gap-1 items-center bg-[#2F2F49] rounded-lg p-2 md:w-[98.66px] md:h-[136px]">
               
               {skele&&<>
                <span>{DateName}</span>
                <img src={day.day.condition.icon}  alt="weatherIcon" />
                <div className="w-full flex items-center justify-between">
                    <span>{temp?`${day.day.maxtemp_c}°`:`${day.day.maxtemp_f}°`}</span>
                    <span>{temp?`${day.day.mintemp_c}°`:`${day.day.mintemp_f}°`}</span>
                </div>
               </>
}
            </div>

        </div>
    </div>
    )
})}
        </div>
      
    </section>
  )
}
