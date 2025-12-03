import { useEffect, useState } from "react"
import { getProducts, products } from "../mock/Asyncmock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

import LoaderComponent from "./LoaderComponent"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
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

    //PROMISE
    // useEffect(()=>{
    //     setLoading(true)
    //     //pedir datos
    //     getProducts()//retorna una promesa
    //     .then((res)=> {
    //         if(type){
    //             //filtrar
    //              setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             //devuelvo todo
    //             setData(res)
    //         }
    //     })//tratar la promesa y guardarlo en un estado
    //     .catch((error)=> console.log(error))//atrapar el error
    //     .finally(()=> setLoading(false))

    //     //esta a la escucha del cambio de categoria
    // },[type])


    //return anticipado
    // if(loading){
    //     // return <p>Cargando productos...</p>
    //     return <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
    //         <Spinner/>
    //         <p>Cargando productos...</p>
    //     </div>
    // }

        //SE BORRA!!!!!
        // const subirData = ()=>{
        //     console.log('Subiendo data...')
        //     const collSubir= collection(db, 'items')
        //     products.map((prod)=> addDoc(collSubir, prod))
        // }
     return(
        
        <>
            {
                loading 
                ? <LoaderComponent text={type ? `Cargando categoria ${type}...` : 'Cargando Productos...'}/>
                :<div>
                    {/* DESPUES SE BORRA!!!!!! */}
                    {/* <button onClick={subirData}>SUBIR DATA</button> */}
            <h1 className='text-success'>{mensaje} {type && <span style={{textTransform:'capitalize', color:'red'}}>{type}</span>}</h1>
            {/* <Input/> */}
            <ItemList data={data}/>
        </div>
            }
        </>
        
        
    )
}
export default ItemListContainer 