import { CategoriesUser } from "../dashboards/user/CategoriesUser"
import { CategoriesAdmin } from "../dashboards/admin/CategoriesAdmin"

import type { User } from "../../types/interfaces"

export const Categories = () => {

  const user: User = JSON.parse(localStorage.getItem('User') || '{}') /*Obtiene "User" del localStorage; si no existe, usa un objeto vacío.*/
  

  return (
    <>
    {user.role === 'admin' ? (<CategoriesAdmin/>) : (<CategoriesUser/>)}
    </>
  )
}

