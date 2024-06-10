import React, { useEffect, useState } from 'react'
import '../Peoplesjson/Peoples.css'

export const Peoplesinsc = () => {
  const [data, setData] = useState([]);


    useEffect(()=>{
      //fetch('http://localhost:5173/src/pages/adm/Peoplesjson/peoples.json')
      fetch("http://localhost/backend/public/adm.php")
      .then(response => {
        console.log(response.data);
      })
      .then(data => {
        if (data.message === 'Dados recebidos com sucesso') {
          setData(data.data);
        } else {
          console.error('Nenhum usuário encontrado');
        }
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <>
   <section>
      {data.length > 0 ? (
        <table className='container-people'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className='grid-p'>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.cpf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum usuário encontrado</p>
      )}
    </section>
    </>
  )
}
