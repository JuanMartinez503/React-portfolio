
import './App.css'
import {Outlet} from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn'


function App() {


  return (
    <>
  <NavBar />
  <div className="p-2">
  <Outlet />
  <BackToTopBtn />
  </div>

  <Footer />

    </>
  )
}

export default App
