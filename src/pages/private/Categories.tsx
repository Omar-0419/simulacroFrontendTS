import { CategoriesUser } from "../dashboards/user/CategoriesUser"
import { CategoriesAdmin } from "../dashboards/admin/CategoriesAdmin"

import type { User } from "../../types/interfaces"
import { useState } from "react"

export const Categories = () => {

  const [showFormCategory, setShowFormCategory] = useState(false)

  const user: User = JSON.parse(localStorage.getItem('User') || '{}') /*Obtiene "User" del localStorage; si no existe, usa un objeto vacío.*/
  

  return (
    <>
    {user.role === 'admin' ? (<CategoriesAdmin/>) : (<CategoriesUser/>)}
    </>
  )
}

