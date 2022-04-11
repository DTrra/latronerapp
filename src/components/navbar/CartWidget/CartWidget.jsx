import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext }  from '../../CartContext/CartContext';


const CartWidget = () => {
    
    const {cart} = useContext(CartContext)

    return(
        <>
            <div className='container'>
                {cart.lenght!==0 &&
                <span style={{position: 'relative', top: '-15px', bottom: '5px', left: '70px', right: '20px', fontSize: '20px', backgroundColor: '#f4d975', borderRadius:'5px', padding: '10px', boxShadow: 'black',}}> 
                {cart.reduce((acum,item)=> acum+item.cantidad , 0)}</span>
                }
                <Link to='/Cart'><img src='./pizza-delivery-two.png' width='150' alt='Carrito' /></Link>
            </div>
        </>
    );
};
export default CartWidget;