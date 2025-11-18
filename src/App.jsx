import NavBarBS from './components/NavBarBS';
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';


function App() {
 
  return (
    <BrowserRouter>
      <NavBarBS/>
      <Routes>
        <Route path='/' element={ <ItemListContainer mensaje={'Bienvenidos a mi App'}/>}/>
        <Route path='/category/:type' element={ <ItemListContainer mensaje={'Estas en la categoría: '}/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
