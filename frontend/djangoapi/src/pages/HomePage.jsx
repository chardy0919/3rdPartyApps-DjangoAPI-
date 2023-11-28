import { useState, useEffect } from 'react'
import axios from 'axios'

export const HomePage = () => {
    const [catData, setCatData] = useState([])

    useEffect(()=>{
      const getCat = async()=>{
        const response = await axios.get(`http://127.0.0.1:8000/cats`)
        .catch((error)=> console.log(error))
        console.log(response.data[0]['url'])
        setCatData(response.data[0])
      }
      getCat()
    },[])
    
    return(
        <img src={catData['url']} className="logo" ></img>
    )
}