import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"
import { selectIsLoggedIn } from "redux/auth/authSelector";

const PublicRoute = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    // const user = {
    //     username: 'vasyl',
    //     password: '1111'
    // }

    return !isLoggedIn ? <Outlet/> : <Navigate to="diary" />

}

export default PublicRoute;