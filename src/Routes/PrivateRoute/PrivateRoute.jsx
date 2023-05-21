import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location=useLocation();
    if (loading) {
        return <div className="flex justify-center">
            <button className="btn loading">loading</button>
        </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;