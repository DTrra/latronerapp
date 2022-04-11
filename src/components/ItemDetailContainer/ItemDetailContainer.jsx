import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
//import { getProduct } from '../Products/products';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../../services/firebase';

const ItemDetailContainer = () => {
    const [selectedItem, setSelectedItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    const getSelected = async () => {
        try {
            const document = doc(db, "Items", id);
            const response = await getDoc(document);
            const result = { id: response.id, ...response.data() }
            setSelectedItem(result);
            setIsLoading(false);
        } catch (error) {
            console.log("Error", error);
        }
    }
    
    useEffect(() => {
        getSelected()
    }, [id])

    return (
        <>
            {isLoading ? (
                <div className="container text-center">
                <img src='../../cargandoPizza.gif' alt='Cargando...' />
            </div>
            ) : (
                <>
                    <div className="container mt-5">
                        <div className="row justify-content-center mt-5">
                            <ItemDetail productos={selectedItem} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ItemDetailContainer