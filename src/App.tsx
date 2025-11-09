// import { forCastData } from './API/forCast.api'
import Nav from './Component/Nav'
import CurrentWeatherComp from './Component/CurrentWeatherComp'
import HourForcastComp from './Component/hours/HourForcastComp'
import Search from './Component/Search'
import { selectError } from './AppRedux/ReduxSlice/error';
import { useSelector } from 'react-redux';

function App() {

      const error = useSelector(selectError);
   


  return (
    <>
    <Nav/>
    <div className="container pt-24">

    <h2 className='text-center mb-5'>How is the sky looking today ?</h2>
        <Search />
<div className='h-screen'>

   {error&&    <h2 className='text-center font-bold text-3xl mb-5'>No Search result found!</h2>}

     <div className={`flex justify-between flex-col lg:flex-row relative z-0 ${error&&'hidden'}`}>
    <CurrentWeatherComp/>
<HourForcastComp/>
    </div>
  </div>
      
    </div>
    <div className="attribution flex items-center justify-center ">
      <div>
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target='_blank'>Frontend Mentor</a>. <br />
  Coded by <a href="https://abdelrahman-tarik-d1je.vercel.app/" target='_blank'>Abdelrahman Tarik</a>.
      </div>
        
</div>

    </>
  )
}

export default App
