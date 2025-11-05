import { useEffect, useState } from "react"
import { getProducts } from "../mock/Asyncmock"
import ItemList from "./ItemList"

const ItemListContainer = ({mensaje})=> {
    const[data, setData] = useState([])

    useEffect(()=>{
        //pedir datos
        getProducts()//retorna una promesa
        .then((res)=> setData(res))//tratar la promesa y guardarlo en un estado
        .catch((error)=> console.log(error))//atrapar el error
    },[])

    
    // const {mensaje}=props   
    console.log('soy itemlistcontainer', data)
     return(
        <div>
            <h1 className='text-success'>{mensaje}</h1>
            {/* {data.map((prod, index)=> <p key={index}>{prod.name}</p>)} */}
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer 