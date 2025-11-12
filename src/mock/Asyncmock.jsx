const products = [
    {
       id:'01',
       name:'Random 1',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
       stock:20,
       price:25000,
       category:'nuevos',
       img:'https://picsum.photos/200'
    },
    {
       id:'02',
       name:'Random 2',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
       stock:15,
       price:55000,
       category:'mas vendidos',
       img:'../img/boba-fett.png'
    },
     {
       id:'03',
       name:'Random 3',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
       stock:12,
       price:75000,
       category:'mas vendidos',
       img:'https://i.postimg.cc/bNtTQhG1/darth-vader.png'
    },
    {
       id:'04',
       name:'Random 4',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
       stock:8,
       price:45000,
       category:'ofertas',
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&'
    },
]

let error = false
export const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error intente mas tarde')
            }else{

                resolve(products)
            }
        },3000)
    })
}