import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct, getProducts } from '../mock/Asyncmock'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
 const [detalle, setDetalle]= useState({})
 const [cargando, setCargando] = useState(true)
  const [invalid, setInvalid] = useState(null)
//  const param = useParams()
//  console.log(param)
const {id}= useParams()
// console.log(id, 'id')

    useEffect(()=>{
      //1.crear una referencia
      const docRef= doc(db, "items", id)
      //2. traemos el doc
      getDoc(docRef)
      .then((res)=> {
        if(res.data()){
          setDetalle({id:res.id, ...res.data()})
        }else{
          setInvalid(true)
        }
      })
      .catch((error)=>console.log(error))
      .finally(()=> setCargando(false))
    },[])
 //si hago una funcion a parte
//  useEffect(()=>{
//     getOneProduct(id)
//     .then((res)=> setDetalle(res))
//     .catch((error)=> console.log(error))
//     .finally(()=> setCargando(false))
//  },[id])

 //reutilizando la funcion de ItemListContainer
//  useEffect(()=>{
//     getProducts()
//     .then((res)=> setDetalle(res.find((item)=> item.id === id)))
//     .catch((error)=> console.log(error))
//  },[id])
if(invalid){
  return(
    <div>
      <h1>El producto no existe! 😭</h1>
      <Link  className='btn btn-dark' to='/'>Volver a Home</Link>
    </div>
  )
}
  return (
    <>
    {cargando 
    ? <LoaderComponent text={'Cargando detalle de producto'}/>
    : <ItemDetail detalle={detalle}/>
    }
    </>
  )
}

export default ItemDetailContainer