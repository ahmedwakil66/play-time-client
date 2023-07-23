import './MyToys.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import Spinner from "../../utility/Spinner";
import Swal from 'sweetalert2';
import Modal from '../../utility/Modal';
import UpdateAToy from '../shared/UpdateAToy/UpdateAToy';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, ArrowUpIcon } from '../../utility/Icons';
import useTitle from '../../utility/hooks/useTitle';

const MyToys = () => { useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [sort, setSort] = useState(0);
    const [reFetch, setReFetch] = useState(false);
    const [iseLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://play-time-ca.onrender.com/animal-toys?email=${user?.email}&sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
                toast.error(error.message);
            })
    }, [user?.email, reFetch, sort])

    if (iseLoading) { return <Spinner /> }

    return (
        <div className='container section'>
            <h1 className="title-sec">All toys of {user?.displayName}</h1>
            {myToys.length === 0 && <p className='mb-4 text-center'>You have not added any toy yet, <Link to='/add-a-toy'><u>Add a Toy</u></Link> now.</p>}
            <table className='toys-table text-center'>
                <thead>
                    <tr style={{backgroundColor: 'rgb(238, 223, 204)'}}>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>SubCategory</th>
                        <th>Quantity</th>
                        <th>
                            <span>Price</span>
                            <button onClick={() => setSort(-1)}><ArrowUpIcon /></button>
                            <button onClick={() => setSort(1)}><ArrowDownIcon /></button>
                        </th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map(toy => <ToysRow key={toy._id} toy={toy} reFetch={reFetch} setReFetch={setReFetch} />)
                    }
                </tbody>
            </table>
        </div>
    );
};


const ToysRow = ({ toy, reFetch, setReFetch }) => {
    const { _id, toyName, picture, subCategory, availableQuantity, price, description } = toy;
    const [showAll, setShowAll] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--btn-primary)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const toastId = toast.loading('Deleting');
                    fetch(`https://play-time-ca.onrender.com/animal-toys/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                toast.success('Successfully deleted', { id: toastId });
                            }
                            setReFetch(!reFetch);
                        })
                        .catch(error => toast.error(error.message, { id: toastId }))
                }
            })
    }


    return (
        <>
            <tr>
                <td> {toyName} </td>
                <td> <img src={picture} alt={toyName} title={toyName} style={{ width: '100px' }} /> </td>
                <td> {subCategory} </td>
                <td> {availableQuantity} pcs </td>
                <td> $ {price} </td>

                <td onClick={() => setShowAll(!showAll)} style={{ maxWidth: '300px', cursor: 'pointer' }}>
                    {showAll ? <span>{description}</span> : <span>{description?.slice(0, 100)}...</span>}
                </td>

                <td className='table-action'>
                    <button onClick={openModal}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </td>
            </tr>

            <Modal showModal={showModal} closeModal={closeModal}>
                <UpdateAToy toy={toy} closeModal={closeModal} reFetch={reFetch} setReFetch={setReFetch}/>
            </Modal>
        </>
    )
}

export default MyToys;