import React, { useState } from 'react';
import './ItemCount.css';

const Counter = ({ stock, onAdd }) => {
    const [number, setNumber] = useState(0);

    const add = () => {
        number < stock && setNumber(number + 1);
    };

    const substract = () => {
        number > 0 && setNumber(number - 1);
    };

    return (
        <div className="container-buton">
            <div className="container-add-substract">
                <button onClick={substract}>-</button>
                <p>{number}</p>
                <button onClick={add}>+</button>
            </div>
            <div>
                <button
                    disabled={number === 0}
                    className={number === 0 ? 'disabled' : 'add'}
                    onClick={() => onAdd(number)}
                > Enviar al Repartidor
                </button>
            </div>
        </div>
    );
};


export default Counter;