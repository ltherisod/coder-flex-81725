import { useEffect } from "react"

//Esta es la funcion HOC
const withLogging = (WrappedCoponent)=>{
//Este es el nuevo componente que se crea
    const ComponentWithLogging =(props)=>{

            useEffect(()=>{
                console.log(`💡 ${WrappedCoponent.name} se montó 🤭`)
            },[])

            //mostramos el componente original, con todas sus props
            return <WrappedCoponent {...props}/>
    }
//Devolvemos el nuevo componente
    return ComponentWithLogging

}

export default withLogging