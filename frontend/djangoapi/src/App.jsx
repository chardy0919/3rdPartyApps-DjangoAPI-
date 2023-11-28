import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Outlet } from "react-router-dom";
import "./App.css" 

function App() {

  return (
    <>
      <h1>Made by Kendra and Cody</h1>
      <Navbar/>
      <Outlet/>
      <Footer className= "footer"/>
    </>
  )
}

export default App
