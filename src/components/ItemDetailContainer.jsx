import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct, getProducts } from '../mock/Asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
 const [detalle, setDetalle]= useState({})
//  const param = useParams()
//  console.log(param)
const {id}= useParams()
console.log(id, 'id')
 //si hago una funcion a parte
 useEffect(()=>{
    getOneProduct(id)
    .then((res)=> setDetalle(res))
    .catch((error)=> console.log(error))
 },[id])

 //reutilizando la funcion de ItemListContainer
//  useEffect(()=>{
//     getProducts()
//     .then((res)=> setDetalle(res.find((item)=> item.id === id)))
//     .catch((error)=> console.log(error))
//  },[id])

  return (
    <ItemDetail detalle={detalle}/>
  )
}

export default ItemDetailContainer