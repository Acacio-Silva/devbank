import React, { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import { AuthContext } from '../../contexts/Auth/auth'
import { ModalContext } from '../../contexts/modalContext'
import api from '../../services/api'
import { Button, Container, ContainerForm, Input } from './styles'


export function NewAccountModal(){

    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [cpf, setCpf] = useState<string>()
    const [password, setPassword] = useState<string>()

    const {openIsModal, setOpenIsModal} = useContext(ModalContext)
    const {state} = useContext(AuthContext)

    function closeModal(){
        setOpenIsModal(false)
    }

    const obj = {
        name,
        email,
        cpf,
        password
    }

    async function abriConta(e:FormEvent) {
        e.preventDefault()

        const username = state.cpf as string;
        const password = state.senha as string;

        await api.post('accounts', obj, {
            auth:{
                username,
                password
            }
        }).then((res)=>{
            alert('Conta Aberta com Sucesso! Numero da Conta: '+ res.data.id)
        }).catch((err)=>{
            alert('ERRO: ' + err.response.data.error)
        })
    }

    return (
        
        <Modal isOpen={openIsModal} onRequestClose={closeModal}>
             <button type="button" 
                onClick={closeModal} 
                className="react-modal-close">[ X ]</button>
            <Container>                  
                <h2>Abertura de Conta</h2>
                <ContainerForm>
        
                    <Input type='text' placeholder='Digite o Nome do cliente' 
                        defaultValue={name} 
                        onChange={e=>setName(e.target.value)}
                        />
                    <Input type='text' placeholder='Digite o Email do cliente' 
                        defaultValue={email} 
                        onChange={e=>setEmail(e.target.value)}
                        />
                    <Input type='text' placeholder='Digite o CPF do cliente' 
                        defaultValue={cpf} 
                        onChange={e=>setCpf(e.target.value)}
                        />
                    <Input type='password' placeholder='Senha do cliente' 
                    defaultValue={password} 
                    onChange={e=>setPassword(e.target.value)}
                    />
        
          <Button onClick={abriConta}>Abrir Conta</Button>
      </ContainerForm>        
    </Container>
        </Modal>
    )
}