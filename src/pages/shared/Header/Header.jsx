import './Header.css';
import { useContext, useState } from "react";
import ActiveRoute from "../../../utility/ActiveRoute";
import { MenuIcon } from "../../../utility/Icons";
import { Logo } from '../../../utility/Logos';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
    const [hideMobile, setHideMobile] = useState(true);
    const { user, logOut } = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(() => {
                toast.success('Successfully logged out!')
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='header-wrapper'>
            <header className='container '>
                <div className="logo">
                    <div>
                        {<Logo />}
                    </div>
                    <div className='menuIcon'>
                        <button onClick={() => setHideMobile(!hideMobile)}><MenuIcon size={'28'} /></button>
                    </div>
                </div>
                <nav className={`mobile-nav ${hideMobile && 'nav-none-sm'}`}>
                    {/* Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture. */}
                    <ActiveRoute to={'/'}>Home</ActiveRoute>

                    <ActiveRoute to={'/blog'}>Blogs</ActiveRoute>

                    <ActiveRoute to={'/all-toys'}>All Toys</ActiveRoute>

                    {user && <><ActiveRoute to={'/my-toys'}>My Toys</ActiveRoute>
                        <ActiveRoute to={'/add-a-toy'}>Add A Toy</ActiveRoute></>}

                    {user &&
                        <><div className='profile-img' >
                            <img src={user?.photoURL} alt="" title={user?.displayName} />
                        </div>
                            <button onClick={() => logOutHandler()} className='btn-logout'>Log Out</button>
                        </>
                    }

                    {!user && <ActiveRoute to={'/login'}>Login</ActiveRoute>}
                </nav>
            </header>
        </div>
    );
};

export default Header;