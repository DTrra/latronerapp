import { Link } from 'react-router-dom';


const Item = ({ id, name, img, price, }) => {
    return (
        <>
            <div className="col-lg-4 mb-50 d-flex align-items-stretch">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">{name}</h5>
                        <h2>$ {price}</h2>
                    </div>
                    <div className="card-footer">
                        <Link to={`/items/${id}`} className="btn bt-danger">
                            <button className="btn btn-danger">Pedir +</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Item