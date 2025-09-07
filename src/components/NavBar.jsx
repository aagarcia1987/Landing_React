import './navbar.css'
import CartWidget from './CartWidget'

export default function NavBar(){
    return(
            <div className='navbar'>
                <span className='nav-left'>
                    <img className="logo" src="./src/assets/logoriver.png" alt="River e-Shop" />
                </span>
                <nav className='nav-center'>
                <ul>
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">Remeras</a></li>
                    <li><a href="#">Shorts</a></li>
                    <li><a href="#">Pantalones</a></li>
                    <li><a href="#">Buzos</a></li>
                    <li><a href="#">Accesorios</a></li>
                </ul>
                </nav>
                <span className='nav-right'>
                    <CartWidget/>
                </span>
            </div>
        
    )
}