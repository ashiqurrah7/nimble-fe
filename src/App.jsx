import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  AddKeywords,
  Login,
  Register,
  KeywordDetails,
  KeywordList,
} from './pages';
import './App.css';
import { Navbar } from './Shared';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const cookieToken = Cookies.get('token');
    if(cookieToken) setToken(cookieToken);
  }, [])

  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <Routes>
        <Route exact path='/' element={<AddKeywords token={token}/>}></Route>
        <Route exact path='/login' element={<Login token={token} setToken={setToken} />}></Route>
        <Route exact path='/register' element={<Register token={token} />}></Route>
        <Route exact path='/keywords' element={<KeywordList token={token} />} ></Route>
        <Route exact path='/keywords/:keywordId' element={<KeywordDetails token={token}/>}></Route>
      </Routes>
    </>
  )
}

export default App
