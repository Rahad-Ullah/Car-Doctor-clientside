import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <div className="flex justify-center py-24">
            <progress className="progress w-56"></progress>
        </div>
    }

    if(user?.email){
        return children;
    }
    else{
        return <Navigate to={'/login'} replace state={location.pathname}></Navigate>
    }
};

export default PrivateRoutes;