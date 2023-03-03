import { Link, useLocation } from "@remix-run/react"
import imagen from '../../public/img/carrito.png'

function Navegacion() {
    const { pathname } = useLocation()

    return (
        <nav className="navegacion">
            <Link to='/' className={ pathname === '/' ? 'active' : undefined } > Inicio </Link>
            <Link to='/nosotros' className={ pathname === '/nosotros' ? 'active' : undefined } > Nosotros </Link>
            <Link to='/blog' className={ pathname === '/blog' ? 'active' : undefined } > Blog </Link>
            <Link to='/guitarras' className={ pathname === '/guitarras' ? 'active' : undefined } > Tienda </Link>
            <Link to='/carrito'> <img src={imagen} alt="imagen carrito" /> </Link>
        </nav>
    )
}

export default Navegacion