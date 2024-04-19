import React from 'react'
import { Headerl } from '../components/Headerl'
import { Presentation } from '../components/Presentation'
import { AbouteMe } from '../components/AbouteMe'
import { Value } from '../components/Value'
import './stylespage/initial.css'


export const Initial = () => {
  return (
    <main>
    <div className='bg-gray'>
        <Headerl />
        <Presentation />
    </div>
        <AbouteMe />
        <div className='bg-gray'>
          <Value />
        </div> 
    </main>
  )
}
