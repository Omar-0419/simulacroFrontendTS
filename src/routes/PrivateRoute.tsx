import { Navigate } from "react-router"
import { Outlet } from "react-router"


export const PrivateRoute = () => {
  const isAusthenticated = true
  
  if (isAusthenticated){
    return <Outlet/>
  } else {
    return <Navigate to={'/'}/>
  }
}
