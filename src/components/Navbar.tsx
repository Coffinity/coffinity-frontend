import LocalMallIcon from '@mui/icons-material/LocalMall'
import { FC, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import PersonIcon from '@mui/icons-material/Person'

import { CartContext } from '../providers/CartProvider'

import { Link } from 'react-router-dom'

interface Props {
  onCoffeeBeanCick: () => void
  onEquipmentClick: () => void
  onFooterClick: () => void
}

const Navbar: FC<Props> = ({ onCoffeeBeanCick, onEquipmentClick, onFooterClick }) => {
  const { cartState } = useContext(CartContext)
  const { isLoggedIn, logout } = useAuth()
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
      <div className="navbar w-full z-50 fixed bg-black text-neutral-content bg-opacity-50 justify-between">
        <div className="flex">
          <Link to="/">
            <h1 className="text-white m-5 font-kanit text-4xl">ดัมมะชาติ</h1>
          </Link>
          <div className="flex py-10 mt-13">
            <Link to="/">
              <button className="hover:text-white px-5">HOME</button>
            </Link>

            {!isShow && (
              <div>
                <button className="hover:text-white px-5" onClick={onCoffeeBeanCick}>
                  COFFEE
                </button>
                <button className="hover:text-white px-5" onClick={onEquipmentClick}>
                  EQUIPMENT
                </button>
                <button className="hover:text-white px-5" onClick={onFooterClick}>
                  CONTACT
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex ">
          <div className="flex gap-10 items-start  ">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            {/* <SearchIcon fontSize="large" className="text-white large " /> */}

            <Link to="/cart">
              <LocalMallIcon sx={{ fontSize: 40 }} className="text-white text-5xl item-center absolute" />
              <div className="badge relative left-5 top-0 bg-red-600 text-white border-white">
                {cartState.cartList.length}
              </div>
            </Link>
          </div>

          {isLoggedIn ? (
            <>
              <Link to="/profile">
                <PersonIcon sx={{ fontSize: 40 }} className="ml-5 text-white text-5xl item-center" />
              </Link>
              <button className="text-white mx-5" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <div className="flex">
              <Link to="/register">
                <p className="text-white mx-10">REGISTER</p>
              </Link>
              <p className="text-white">/</p>
              <Link to="/login">
                <p className="text-white mx-10">SIGN IN</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
