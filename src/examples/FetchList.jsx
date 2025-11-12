import React from 'react'
import FetchCard from './FetchCard'

const FetchList = ({data}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {data.map((personaje)=> <FetchCard key={personaje.id} personaje={personaje}/>)}
    </div>
  )
}

export default FetchList