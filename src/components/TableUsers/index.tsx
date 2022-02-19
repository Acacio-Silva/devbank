import React from 'react';
import { Table } from './styles';


function TableUsers() {
  return (
        
<Table>
    <tr>
        <td>ID</td>
        <td>NOME</td>
        <td>CPF</td>
        <td>EMAIL</td>
        <td>PERMISSÕES</td>
        <td>AÇÕES</td>
    </tr>
    <tr>
        <td>1</td>
        <td>ADMIN 01</td>
        <td>123.123.123-12</td>
        <td>ADMIN@gmail.com</td>
        <td>USER, ADMIN</td>
        <td>Excluir | Editar</td>
    </tr>

</Table>

  );
}

export default TableUsers;
