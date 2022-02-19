import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/auth';
import api from '../../services/api';
import { Button, Container, ContainerForm, Input, Title } from './styles';

function Login() {

  const [cpf, setCpf] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  const obj = {
    cpf:cpf,
    password: senha
  }
const navigation = useNavigate();
const {setState} = useContext(AuthContext);
async function logar(e:FormEvent){  
  e.preventDefault()
  
await api.post('/user/login', obj).then((res)=>{
    
  window.localStorage.setItem('cpf', cpf)
  window.localStorage.setItem('senha', senha)
  setState({cpf:cpf, senha:senha})
  document.location.reload();
  navigation('/')

}).catch((err)=>{
  window.localStorage.clear()
  alert(err.response.data.error)
})

}


  return (
    <Container>
        <p>Para Acessar como admin use o CPF: 413.880.280-00 e Senha: senha</p>
        <p>Para Acessar como user use o CPF: 380.299.540-69 e Senha: senha</p>
        <ContainerForm>
        <Title>Login</Title>
            <Input placeholder='Digite seu CPF' onChange={(e)=>setCpf(e.target.value)}/>
            <Input type='password' placeholder='Digite sua Senha' onChange={(e)=>setSenha(e.target.value)}/>
            <Button onClick={logar}>Entrar</Button>
        </ContainerForm>
    </Container>
  );
}

export default Login;
