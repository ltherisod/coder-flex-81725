import { useEffect, useState } from "react"
import { getProducts } from "../mock/Asyncmock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"

const ItemListContainer = ({mensaje})=> {
    const[data, setData] = useState([])
    const [loading, setLoading]=useState(false)
    const {type}= useParams()

    useEffect(()=>{
        setLoading(true)
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
        .finally(()=> setLoading(false))

        //esta a la escucha del cambio de categoria
    },[type])


    //return anticipado
    if(loading){
        // return <p>Cargando productos...</p>
        return <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Spinner/>
        </div>
    }

     return(
        <div>
            <h1 className='text-success'>{mensaje} {type && <span style={{textTransform:'capitalize', color:'red'}}>{type}</span>}</h1>
            {/* <Input/> */}
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer 