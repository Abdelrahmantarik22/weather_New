import axios from "axios";


export default async function forCastDays (city:string|'cairo') {

    try {
        const response=await axios.get('https://api.weatherapi.com/v1/forecast.json',{
             params:{
                key:'a57bc4b37891402eb98112911253006',
                days:7,
                q:city
                        }}
        ) 
        const futureDays=response.data
        return futureDays
    } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
    return null; // علشان الكومبوننت يعرف إن فيه خطأ حصل
  }
}