import React, { useContext, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav/nav';
import Login from './pages/Login';
import Rotas from './Rotas';
import { GlobalStyle } from './styles/global';
import AuthProvider, { AuthContext } from './contexts/Auth/auth';
import { NewAccountModal } from './components/NewAccountModal/NewAccountModal';
import ModalProvider, { ModalContext } from './contexts/modalContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

function App() {
  


  const {state} = useContext(AuthContext);

  return (
    <AuthProvider>
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
    <ModalProvider>
    { state.cpf ? <> <Nav/><Rotas/></>  :  <Login/>  }     
      
    <NewAccountModal />
    </ModalProvider>  
      <Footer/>

    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
