import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { _id, toyName, picture, price, rating, description } = product;

    return (
        <div className='product-card'>
            <img src={picture} alt={toyName} />
            <div className='body' style={{ padding: '10px' }}>
                <div>
                    <h2 className='title'>{toyName}</h2>
                    <p style={style}>
                        <span>Price: ${price}</span>
                        <span>Rating: {rating}</span>
                    </p>
                    <p>{description?.slice(0, 100)}...</p>
                </div>
                <Link to={`/toys/${_id}`}><button className='btn-primary'>View Details</button></Link>
            </div>
        </div>
    );
};

const style = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '.8rem 0'
}

export default ProductCard;