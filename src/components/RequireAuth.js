import { useLocation, Navigate, Outlet } from "react-router-dom";
import { roles } from "../constants/Roles";
// import { useSelector } from "react-redux/es/exports";
// import { getAuth } from "../functions/index";

const RequireAuth = ({ allowedRoles }) => {
    // const { auth } = useAuth();
    const location = useLocation();
    // const auth = getAuth();
    const auth = {
        roles: roles.SUPER_ADMIN
        , token: "12345"
    }
    localStorage.setItem("roles", auth.roles)
    console.log(allowedRoles, roles)
    return (
        new Array(auth?.roles)?.find(role => allowedRoles?.includes(role))
            // allowedRoles == auth?.roles
            ? <Outlet />
            : JSON.parse(auth?.token) ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;