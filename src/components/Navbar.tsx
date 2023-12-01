import LocalMallIcon from '@mui/icons-material/LocalMall'
import { FC, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import PersonIcon from '@mui/icons-material/Person'
import { CartContext } from '../providers/CartProvider'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import MenuIcon from '@mui/icons-material/Menu'

interface Props {
  onCoffeeBeanCick: () => void
  onEquipmentClick: () => void
  onFooterClick: () => void
}

const Navbar: FC<Props> = ({ onCoffeeBeanCick, onEquipmentClick, onFooterClick }) => {
  const { cartState } = useContext(CartContext)
  const { isLoggedIn, logout } = useAuth()
  const handleLogout = () => {
    logout()
    toast.success('Logout Success')
  }
  const nevigate = useLocation()
  console.log(nevigate.pathname)

  const isShow =
    nevigate.pathname == '/login' ||
    nevigate.pathname == '/register' ||
    nevigate.pathname == '/cart' ||
    nevigate.pathname == '/checkout' ||
    nevigate.pathname == '/profile'
  return (
    <div>
      <div className="navbar w-full z-50 fixed  text-neutral-content bg-black bg-opacity-50 justify-between max-md:pr-20 ">
        <div className="flex ">
          <Link to="/">
            <h1 className="text-white m-5 font-kanit text-4xl">ดัมมะชาติ</h1>
          </Link>
          <div className="flex py-10 mt-13">
            <div className="hidden md:block">
              <Link className=" " to="/">
                <button className="hover:text-white ml-10 relative nav">HOME</button>
              </Link>
            </div>
            <div className="hidden md:block">
              {!isShow && (
                <div>
                  <button className="hover:text-white ml-10 relative nav" onClick={onCoffeeBeanCick}>
                    COFFEE
                  </button>
                  <button className="hover:text-white ml-10 relative nav" onClick={onEquipmentClick}>
                    EQUIPMENT
                  </button>
                  <button className="hover:text-white ml-10 relative nav" onClick={onFooterClick}>
                    CONTACT
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex gap-10 items-start  ">
            <div className="hidden md:block">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
              {/* <SearchIcon fontSize="large" className="text-white large " /> */}
            </div>
            <Link to="/cart">
              <LocalMallIcon sx={{ fontSize: 40 }} className="text-white text-5xl item-center absolute" />
              <div className="badge relative left-5 top-0 bg-red-600 text-white border-white">
                {cartState.cartList.length}
              </div>
            </Link>
            <div className="md:hidden">
              <MenuIcon sx={{ fontSize: 40 }} className="text-white text-5xl item-center absolute" />
            </div>
          </div>
          <div className="hidden md:block">
            {isLoggedIn ? (
              <>
                <Link to="/profile">
                  <PersonIcon sx={{ fontSize: 45 }} className="ml-10 text-white text-5xl item-center" />
                </Link>
                <button className="text-white mx-5" onClick={handleLogout}>
                  Log out
                </button>
              </>
            ) : (
              <div className="flex">
                <Link to="/register">
                  <p className="text-white mx-10 relative nav">REGISTER</p>
                </Link>
                <p className="text-white">/</p>
                <Link to="/login">
                  <p className="text-white mx-10 relative nav">SIGN IN</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
