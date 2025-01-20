
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/about" element={<About/>}></Route>
      {/* <Route path="/sign-in" element={<Signi/>}></Route> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
