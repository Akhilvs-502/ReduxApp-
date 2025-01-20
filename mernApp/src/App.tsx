
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Signin } from './pages/Signin'
import { Header } from './pages/componets/Header'



function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
