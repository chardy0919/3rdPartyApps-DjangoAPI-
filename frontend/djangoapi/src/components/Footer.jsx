import Row from "react-bootstrap/esm/Row";
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Footer = () => {
    const [jokeData, setJokeData] = useState([])

    useEffect(()=>{
      const getJokes = async()=>{
        const response = await axios.get(`http://127.0.0.1:8000/jokes`)
        .catch((error)=> console.log(error))
        console.log(response.data)
        setJokeData(response.data[0]);
      }
      getJokes()
    },[])
    
    return (
        <>
        <Row>
        <p>{jokeData.joke}</p>
        </Row>
        </>
    )
}