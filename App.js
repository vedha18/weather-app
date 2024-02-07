import axios from "axios"
import { useState } from "react"

function App(){

    const [deg,setdeg] =useState("238")
    const [city,setcity] =useState("london")
    const [desc,setdesc] =useState("Raining")
    const [enteredcity,setenteredcity] =useState("")

    function handleInput(event){
        console.log(event.target.value)
        setenteredcity(event.target.value)

    }

    function getData()
    {
        var weather=axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredcity}&appid=9cef02c2484bb031e0395be6073d051e`)
        
        weather.then(function(dalta)
        {
            console.log(dalta)
            setdeg(dalta.data.main.temp)
            setcity(dalta.data.name)
            setdesc(dalta.data.weather[0].description)
        })
    }
    return(
    <div className="flex flex-row justify-center h-[100vh] items-center">       
    <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className="p-4 rounded-md  shadow">       
    
            <h2 className="font-medium">Heyy! 🌥️</h2>
            <p className="text-sm">Do you want to know the Weather Report :)</p>
            <input onChange={handleInput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?"></input>
            <br></br>
            <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-sm mt-2">Get Report ⚡</button>
            
            <p className="text-sm mt-2"> Degree: {deg} | City: {city} | Weather: {desc}</p>
        
        
        </div>
    </div>
    )
}

export default App