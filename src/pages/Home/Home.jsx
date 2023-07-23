import './Home.css'
import { useEffect } from "react";
import CategoryTabs from "../shared/CategoryTabs/CategoryTabs";
import Banner from "./Banner/Banner";
import CustomerReview from "./CustomerReview/CustomerReview";
import Gallery from "./Gallery/Gallery";
import ShopByAge from "./ShopByAge/ShopByAge";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../../utility/hooks/useTitle";


const Home = () => { useTitle('Home');

    useEffect(() => {
        AOS.init({ duration: 1200 })
    }, [])

    return (
        <>
            <Banner />
            <CategoryTabs />
            <ShopByAge />
            <div data-aos="fade-up" className="container section">
                <h2 className="title-sec">Our Product Gallery</h2>
                <Gallery />
            </div>

            <CustomerReview />
        </>
    );
};

export default Home;