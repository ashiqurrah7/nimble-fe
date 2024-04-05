import './App.css'
import { Routes, Route } from 'react-router-dom'
import {
  AddKeywords,
  Login,
  Register,
  KeywordDetails
} from './pages'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<AddKeywords />} ></Route>
      <Route exact path='/login' element={<Login />} ></Route>
      <Route exact path='/register' element={<Register />} ></Route>
      <Route exact path='/keywords/:keywordId' element={<KeywordDetails />} ></Route>
    </Routes>
  )
}

export default App
