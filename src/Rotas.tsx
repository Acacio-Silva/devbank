import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Accounts from './pages/Account';
import Clients from './pages/Clients';
import Home from './pages/Home';
import Login from './pages/Login';
import Transfers from './pages/Transfers';

function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Accounts' element={<Accounts />}/>
      <Route path='/Clients' element={<Clients/>}/>
      <Route path='/Transfers' element={<Transfers/>}/>
      
    </Routes>
  );
}

export default Rotas;