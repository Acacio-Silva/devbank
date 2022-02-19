import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/auth';
import { ModalContext } from '../../contexts/modalContext';
import api from '../../services/api';
import { User } from '../Clients';
import {Button, Container, ContainerStatment, ContentAccount, ContentSearch, ContentStatement, Input} from './styles'


type Statement =[
  value:string,
  moment:string,
  operationType:string
]


type Conta={
  id:string,
  saldo:number,
  moment:string,
  client:User
  statement:Statement
}


function Accounts() {
  const [id, setId] = useState<string>()
  const [idTransfers, setIdTransfers] = useState<string>()
  const [conta, setConta] = useState<Conta>()
  const [contaVisible, setContaVisible] = useState(false)

  const [valorSaque, setValorSaque] = useState<string>()
  const [valorDeposito, setValorDeposito] = useState<string>()

  const {state} =useContext(AuthContext)
  const {openIsModal, setOpenIsModal} = useContext(ModalContext)


  const objSaque = {
    value:valorSaque
  }
  const objDeposito = {
    value:valorDeposito
  }

  function abrirModal(e:FormEvent){
    e.preventDefault()
    setOpenIsModal(true);
  }

  
  
  async function buscarPorId(e:FormEvent){
    e.preventDefault()
    
    let username = state.cpf as string;
    let password = state.senha as string;
    
    await api.get(`accounts/${id}`,{
      auth:{
        username:username,
        password:password
      }
    }).then((res)=>{
      setConta(res.data)
      setContaVisible(true)
      setIdTransfers(res.data.id)
    }).catch((err)=>{
      setContaVisible(false)      
      alert(err.response.data.error)
    })
  }

  async function saque(e:FormEvent) {
    e.preventDefault();
    const username = state.cpf as string;
    const password = state.senha as string;
   
    await api.put(`accounts/debit/${idTransfers}`,objSaque, {
      auth:{
        username,
        password
      }
    }).then((res)=>{
      alert('saque efetuado com sucesso')
      setValorSaque('')
    }).catch((err)=>{
      alert(err.response.data.error)
    })
    
  }

  async function deposit(e:FormEvent) {
    e.preventDefault();
    const username = state.cpf as string;
    const password = state.senha as string;
   
    await api.put(`accounts/credit/${idTransfers}`,objDeposito, {
      auth:{
        username,
        password
      }
    }).then((res)=>{
      alert('deposito efetuado com sucesso!')
    }).catch((err)=>{
      alert(err.response.data.error)
      
    })

  }

  async function deletar(e:FormEvent) {
    e.preventDefault()

    const username = state.cpf as string;
    const password = state.senha as string;
   
    await api.delete(`accounts/${idTransfers}`,{
      auth:{
        username,
        password
      }
    }).then((res)=>{
      alert('Conta Fechada com sucesso!')
    }).catch((err)=>{
      alert(err.response.data.error)
    })
    
  }

  return (
    <Container>
      <ContentSearch>
        <Input placeholder='Digite o Número da conta' onChange={(e)=>{setId(e.target.value)}}/>
        <Button onClick={buscarPorId}>Buscar Conta</Button>
        <form>
        <Button onClick={abrirModal}>Abrir Conta</Button> 
        </form>
      </ContentSearch>

      {contaVisible ? 
      <>
         <ContentAccount>
            <p>Numero da conta:  {conta?.id}</p>
            <p>Saldo: {conta?.saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <p>Data de Abertura: {conta?.moment}</p>
            <p>Cliente: {conta?.client.name}</p>
            <p>Email do Cliente: {conta?.client.email}</p>
              <form>
              <Input placeholder='Digite o Valor do deposito' 
              onChange={e=>{setValorDeposito(e.target.value)}}
              
              />
              <Button onClick={deposit}>Fazer Deposito</Button>
              </form>
              <form>
              <Input placeholder='Digite o Valor do Saque' onChange={e=>setValorSaque(e.target.value)} />
              <Button onClick={saque}>Fazer Saque</Button>
              </form>
              <Button onClick={deletar}>Fechar Conta</Button>  
           
           
           
          
        </ContentAccount>
      
      <ContainerStatment>
      
      <h3>Historico de Transferência</h3>
     {
        conta?.statement.map(item=>{
          return(
            <ContentStatement>
            <span><p>ID:</p> {Object.values(item)[0]}</span>                   
            <span><p>VALOR:</p> {parseFloat(Object.values(item)[1]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>                   
            <span><p>DATA:</p> {Object.values(item)[2]}</span>                   
            <span><p>TIPO DE OPERAÇÃO:</p> {Object.values(item)[3]}</span>  
            <p>----------------------------------------</p>                              
            </ContentStatement>
          )
        })              
     }
      </ContainerStatment>
      </>
          :
          <></>

      }
      
    </Container>
  );
}

export default Accounts;
