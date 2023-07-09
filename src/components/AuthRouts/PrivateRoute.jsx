import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    
    const user = {
        username: 'vasyl',
        password: '1111'
    }
    
    return user ? <Navigate to="/login" replace /> : <Outlet />;
}

export default PrivateRoute;