import React from 'react'
import {Outlet, Navigate, useLocation} from 'react-router-dom'
import useAuth from '../hook/useAuth'

const Admin = ({ allowedRoles }) => {
  const location = useLocation()

  const {auth} = useAuth()

  const {user} = auth;

  // console.log(user.roles)
  
    
  return (

     !auth.user ? <Navigate to={'/walletlogin'} state={{ from : location }} replace/> :

     user.roles.Admin === 5150  ? <Outlet /> 
      :
    <Navigate to={'/'} state={{ from : location }} replace/>
  
    )
}

export default Admin