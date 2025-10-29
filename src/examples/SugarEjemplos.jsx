//1.   Spread Operator (...)

//En array

//Antes
const numeros = [1,2,3]
const numerosNuevos = numeros.concat([4,5,6]) //[1,2,3,4,5,6]

//Spread

const numerosSpread = [...numeros, 4,5,6,7,8,9] //[1,2,3,4,5,6,7,8]

//OBJETOS
const persona = { 
    nombre:'Laura',
    mail:'lala@lala.com'
}
const personaActualizada = Object.assign({}, persona, {ciudad: "Comodoro Rivadavia"})

const personaSpread = {...persona, ciudad:"Comodoro Rivadavia"}



//2. Destructing

//Array

const colores = ['rojo', 'azul', 'violeta']

const primerColor = colores[0] //rojo
const segundoColor = colores[1] //azul

//Sugar

const [primero, segundo]= colores //rojo azul


//OBjetos

const alumno = {
    nombre :'Juan',
    edad:30
}

const nombreAlumno = alumno.nombre


const {nombre, edad} =alumno



//3. Operador ternario

let mensaje;
if(edad >= 18){
    mensaje = 'Sos mayor de edad'
}else{
    mensaje = 'Sos menor de edad'
}

const mensajeSugar = edad >= 18 ? 'Sos mayor' : 'Sos menor'


//4. Arrow Function

function sumar ( a,b){
    return a + b
}

const sumarArrow = (a, b) => {
    //logica antes del return 
    const total = a + b
    return total
} 

const superArrow = (a , b) => a + b