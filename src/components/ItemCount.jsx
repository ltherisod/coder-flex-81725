import {useState, useEffect} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount]= useState(1)
    //ejemplo de useEffect
    const [compra, setCompra]= useState(false)

        const sumar = ()=> {
            if(count < stock){
                setCount(count + 1)
            }
        }

        const restar = ()=> {
            if(count > 0){

                setCount( count - 1)
            }
        }

        //se ejecuta siempre (no se utiliza casi nunca)
        useEffect(()=>{
            console.log('me ejecuto SIEMPRE')
        })

    //e ejecuta una sola vez cuando se monta el componete
    useEffect(()=>{
        console.log('Me ejecuto cuando se monta el componente')
    },[])

    //se ejecuta cuando monta el componente y siempre que lo que escuche cambie
       useEffect(()=>{
        console.log('Me ejecuto cuando se monta el componente y siempre que compra CAMBIE', compra)
    },[compra])



console.log('soy ItemCount y me renderizo')
  return (
    <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success'onClick={sumar}>+</button>
        <button className='btn btn-primary' onClick={()=>setCompra(!compra)}>Comprar</button>
    </div>
  )
}

export default ItemCount