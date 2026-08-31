import type { User } from "../../types/interfaces"

import { ProductsAdmin } from "../dashboards/admin/ProductsAdmin"
import { ProductsUser } from "../dashboards/user/ProductsUser"

export const Products = () => {

    const user: User = JSON.parse(localStorage.getItem('User') || '{}') /*Obtiene "User" del localStorage; si no existe, usa un objeto vacío.*/

    return (
        <>
            {user.role === 'admin' ? (<ProductsAdmin />) : (<ProductsUser />)}
        </>
    )
}
