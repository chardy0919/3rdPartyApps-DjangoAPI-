import { useState, useEffect } from 'react'
import axios from 'axios'

export const FoxPage = () => {
    const [foxData, setFoxData] = useState([])

    useEffect(()=>{
      const getFox = async()=>{
        const response = await axios.get(`http://127.0.0.1:8000/fox`)
        .catch((error)=> console.log(error))
        console.log(response.data.image)
        setFoxData(response.data.image);
      }
      getFox()
    },[])
    
    return(
        <img src={foxData} className="logo" ></img>
    )
}