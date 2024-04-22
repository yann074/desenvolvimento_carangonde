import React from 'react'
import { Peoplesinsc } from './Peoplesinsc'

export const Peoples = () => {
  return (
   <>
   <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cursos</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>CPF</th>
        </tr>
      </thead>
      <tr>
        <Peoplesinsc />
      </tr>
   </table>
   </>
  )
}
