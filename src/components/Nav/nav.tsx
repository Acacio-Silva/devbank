import React from 'react';
import { Link} from 'react-router-dom';
import { Button, Container } from './styles'
function Nav() {
  
  function sair(){
    window.localStorage.clear();
  }
  return (
    <div>
        <Container>
            <Link to="/" className='navItem'>Home</Link>
            <Link to="/Clients" className='navItem'>Clientes</Link>
            <Link to="/Accounts" className='navItem'>Contas</Link>
            <Link to="/Transfers" className='navItem'>Transferencias</Link>
           <form>
           <Button onClick={sair}>Sair</Button>
           </form>
            
        </Container>
    </div>
  );
}

export default Nav;