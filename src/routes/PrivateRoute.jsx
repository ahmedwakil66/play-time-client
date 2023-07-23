import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../utility/Loader";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if(loading) { return <Loader />}

    if(!user) {
        toast("You have to Login first!");
        return <Navigate to={'/login'} state={{from: location}} replace={true}></Navigate>
    }

    return children;
};

export default PrivateRoute;