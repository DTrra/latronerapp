import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { db, updateStock } from "../../services/firebase";
import Swal from "sweetalert2";



const Cart = () => {
    const { cart, clear, removeItem, } = useContext(CartContext);

    const sendOrder = async (e) => {
        e.preventDefault();
        let order = {
            buyer: {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value,
            },
            prod: cart,
            total: cart.reduce((ac, prod) => (ac + (prod.price * prod.cantidad)), 0),
        };
        order.date = Timestamp.fromDate(new Date());
        const queryCollection = collection(db, "orders");
        console.log("order", order);
        try {
            const docRef = await addDoc(queryCollection, order);
            console.log(docRef.id)
            //Actualizar Stock
            cart.forEach((prod) => updateStock(prod.id, prod.cantidad))
            //Limpiar Carrito
            clear()
            //Limpiar formulario
            order.buyer.name = e.target.reset()
            order.buyer.phone = e.target.reset();
            order.buyer.email = e.target.reset();
            //Alerta pra mostrar nro. de orden de compra
            Swal.fire({
                title: "El repartidor ya tomo su pedido!",
                text: `Su compra se registro con código: ${docRef.id}`,
                icon: "success",
                confirmButtonText: "Aceptar",
            });


        } catch (error) {
            console.log("Error", error);
            Swal.fire(`Hubo un Error!`, "Inténtalo nuevamente", "error")
        }
    };


    return (
        <div className='container'>
            {cart.length > 0 ?
                <div>
                    <h4>Productos agregados:</h4>
                </div>
                :
                <div>
                    <img className="mx-auto d-block" src='../../repartidor-sin-pedido.jpg' width='350' alt='La Tronera' />
                    <h5 className="text-center">No se cargaron pedidos</h5>
                </div>
            }
            {cart.length > 0 && (
                <><div>
                    {cart.map((prod) => (
                        <div key={prod.id} className='card mb-3' style={{ maxWidht: '540 px' }}>
                            <div className='row g-0'>
                                <div className='col-md-2'>
                                    <img src={prod.img} className='imf-fluid rounded-start' width="200px" alt={prod.name} />
                                </div>
                                <div className='col-md-6'>
                                    <h6 className='card-title'>{prod.category} {prod.name}</h6>
                                    <p> Costo unitario $ {prod.price}</p>
                                    <p className='card-text'>Cantidad: {prod.cantidad}</p>
                                    <p className='card-text'>Precio total ${prod.price * prod.cantidad}</p>
                                </div>
                                <div className='col-md-2'>
                                    <button className='btn btn-danger' onClick={() => removeItem(prod.id)}>Eliminar pedido</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                    <hr />
                    <h3>{`Total del pedido: $ ${cart.reduce((acum, item) => acum + (item.price * item.cantidad), 0)}`}</h3>
                    <hr />
                    <button className='btn btn-danger' onClick={clear}>Vaciar todo el carrito</button>
                </>)}


            <div className="container card mt-2">
                <div className="d-flex">
                    <div className="card-body">
                        <form className="w-50 mx-auto" onSubmit={sendOrder}>
                            <legend className="mb-5">
                                Completar con tus datos para finalizar la compra
                            </legend>
                            <div className="mb-3 mt-3">
                                <label htmlFor="name" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Ingrese su nombre"
                                    required
                                />
                                <div className="valid-feedback">Campo válido!</div>
                                <div className="invalid-feedback">Campo Incorrecto!</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Teléfono
                                </label>
                                <input
                                    type="phone"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Ingrese su teléfono"
                                    required
                                />
                                <div className="valid-feedback">Campo válido!</div>
                                <div className="invalid-feedback">Campo Incorrecto!</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Ingrese su email"
                                    required
                                />
                                <div className="valid-feedback">Campo válido!</div>
                                <div className="invalid-feedback">Campo Incorrecto!</div>
                            </div>
                            <div className="text-center">
                                <div className="text-center h4">
                                    {`Productos agregados: ${cart.reduce(
                                        (ac, prod) => ac + prod.cantidad,
                                        0
                                    )}`}
                                </div>
                                <div className="text-center h4 mt-3">
                                    {`Valor Total de la compra: $ ${cart.reduce(
                                        (ac, prod) => ac + prod.price * prod.cantidad,
                                        0
                                    )}`}
                                </div>
                            </div>
                            <button className="btn btn-large btn-danger  mt-5" type="submit">
                                Hacer pedido
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;