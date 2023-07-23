import './Gallery.css';
import Modal from '../../../utility/Modal';
import ItemDetails from '../../shared/ItemDetails/ItemDetails';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Spinner from '../../../utility/Spinner';
import PrivateRoute from '../../../routes/PrivateRoute';

const Gallery = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [imageData, setImageData] = useState([]);
    useEffect(() => {
        fetch("https://play-time-ca.onrender.com/animal-toys/gallery")
            .then(response => response.json())
            .then(data => {
                setImageData(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }, [])


    if (isLoading) { return <Spinner /> }

    return (
        <div className='gallery-wrapper-wrapper'>
            <div className='gallery-wrapper'>
                <div className='gallery'>
                    {imageData.map(image => <GalleryPic key={image._id} image={image} />)}
                </div>
            </div>
        </div>

    );
};


const GalleryPic = ({ image }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const { _id, picture } = image;

    return (
        <>
            <div key={_id} className='pics'>
                <img onClick={openModal} src={picture} style={{ width: '100%' }}></img>
            </div>
            <Modal showModal={showModal} closeModal={closeModal}>
                <PrivateRoute><ItemDetails productId={_id} noSection={true} /></PrivateRoute>
            </Modal>
        </>


    )
}

export default Gallery;