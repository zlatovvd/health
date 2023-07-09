import { Navigate, Outlet } from "react-router-dom"

const PublicRoute = () => {

    const user = {
        username: 'vasyl',
        password: '1111'
    }

    return user ? <Outlet/> : <Navigate to="diary" />

}

export default PublicRoute;