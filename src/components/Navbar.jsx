import '../css/Navbar.css'
import CartWidget from "./CartWidget"
// import de imagen en src
import logoReact from '../assets/react.svg'
const Navbar = () => {
    const arrayList =[{name:'random'}]
    return(
        <nav className="nav-container">
            <a className='anchor-nav' href="">
                {/* si la imagen la tengo en public! */}
                <img src='../logo-shop.png' alt='logo' className='logo'/>
                {/* la imagen la tengo en src, se importa */}
                {/* <img src={logoReact} alt='logo' className='logo'/> */}
            </a>
            <a className='anchor-nav' href="">Nuevos</a>
            <a className='anchor-nav' href="">Mas vendidos</a>
            <a className='anchor-nav' href=""> Ofertas</a>
            <CartWidget counter={5} lata={arrayList}/>
        </nav>
    )
}

export default Navbar