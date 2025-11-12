import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct, getProducts } from '../mock/Asyncmock'

const ItemDetailContainer = () => {
 const [detalle, setDetalle]= useState({})
 //si hago una funcion a parte
 useEffect(()=>{
    getOneProduct('03')
    .then((res)=> setDetalle(res))
    .catch((error)=> console.log(error))
 },[])

 //reutilizando la funcion de ItemListContainer
//  useEffect(()=>{
//     getProducts()
//     .then((res)=> setDetalle(res.find((item)=> item.id === '03')))
//     .catch((error)=> console.log(error))
//  },[])

  return (
    <ItemDetail detalle={detalle}/>
  )
}

export default ItemDetailContainer