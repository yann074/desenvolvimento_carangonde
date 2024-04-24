import React, { useEffect, useState } from 'react'

export const Peoplesinsc = () => {
  const [data, setData] = useState([]);


    useEffect(()=>{
      fetch('http://localhost:5173/src/pages/adm/Peoplesjson/peoples.json')
        .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
    }, [])

  return (
    <>
    <section>
        <table>
          {data.map(item=>{
            const {name, cursos, tell, email, cpf} = item
            return(
              <tr>
                <th>{name}</th>
                <th>{cursos}</th>
                <th>{tell}</th>
                <th>{email}</th>
                <th>{cpf}</th>
              </tr>
            )
          })}
        
        </table>
    </section>
    </>
  )
}
