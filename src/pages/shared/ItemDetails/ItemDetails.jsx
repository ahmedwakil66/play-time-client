import { useEffect, useState } from 'react';
import './ItemDetails.css'
import Spinner from '../../../utility/Spinner';
import { toast } from 'react-hot-toast';
import { CurrencyDollarIcon, ShopIcon, StarFillIcon, StarHalfFill } from '../../../utility/Icons';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../utility/hooks/useTitle';

const ItemDetails = ({ productId, noSection }) => { 
    const [isLoading, setIsLoading] = useState(true);
    const [itemDetails, setItemDetails] = useState({})
    const loaderData = useLoaderData();

    useEffect(() => {
        if (loaderData) {
            setItemDetails(loaderData);
            setIsLoading(false);
        } else {
            fetch(`https://play-time-ca.onrender.com/animal-toys?id=${productId}`)
                .then(response => response.json())
                .then(data => {
                    setItemDetails(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    toast.error(error.message);
                })
        }
    }, [productId, loaderData])

    const { _id, toyName, sellerName, sellerEmail, picture, price, rating, category, availableQuantity, description, tags } = itemDetails;

    useTitle(`${itemDetails?.toyName} Details`)

    if (isLoading) { return <Spinner /> }

    return (
        <>
            {!noSection && <h1 className='title-sec section'>Details for {toyName}</h1>}

            <div className={`itemDetails-container ${!noSection && 'my-container'}`}>
                <div className='image-div'>
                    <img src={picture} alt="" />
                </div>

                <div>

                    <h2 className='item-name'>
                        {toyName}
                    </h2>

                    <p className='description'>
                        {description}
                    </p>

                    <h2 className='item-color'>
                        Select Color
                    </h2>

                    <img
                        className='color-img' src={picture} alt=""
                    />

                    <p>
                        <span style={{ display: 'inline-block' }}>
                            <ShopIcon />
                        </span>&nbsp; {sellerName}

                    </p>

                    <p>
                        <span style={{ display: 'inline-block' }}>
                            <CurrencyDollarIcon />
                        </span>
                        &nbsp; Price: {price}
                    </p>

                    <p>
                        <span style={{ display: 'inline-flex' }}>
                            <StarFillIcon />
                            <StarFillIcon />
                            <StarFillIcon />
                            <StarFillIcon />
                            <StarHalfFill />
                        </span>
                        &nbsp; {rating}
                    </p>

                    <p>
                        Quantity: {availableQuantity}
                    </p>

                    <button>BYE NOW</button>

                </div>
            </div>
        </>
    );
};

export default ItemDetails;