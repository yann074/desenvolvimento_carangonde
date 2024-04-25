import React from 'react'
import { Peoplesinsc } from './Peoplesjson/Peoplesinsc'
import './Peoples.css'

export const Peoples = () => {
  return (
   <>
   <table>
      <thead className='grid-p'>
        <tr className='container-table' >
          <th>NOME</th>
          <th>CURSOS</th>
          <th>TELEFONE</th>
          <th>EMAIL</th>
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
