import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/auth';
import api from '../../services/api';
import {Button, Container, ContainerForm, ContentSearch, Input} from './styles'

export type User={
  id:number,
  name:string,
  email:string,
  cpf:string,
  password:string
}

function Clients() {

  const {state} = useContext(AuthContext)

  const [client, setClient] = useState<User>()

  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [cpf, setCpf] = useState<string>()
  const [senha, setSenha] = useState<string>()
  const [idConta, setidConta] = useState<string>()
  const [id, setId] = useState<string>()
  
  const [clientVisible, setClientVisible] = useState(false)

  async function buscarContaPorId(e:any){
    e.preventDefault();

    let username = state.cpf as string;
    let password = state.senha as string;

   await api.get(`clients/${idConta}`,{
      auth:{
        username:username,
        password:password
      }
    }).then((res)=>{
      setClient(res.data) 
    
      setClientVisible(true)
    }).catch((err)=>{
      alert(err.response.data.error)
      setClientVisible(false)
    })
  }

  async function editarCliente(e:any){
    e.preventDefault();

    const obj = {
      name:name,
      email:email,
      cpf:cpf,
      password:senha
    }

    if(obj.name === undefined){
      obj.name = client?.name
    }
    if(obj.cpf === undefined){
      obj.cpf = client?.cpf
    }
    if(obj.email === undefined){
      obj.email = client?.email
    }

    const username = state.cpf as string;
    const password = state.senha as string;

    await api.put(`clients/${client?.id}`, obj, {
      auth:{
        username: username,
        password: password
      }
    }).then((res)=>{
      alert('Cliente Alterado com Sucesso!')
      
    }).catch((err)=>{
      alert(err.response.data)
      //console.log(err)
    })
  }
  

  return (
    <Container>  
        
        <ContentSearch>
        <Input placeholder='Digite o CODIGO do cliente' onChange={(e)=>setidConta(e.target.value)}/> 
        <Button onClick={buscarContaPorId}>Buscar</Button>
        </ContentSearch>
        
        <ContainerForm>
        
          <Input type='text' placeholder='ID do cliente' 
            value={client?.id} onChange={e=>setId(e.target.value)}/>
          <Input type='text' placeholder='Nome do cliente' 
            defaultValue={client?.name} onChange={e=>setName(e.target.value)}/>
          <Input type='text' placeholder='Email do cliente' 
            defaultValue={client?.email} onChange={e=>setEmail(e.target.value)}/>
          <Input type='text' placeholder='CPF do cliente' 
            defaultValue={client?.cpf} onChange={e=>setCpf(e.target.value)}/>
          <Input type='password' placeholder='Senha do cliente' 
             onChange={e=>setSenha(e.target.value)}/>
        
          <Button onClick={editarCliente}>Atualizar Cliente</Button>
          
            
      </ContainerForm>
      
        

        
    </Container>
  );
}

export default Clients;
