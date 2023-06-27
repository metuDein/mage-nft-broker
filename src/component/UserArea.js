import React from 'react'
import { Outlet, Navigate, useLocation} from 'react-router-dom'
import useAuth from '../hook/useAuth'


const UserArea = () => {
  const location = useLocation()
  const { auth } = useAuth()
  return (
    auth?.user ?  
    <Outlet />
    :  <Navigate to={'/walletlogin'} state={{from : location}} replace/>
    
  )
}

export default UserArea