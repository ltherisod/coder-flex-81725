import React, { useState } from 'react'

const Input = () => {
    const [name, setName]= useState('')
    const inputHanler = (e)=>{
        console.log('evento',e)
        console.log('evento target',e.target)
        console.log('value',e.target.value)
        setName(e.target.value)
    }
  return (
    <div>
        <h1>Input</h1>
        <input name='nombre' type='text' placeholder='Ingresa tu nombre' onChange={inputHanler}/>
        <p>{name}</p>
    </div>
  )
}

export default Input