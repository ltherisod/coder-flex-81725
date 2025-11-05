import NavBarBS from './components/NavBarBS';
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';

function App() {
 
console.log('soy app')
  return (
    <>
      <NavBarBS/>
      <ItemListContainer mensaje={'Bienvenidos a mi App'}/>
      <ItemCount stock={12}/>
    </>
  )
}

export default App
