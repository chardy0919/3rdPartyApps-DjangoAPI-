import { useState, useEffect } from 'react'
import axios from 'axios'

export const DogPage = () => {
    const [dogData, setDogData] = useState([])

    useEffect(()=>{
      const getDog = async()=>{
        const response = await axios.get(`http://127.0.0.1:8000/dogs`)
        .catch((error)=> console.log(error))
        console.log(response.data[0]['url'])
        setDogData(response.data[0])
      }
      getDog()
    },[])
    
    return(
        <img src={dogData['url']} className="logo" ></img>
    )
}