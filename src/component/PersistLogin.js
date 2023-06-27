import { Outlet, useNavigate} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useRefreshToken from '../hook/useRefreshToken';
import useAuth from '../hook/useAuth';
import DataContext from "../context/DataContext";

const PersistLogin = () => {
    
    const navigate = useNavigate()
    const {isLoading, setIsLoading} = useContext(DataContext)
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            setIsLoading(true)
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        // persist added here AFTER tutorial video
        // Avoids unwanted call to verifyRefreshToken
        auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
        !auth ?  navigate('/walletlogin') :verifyRefreshToken();


        return () => isMounted = false;
    }, [auth])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    }, [isLoading])

    return (
        <>
            {isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin