import { Link } from "react-router"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router"

export const Header = () => {

  const {logout} = useAuth()
  const navigate = useNavigate()

  function Logout(){
    logout()
    navigate('/')
  }
  const userStored = localStorage.getItem("User")
  const user = JSON.parse(userStored)  
  return (
    <header className="bg-blue-500 text-white px-6 py-4">
        <nav className="flex items-center justify-between">
            <div>
              <h2>Hello {user.name}</h2>
            </div>
            <div className="flex gap-4">
                <Link to={'/home'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/categories'}>Categories</Link>
                <Link to={'/favorites'}>Favorites</Link>
            </div>

            <button onClick={Logout} className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-500 cursor-pointer">Logout</button>
        </nav>

    </header>
  )
}
