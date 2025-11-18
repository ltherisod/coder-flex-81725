import '../css/Navbar.css'
import CartWidget from "./CartWidget"
// import de imagen en src
import logoReact from '../assets/react.svg'
import { NavLink} from 'react-router-dom'
const Navbar = () => {
    const arrayList =[{name:'random'}]
    return(
        <nav className="nav-container">
            <NavLink className='anchor-nav' to="/">
                {/* si la imagen la tengo en public! */}
                <img src='../logo-shop.png' alt='logo' className='logo'/>
                {/* la imagen la tengo en src, se importa */}
                {/* <img src={logoReact} alt='logo' className='logo'/> */}
            </NavLink>
            <NavLink className='anchor-nav' to="/category/nuevos">Nuevos</NavLink>
            <NavLink className='anchor-nav' to="/category/mas vendidos">Mas vendidos</NavLink>
            <NavLink className='anchor-nav' to="/category/ofertas"> Ofertas</NavLink>
            <CartWidget counter={5} lata={arrayList}/>
        </nav>
    )
}

export default Navbar