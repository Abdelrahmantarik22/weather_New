/* eslint-disable */

import { useEffect, useState } from "react";
import type { RootCurrent } from "../interface/currentday.interface";
import forCastDays from "../API/forCast.api";
import ForCastDaysComp from "./ForCastDaysComp";
import { useDispatch, useSelector } from "react-redux";
import { selectCity } from "../AppRedux/ReduxSlice/citySlice";
import { selectTemp } from "../AppRedux/ReduxSlice/tempSelector/tempSlice";
import { selectWind } from "../AppRedux/ReduxSlice/windselector/windSlice";
import { selectPrecip } from "../AppRedux/ReduxSlice/precipselector/precipSlice";
import { selectSkele, sn, sy } from "../AppRedux/ReduxSlice/skeleton/skele";
import { En, Ey } from "../AppRedux/ReduxSlice/error";

export default function CurrentWeatherComp() {
  const [weather, setWeather] = useState<RootCurrent | null>(null);
  const temp = useSelector(selectTemp);
  const wind = useSelector(selectWind);
  const skele = useSelector(selectSkele);
  const precip = useSelector(selectPrecip);
    //   const errror = useSelector(selectError);

  const dispatch = useDispatch();

  const city = useSelector(selectCity);

  const date = weather
    ? new Date(weather?.location.localtime).toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";
  useEffect(() => {
    const weatherData = async function (city: string) {
        dispatch(En())
      dispatch(sn());
      const data = await forCastDays(city);

      setWeather(data);
      dispatch(sy());
      if(!data){
        dispatch(Ey())
    }else{

        dispatch(En())
    }
    
      return data;
    };

    weatherData(city);

  }, [city]);
 

  return (
    <>
      <div className="lg:w-1/2 w-full">
        <section id="current-day" className="w-full  px-1 ">
          <div className={`flex flex-col md:flex-row ${skele?'bg_color':'bg-[#2F2F49]'} lg:w-[632px] lg:h-[152px] py-10 rounded-lg   `}>
            {skele&&(<>
            <div className="w-full md:w-1/2 mb-4 text-center">
              <h2 className="text-xl font-semibold text-white">
                {weather?.location.name}, {weather?.location.country}
              </h2>
              <span className="text-[14px] text-white font-light">{date}</span>
            </div>
            <div className="w-full md:w-1/2 flex items-center gap-16 justify-center">
              <img
                className="size-16"
                src={`${weather?.current.condition.icon}`}
                alt="weather icon"
              />
              <span className="text-7xl text-white font-medium">
                {temp
                  ? `${weather?.current.temp_c}°`
                  : `${weather?.current.temp_f}°`}
              </span>
            </div> </>)
                
                }
          </div>

          <div className="flex items-center flex-wrap">
            <div className="w-1/2 md:w-1/4 my-4">
              <div className=" ">
                <div className="flex flex-col gap-4 bg-[#2F2F49] px-3 py-4 rounded-lg">
                  <span className="font-light text-white">Feels Like</span>
                  {skele?<span className="text-2xl font-bold ">
                    {temp
                      ? `${weather?.current.feelslike_c}°`
                      : `${weather?.current.feelslike_f}°`}
                  </span>:<span className="text-2xl font-bold "> - </span>}
                </div>
              </div>
            </div>

            <div className="w-1/2 md:w-1/4">
              <div className="p-1 ">
                <div className="flex flex-col gap-4 bg-[#2F2F49] px-3 py-4 rounded-lg">
                  <span className="font-light text-white">Humidity</span>
                 {skele? <span className="text-2xl font-bold ">
                    {weather?.current.humidity} %{" "}
                  </span>:<span className="text-2xl font-bold "> - </span>}
                </div>
              </div>
            </div>

            <div className="w-1/2 md:w-1/4">
              <div className="p-1 ">
                <div className="flex flex-col gap-4 bg-[#2F2F49] px-3 py-4 rounded-lg">
                  <span className="font-light text-white">Wind</span>
                 {skele? <span className="text-xl font-bold ">
                    {wind
                      ? `${weather?.current.wind_kph} Km/h`
                      : `${weather?.current.wind_mph} mph`}{" "}
                  </span>:<span className="text-2xl font-bold "> - </span>}
                </div>
              </div>
            </div>

            <div className="w-1/2 md:w-1/4">
              <div className=" ">
                <div className="flex flex-col gap-4 bg-[#2F2F49] px-3 py-4 rounded-lg">
                  <span className="font-light text-white">Precipitation</span>
                  {skele?<span className="text-2xl font-bold ">
                    {precip
                      ? `${weather?.current.precip_mm} mm`
                      : `${weather?.current.precip_in} in`}
                  </span>:<span className="text-2xl font-bold "> - </span>}
                </div>
              </div>
            </div>
          </div>
        </section>
        {weather?.forecast && <ForCastDaysComp forcast={weather.forecast} />}
      </div>
                   
    </>
  );
}
