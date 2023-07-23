import '../../AddAToy/AddAToy.css';
import './UpdateAToy.css';
import { toast } from 'react-hot-toast';

const UpdateAToy = ({toy, closeModal, reFetch, setReFetch}) => { console.log(toy)

    const UpdateAToyHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const picture = form.picture.value;
        const price = Number(form.price.value);
        const rating = Number(form.rating.value);
        const category = 'Animal Toys';
        const subCategory = form.subCategory.value;
        const availableQuantity = Number(form.quantity.value);
        const description = form.description.value;

        const newToy = { toyName, sellerName, sellerEmail, picture, price, rating, category, subCategory, availableQuantity, description };
        console.log(newToy);

        const toastId = toast.loading('Updating')

        fetch(`https://play-time-ca.onrender.com/animal-toys/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast.success('Successfully updated!', {id: toastId});
                    setReFetch(!reFetch);
                    closeModal();
                }
                else if(data.modifiedCount === 0 && data.matchedCount > 0){
                    toast('Everything is up to date!', {id: toastId})
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message, {id: toastId});
            })

    }

    return (
        <div className='container'>
            <h1 className='title-sec'>Update {toy?.toyName}</h1>
            <img className='update-toy-banner-img' src={toy?.picture} alt={toy?.toyName} title={toy?.toyName} />
            <form onSubmit={UpdateAToyHandler} className='add-a-toy'>
                <div>
                    <label htmlFor="toyName">Toy Name:</label>
                    <input type="text" name='toyName' id='toyName' defaultValue={toy?.toyName} />
                </div>

                <div>
                    <label htmlFor="picture">Toy Picture URL:</label>
                    <input type="text" name='picture' id='picture' value={toy?.picture} />
                </div>

                <div>
                    <label htmlFor="sellerName">Seller Name:</label>
                    <input type="text" name='sellerName' id='sellerName' defaultValue={toy?.sellerName} />
                </div>

                <div>
                    <label htmlFor="sellerEmail">Seller Email:</label>
                    <input type="text" name='sellerEmail' id='sellerEmail' defaultValue={toy?.sellerEmail} disabled />
                </div>

                <div>
                    <label htmlFor="subCategory">Select a Sub-category:</label>
                    <select name="subCategory" id="subCategory" defaultValue={toy?.subCategory}>
                        <option value="Pizzle">Pizzle</option>
                        <option value="Unicorn">Unicorn</option>
                        <option value="Teddy Bear">Teddy Bear</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="price">Toy Price:</label>
                    <input type="text" name='price' id='price' defaultValue={toy?.price} />
                </div>

                <div>
                    <label htmlFor="rating">Toy Rating:</label>
                    <input type="text" name='rating' id='rating' defaultValue={toy?.rating} />
                </div>

                <div>
                    <label htmlFor="quantity">Toy Quantity:</label>
                    <input type="text" name='quantity' id='quantity' defaultValue={toy?.availableQuantity} />
                </div>

                <div>
                    <label htmlFor="description">Toy Description:</label>
                    <textarea type="text" name='description' id='description' rows={5} defaultValue={toy?.description}></textarea>
                </div>

                <div>
                    <button className='btn-primary'>Update This Toy</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateAToy;