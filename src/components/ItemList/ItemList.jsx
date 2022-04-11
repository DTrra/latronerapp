import Item from '../Item/Item';
import './ItemList.css';


const ItemList = ({ productos }) => {
    return (
        <>

            {productos.map((producto) => (<Item {...producto} key={producto.id} />))}

        </>

    )
}
export default ItemList; 