import React from 'react';
import { Table } from './style';


function TableClients(props:any) {
  return (
        
<Table>
    <tr>
        <td>ID</td>
        <td>NOME</td>
        <td>CPF</td>
        <td>EMAIL</td>
        <td>AÇÕES</td>
    </tr>
    <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        <td>{props.data.cpf}</td>
        <td>{props.data.email}</td>
        <td><a href='#'>Editar</a></td>
    </tr>

</Table>

  );
}

export default TableClients;
