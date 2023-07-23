import './AllToys.css';
import '../MyToys/MyToys.css';
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Spinner from "../../utility/Spinner";
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../utility/hooks/useTitle';
import { ArrowDownIcon, ArrowUpIcon } from '../../utility/Icons';

const AllToys = () => {
    useTitle('All Toys');
    const [sortByPrice, setSortByPrice] = useState(0);
    const [sortByQuantity, setSortByQuantity] = useState(0);
    const totalToys = useLoaderData().length;
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const totalPages = Math.ceil(totalToys / itemsPerPage);
    const pages = [...Array(totalPages).keys()];

    const [allToys, setAllToys] = useState([]);
    const [iseLoading, setIsLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);


    useEffect(() => {
        fetch(`https://play-time-ca.onrender.com/animal-toys?page=${currentPage}&limit=${itemsPerPage}&sortByPrice=${sortByPrice}&sortByQuantity=${sortByQuantity}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
                toast.error(error.message);
            })
    }, [currentPage, itemsPerPage, sortByPrice, sortByQuantity])

    const handleSearch = (event) => {
        event.preventDefault();
        setIsSearching(true);
        const name = event.target.name.value;
        console.log(name);
        fetch(`https://play-time-ca.onrender.com/animal-toys?search=${name}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
                setIsSearching(false);
            })
            .catch(error => {
                toast.error(error.message);
                setIsSearching(false);
            })
    }

    if (iseLoading) { return <Spinner /> }

    return (
        <div className='container section'>
            <h1 className="title-sec">All Toys</h1>

            <form onSubmit={handleSearch} className='toy-search-div'>
                <input type="text" name='name' placeholder='Search by Toy Name' />
                <button className='btn-primary'>Search</button>
            </form>

            {isSearching && <Spinner />}

            <table className='toys-table' style={{ textAlign: 'center' }}>
                <thead>
                    <tr style={{ backgroundColor: 'var(--bg-table-header)' }}>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        {/* <th>Picture</th> */}
                        <th>SubCategory</th>
                        <th>
                            <span>Quantity</span>
                            <button onClick={() => {setSortByQuantity(-1); setSortByPrice(0)}}><ArrowUpIcon /></button>
                            <button onClick={() => {setSortByQuantity(1); setSortByPrice(0)}}><ArrowDownIcon /></button>
                        </th>
                        <th>
                            <span>Price</span>
                            <button onClick={() => {setSortByPrice(-1); setSortByQuantity(0)}}><ArrowUpIcon /></button>
                            <button onClick={() => {setSortByPrice(1); setSortByQuantity(0)}}><ArrowDownIcon /></button>
                        </th>
                        {/* <th>Description</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allToys.map(toy => <ToysRow key={toy._id} toy={toy} />)
                    }
                </tbody>

                <tfoot>
                    <tr style={{backgroundColor: 'var(--bg-table-header)'}}>
                        <td colSpan='6'>
                            <label htmlFor="itemsPerPage"> Items per Page: &nbsp;
                                <select onChange={(event) => setItemsPerPage(event.target.value)} name="itemsPerPage" id="itemsPerPage" defaultValue={itemsPerPage}>
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                </select>
                            </label>
                        </td>
                    </tr>
                    <tr style={{backgroundColor: 'var(--bg-table-header)'}}>
                        <td colSpan='6'>
                            {
                                pages.map(page => <button onClick={() => setCurrentPage(page)} className={`btn-pagination ${page === currentPage ? 'btn-pag-active' : ''}`} key={page}>{page + 1}</button>)
                            }
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};


const ToysRow = ({ toy }) => {
    const { _id, sellerName, toyName, picture, subCategory, availableQuantity, price, description } = toy;
    const [showAll, setShowAll] = useState(false);


    return (
        <tr>
            <td> {sellerName} </td>
            <td> {toyName} </td>
            {/* <td> <img src={picture} alt={toyName} title={toyName} style={{ width: '100px' }} /> </td> */}
            <td> {subCategory} </td>
            <td> {availableQuantity} pcs </td>
            <td> $ {price} </td>

            {/* <td onClick={() => setShowAll(!showAll)} style={{ cursor: 'pointer' }}>
                {showAll ? <span>{description}</span> : <span>{description?.slice(0, 100)}...</span>}
            </td> */}

            <td className='table-action'>
                <Link to={`/toys/${_id}`}><button>View Details</button></Link>
            </td>
        </tr>
    )
}

export default AllToys;