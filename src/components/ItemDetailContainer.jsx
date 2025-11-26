import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct, getProducts } from '../mock/Asyncmock'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
 const [detalle, setDetalle]= useState({})
 const [cargando, setCargando] = useState(true)
//  const param = useParams()
//  console.log(param)
const {id}= useParams()
// console.log(id, 'id')
 //si hago una funcion a parte
 useEffect(()=>{
    getOneProduct(id)
    .then((res)=> setDetalle(res))
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))
 },[id])

 //reutilizando la funcion de ItemListContainer
//  useEffect(()=>{
//     getProducts()
//     .then((res)=> setDetalle(res.find((item)=> item.id === id)))
//     .catch((error)=> console.log(error))
//  },[id])

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