import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location=useLocation();
    if (loading) {
        return <progress className="progress progress-secondary w-56" value="70" max="100"></progress>

    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;