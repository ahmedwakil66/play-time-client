import { Outlet, useNavigation } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../../pages/shared/Footer/Footer";
import Loader from "../../utility/Loader";


const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div className="">
            <Header />
            <div style={{minHeight: '40vh'}}>
                <Outlet></Outlet>
            </div>
            <Footer />
            {navigation.state === 'loading' && <Loader />}
            <Toaster />
        </div>
    );
};

export default MainLayout;