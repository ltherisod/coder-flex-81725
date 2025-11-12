import {useEffect, useState} from 'react'
import FetchList from './FetchList'

const FetchApi = () => {
    const [data, setData]= useState([])
    //THENYCATCH
    // useEffect(()=>{
    //     //pedir datos
    //     fetch('https://rickandmortyapi.com/api/character')
    //     //traducir
    //     .then((res)=> res.json())
    //     .then((response)=> setData(response.results))//guardar la respuesta
    //     .catch((error)=> console.log(error))
    // },[])


    //TRY/CATCH
    useEffect(()=>{
        const getPersonajes = async()=>{
            try {
                const res = await fetch('https://rickandmortyapi.com/api/character')
                const response = await res.json()
                 setData(response.results)
                // if(response.results.length >0){

                //     setData(response.results)
                // }else{
                //     throw new Error('no tiene data')
                // }
            } catch (error) {
                console.log(error)
            }
        }
        getPersonajes()
    },[])

    console.log(data, 'data')
  return (
    <div>
        <FetchList data={data}/>
        {/* version sin separacion de resposabilidades, NO ES BUENA PRACTICA */}
        {/* <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
            {data.map((personaje)=>(
                <div key={personaje.id} className="card" style={{width: '18rem'}}>
        <img src={personaje.image} className="card-img-top" alt={personaje.name}/>
    <div className="card-body">
        <h5 className="card-title">{personaje.name}</h5>
        <p className="card-text">{personaje.status}</p>
        
    </div>
    </div>
            ) )}
        </div> */}
    </div>
  )
}

export default FetchApi