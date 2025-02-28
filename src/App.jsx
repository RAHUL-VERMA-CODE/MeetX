import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'
import image from './assets/image.png'
import logo from './assets/logo.png'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='bg-[#242424] h-screen w-screen'> 
      <div className='h-full flex justify-around items-center '>
        
      <img src={logo} className='h-[100px] w-[100px] absolute top-2 left-5'/>

      <div >
       <Card />
      </div> 

   <div>
   <img src={image} alt="" />
   </div>

   </div> 
   </div>
  )
}

export default App
