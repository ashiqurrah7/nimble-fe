import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AddKeywords, Login, Register } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/register' element={<Register />} ></Route>
      <Route path='/' element={<AddKeywords />} ></Route> 
    </Routes>
  )
}

export default App
