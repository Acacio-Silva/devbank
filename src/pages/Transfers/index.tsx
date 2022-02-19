import React, { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/auth';
import api from '../../services/api';
import { Button, Container ,ContainerForm, Input} from './styles';
function Transfers() {

  const [idConta, setIdConta] = useState<string>();
  const [valor, setValor] = useState<string>();
  const [contaDestino, setContaDestino] =useState<string>();

  const {state} = useContext(AuthContext)

  

async function transferir(e:FormEvent) {
  e.preventDefault()

  const obj = {
    number:contaDestino,
    value:valor
  }  

  const username = state.cpf as string
  const password = state.senha as string

  await api.put(`accounts/transfer/${idConta}`, obj, {
    auth:{
      username,
      password
    }
  }).then((res)=>{
    alert('Transferencia Realizada com Sucesso!')
  }).catch((err)=>{
    alert(err.response.data.error)
  })
  
}


  return (
    <Container>
      
      <ContainerForm>
        <Input placeholder='Digite Número da conta' onChange={e=>{setIdConta(e.target.value)}} required/>
        <Input placeholder='Digite Valor da Transferencia' onChange={e=>{setValor(e.target.value)}} required />
        <Input placeholder='Digite Número da conta de destino' onChange={e=>{setContaDestino(e.target.value)}} required/>
        <Button onClick={transferir}>Transferir</Button>
      </ContainerForm>
        
    </Container>
  );
}

export default Transfers;
