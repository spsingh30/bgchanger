import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center duration-200" style={{background : color}}>
        <div className="flex items-center justify-center w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-4 border-2 rounded-lg shadow-md bg-white " >
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={()=>{setColor("green")}} className="bg-green-600 text-white rounded-2xl p-4 w-20">green</button>
            <button onClick={()=>{setColor("blue")}} className="bg-blue-500 text-white rounded-2xl p-4 w-20">blue</button>
            <button onClick={()=>{setColor("yellow")}} className="bg-yellow-400 text-white rounded-2xl p-4 w-20">yellow</button>
            <button onClick={()=>{setColor("pink")}} className="bg-pink-500 text-white rounded-2xl p-4 w-20">pink</button>
            <button onClick={()=>{setColor("gray")}} className="bg-gray-600 text-white rounded-2xl p-4 w-20">grey</button>
            <button onClick={()=>{setColor("lime")}} className="bg-lime-400 text-white rounded-2xl p-4 w-20">lime</button>
            <button  onClick={()=>{setColor("orange")}} className="bg-orange-400 text-white rounded-2xl p-4 w-20">orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
