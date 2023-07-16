import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"
import { selectIsLoggedIn } from "redux/auth/authSelector";

const PrivateRoute = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return !isLoggedIn ? <Navigate to="/login" replace /> : <Outlet />;
}

export default PrivateRoute;