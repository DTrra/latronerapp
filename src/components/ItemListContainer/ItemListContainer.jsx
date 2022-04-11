import React from 'react'
import { useEffect, useState } from 'react';
// import { getCategories } from '../Products/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let { category } = useParams();

    const getData = async () => {
        try {
            const itemsCollection = collection(db, "Items")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setItems(result)
            setIsLoading(false)
        } catch (error) {
            console.log('Error', error);
        }
    }

    const getDataCategory = async () => {
        try {
            const itemsCollection = collection(db, "Items")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setItems(result.filter(e => e.category === category))
            setIsLoading(false)
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        category ? getDataCategory() : getData()

    }, [category])

    console.log('items', items)

    return (
        <>
            {isLoading ? (
                <div className="container text-center">
                    <img src='../../cargandoPizza.gif' alt='Cargando...' />
                </div>
            ) : (
                <>

                    <div className="container mt-5 pt-5 pb-5">
                        <div className="row">
                            <ItemList productos={items} />
                        </div>
                    </div>
                </>
            )}
        </>
    );

};


export default ItemListContainer
