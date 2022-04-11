import React, { useState, useContext } from 'react';
import Counter from '../Counter/ItemCount';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../Counter/ItemCount';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail = ({ productos }) => {
    const [qty, setQty] = useState(0);
    const { addToCart } = useContext(CartContext);
    const onAdd = (cantidad) => {
        setQty(cantidad);
        addToCart(productos, cantidad);
    };

    return (
    <div className="container">
        <div className='row justify-content-center'>
        <Card border="danger shadow " style={{ width: '28rem', marginTop: '30px', marginBottom: '40px' }}>
        <Card.Header className='shadow text-center'><img src={productos?.img} width="400px" alt='imagen'/></Card.Header>
        <Card.Body>
            <Card.Title>
                {productos?.name}
            </Card.Title>
                <Card.Text>
                    Categoria: {productos?.category}
                </Card.Text>
                <Card.Text >
                    Descripcion: {productos?.description}
                </Card.Text>
                <Card.Title >
                    Precio: ${productos?.price}
                </Card.Title>
                {qty === 0 ? (
                    <Counter stock={productos?.stock} onAdd={onAdd} className='justify-content-center' />
                ) : (
                    <>
                    <p>Enviaste <strong>{qty} {productos?.category} {productos?.name}</strong> al repartidor, ¿que deseas hacer? </p>
                        <Link to="/cart" className="d-grid gap-2">
                            <Button className='btnBuy' variant="danger" size="lg"> Ir con el repartidor </Button>
                        </Link>
                        <br/>
                        <Link to="/" className="d-grid gap-2">
                            <Button className='btnBuy' variant="secondary" size="lg"> Seguir Comprando </Button>
                        </Link>
                    </>
                )}
                
        </Card.Body>
        </Card>
        </div>
    </div> 
    )
}
export default ItemDetail;