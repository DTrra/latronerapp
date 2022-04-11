import React from 'react';
import { Link } from 'react-router-dom';
import  CartWidget  from './CartWidget/CartWidget';
import './EstilosNav.css';


export const NavBar =()=> {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark background">
                <div className="container">
                    <Link to='/'><img src='./LogoLaTronera.png' width='150' alt='La Tronera' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto menu">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'category/Pizzas'}>Pizzas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'category/Empanadas'}>Empanadas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'category/Promociones'}>Promociones</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                    <Link className="nav-link" to='/Cart'>
                        <CartWidget />
                    </Link>
                        
                    </div>
                </div>
            </nav>
        </>
    );
};


export default NavBar;