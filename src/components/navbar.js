import React from 'react';
import './css/navbar.css';
import { Cart } from './CartWidget';

export const Navbar = () => {
    return (
    <header>
        <h1>Fragance Style</h1>
        <nav id="menu_principal">
            <ul>
                <li>Catálogo</li>
                <li>Contacto</li>
                <li><i type="button"  style={{ fontWeight: 570 }} className="fas fa-shopping-cart" id="carrito"></i></li>
                <li><Cart></Cart></li>
                <li> <button type="button" id="cierreSesion" className="btn btn-outline-light">Cerrar Sesión</button></li>
            </ul>
        </nav>
   </header>
   );
}
