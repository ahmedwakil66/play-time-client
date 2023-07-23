import { NavLink } from "react-router-dom";


const ActiveRoute = ({ to, children }) => {
    return (
        <NavLink to={to} className={({isActive}) => isActive ? 'active-route' : ''}>
            {children}
        </NavLink>
    );
};

export default ActiveRoute;