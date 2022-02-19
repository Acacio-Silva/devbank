import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/auth';
import {Container, TextMain} from './styles'



function Header() {

  const {state} = useContext(AuthContext);

  return (
    <div>
        <Container>
            <TextMain>
                DEVBANK
            </TextMain>
        </Container>
    </div>
  );
}

export default Header;