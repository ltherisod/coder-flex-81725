import { useEffect, useState } from "react"
import { getProducts } from "../mock/Asyncmock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({mensaje})=> {
    const[data, setData] = useState([])
    const {type}= useParams()
    console.log(type)

    useEffect(()=>{
        //pedir datos
        getProducts()//retorna una promesa
        .then((res)=> {
            if(type){
                //filtrar
                 setData(res.filter((prod)=> prod.category === type))
            }else{
                //devuelvo todo
                setData(res)
            }
        })//tratar la promesa y guardarlo en un estado
        .catch((error)=> console.log(error))//atrapar el error

        //esta a la escucha del cambio de categoria
    },[type])

    

     return(
        <div>
            <h1 className='text-success'>{mensaje} {type && <span style={{textTransform:'capitalize', color:'red'}}>{type}</span>}</h1>
            
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer 