import { useEffect, useState } from 'react';
import './CategoryTabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { toast } from 'react-hot-toast';
import ProductCard from '../ProductCard/ProductCard';


const CategoryTabs = () => {
    const [teddyBear, setTeddyBear] = useState([]);
    const [unicorn, setUnicorn] = useState([]);
    const [pizzle, setPizzle] = useState([]);

    useEffect(() => {
        fetch('https://play-time-ca.onrender.com/animal-toys?subCategory=Teddy Bear')
            .then(res => res.json())
            .then(data => setTeddyBear(data))
            .catch(error => toast.error(error.message));

        fetch('https://play-time-ca.onrender.com/animal-toys?subCategory=Unicorn')
            .then(res => res.json())
            .then(data => setUnicorn(data))
            .catch(error => toast.error(error.message));

        fetch('https://play-time-ca.onrender.com/animal-toys?subCategory=Pizzle')
            .then(res => res.json())
            .then(data => setPizzle(data))
            .catch(error => toast.error(error.message));
    }, [])

    return (
        <div className="container section category-tabs">
            <Tabs>
                <TabList className="tab-list">
                    <Tab>Teddy Bear</Tab>
                    <Tab>Unicorn</Tab>
                    <Tab>Pizzle</Tab>
                </TabList>

                <TabPanel>
                    {teddyBear.map(teddy => <ProductCard key={teddy._id} product={teddy} />)}
                </TabPanel>

                <TabPanel>
                    {unicorn.map(teddy => <ProductCard key={teddy._id} product={teddy} />)}
                </TabPanel>

                <TabPanel>
                    {pizzle.map(teddy => <ProductCard key={teddy._id} product={teddy} />)}
                </TabPanel>
            </Tabs>
        </div>
    );
};


export default CategoryTabs;