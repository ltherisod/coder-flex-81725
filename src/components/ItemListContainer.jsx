import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

import LoaderComponent from "./LoaderComponent"
import {  collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({mensaje})=> {
    const[data, setData] = useState([])
    const [loading, setLoading]=useState(false)
    const {type}= useParams()



    //FIREBASE

    useEffect(()=>{
        setLoading(true)
        //1.conectar a nuestra coleccion
        const prodCollection = type ? query(collection(db, "items"), where("category", "==", type)) :collection(db, "items" )
        //2.pedir documentos
        getDocs(prodCollection)
        .then((res)=>{ //tratamos la promesa
            console.log(res)
            console.log(res.docs)
            //limpiar y obtener datos
            const list = res.docs.map((doc)=>{

                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            // console.log(list)
            setData(list)
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    },[type])

   
     return(
        
        <>
            {
                loading 
                ? <LoaderComponent text={type ? `Cargando categoria ${type}...` : 'Cargando Productos...'}/>
                :<div>
            <h1 className='text-success'>{mensaje} {type && <span style={{textTransform:'capitalize', color:'red'}}>{type}</span>}</h1>

            <ItemList data={data}/>
        </div>
            }
        </>
        
        
    )
}
export default ItemListContainer 