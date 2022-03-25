import { Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar/Navbar'
import About from './1-About/About'

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} />
      </Routes>
    </Fragment>
  )
}

export default App