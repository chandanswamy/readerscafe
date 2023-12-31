import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = () => {
  
  const jwtToken = Cookies.get('jwt_token');
  let auth = {'token':jwtToken}

  return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default ProtectedRoute
