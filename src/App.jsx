
import './App.css'
import {Outlet} from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn'


function App() {


  return (
    <>
  <NavBar />
  <main>
  <div className="px-2">
  <Outlet />
  <BackToTopBtn />
  </div>
  </main>


  <Footer />

    </>
  )
}

export default App
