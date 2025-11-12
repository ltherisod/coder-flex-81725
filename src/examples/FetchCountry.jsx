import {useEffect} from 'react'

const FetchCountry = () => {

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/independent?status=true') //pedir los datos
        .then((res)=> res.json()) //traducir
        .then((data)=> {
            const list = data.map((pais)=> pais.flag)
            console.log(list)
        })//guardo la data
        .catch((error)=> console.log(error))//atrapamos el error
    },[])
  return (
    <div>FetchCountry</div>
  )
}

export default FetchCountry