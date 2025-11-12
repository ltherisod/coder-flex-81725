import NavBarBS from './components/NavBarBS';
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import FetchCountry from './examples/FetchCountry';
import FetchApi from './examples/FetchApi';
import withLogging from './hoc/withLogging';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 const ItemListContainerConHoc = withLogging(ItemListContainer)
 const FetchConHoc= withLogging(FetchCountry)
console.log('soy app')
  return (
    <>
      <NavBarBS/>
      {/* <FetchApi/> */}
      {/* <FetchCountry/> */}
      {/* <FetchConHoc/> */}
      {/* <ItemListContainerConHoc mensaje={'Bienvenidos a mi App'}/> */}
      {/* <ItemCount stock={12}/> */}
      {/* <ItemListContainer mensaje={'Bienvenidos a mi App'}/> */}
      <ItemDetailContainer/>
    </>
  )
}

export default App
