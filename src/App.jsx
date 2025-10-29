
import Navbar from './components/Navbar'
import NavBarBS from './components/NavBarBS';
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
      {/* <Navbar/> */}
      <NavBarBS/>
      <ItemListContainer mensaje={'Bienvenidos a mi App'}/>
    </>
  )
}

export default App
