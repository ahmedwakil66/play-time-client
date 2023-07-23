import { useContext } from 'react';
import './AddAToy.css';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../utility/hooks/useTitle';

const AddAToy = () => { useTitle('Add a Toy');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const addAToyHandler = (event) => {
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

        const toastId = toast.loading('Adding new toy')

        fetch('https://play-time-ca.onrender.com/animal-toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    toast.success('Toy added successfully!', {id: toastId});
                    navigate('/my-toys');
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message, {id: toastId});
            })

    }

    return (
        <div className='container section'>
            <h1 className='title-sec'>Add a Toy</h1>
            <form onSubmit={addAToyHandler} className='add-a-toy'>
                <div>
                    <label htmlFor="toyName">Toy Name:</label>
                    <input type="text" name='toyName' id='toyName' placeholder='Suitable toy name' />
                </div>

                <div>
                    <label htmlFor="picture">Toy Picture URL:</label>
                    <input type="text" name='picture' id='picture' placeholder='Direct image link' />
                </div>

                <div>
                    <label htmlFor="sellerName">Seller Name:</label>
                    <input type="text" name='sellerName' id='sellerName' defaultValue={user?.displayName} />
                </div>

                <div>
                    <label htmlFor="sellerEmail">Seller Email:</label>
                    <input type="text" name='sellerEmail' id='sellerEmail' defaultValue={user?.email} disabled />
                </div>

                <div>
                    <label htmlFor="subCategory">Select a Sub-category:</label>
                    <select name="subCategory" id="subCategory">
                        <option value="Pizzle">Pizzle</option>
                        <option value="Unicorn">Unicorn</option>
                        <option value="Teddy Bear">Teddy Bear</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="price">Toy Price:</label>
                    <input type="text" name='price' id='price' placeholder='Number only' />
                </div>

                <div>
                    <label htmlFor="rating">Toy Rating:</label>
                    <input type="text" name='rating' id='rating' placeholder='Number only' />
                </div>

                <div>
                    <label htmlFor="quantity">Toy Quantity:</label>
                    <input type="text" name='quantity' id='quantity' placeholder='Number only' />
                </div>

                <div>
                    <label htmlFor="description">Toy Description:</label>
                    <textarea type="text" name='description' id='description' rows={5} placeholder='Details for toy'></textarea>
                </div>

                <div>
                    <button className='btn-primary'>Add This Toy</button>
                </div>
            </form>
        </div>
    );
};

export default AddAToy;