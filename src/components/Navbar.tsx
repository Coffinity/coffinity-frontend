import LocalMallIcon from '@mui/icons-material/LocalMall'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import PersonIcon from '@mui/icons-material/Person'

interface Props {
  onCoffeeBeanCick: () => void
  onEquipmentClick: () => void
  onFooterClick: () => void
}

const Navbar: FC<Props> = ({ onCoffeeBeanCick, onEquipmentClick, onFooterClick }) => {
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
          <a href="/">
            <h1 className="text-white m-5 font-kanit text-4xl">ดัมมะชาติ</h1>
          </a>
          <div className="flex py-10 mt-13">
            <a href="/">
              <button className="hover:text-white px-5">HOME</button>
            </a>

            {!isShow && (
              <div>
                <button className="hover:text-white px-5" onClick={onCoffeeBeanCick}>
                  COFFEE
                </button>
                <button className="hover:text-white px-5" onClick={onEquipmentClick}>
                  {' '}
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

            <a href="/cart">
              <LocalMallIcon sx={{ fontSize: 40 }} className="text-white text-5xl item-center" />
            </a>
          </div>
          {isLoggedIn ? (
            <>
              <a href="/profile">
                <PersonIcon sx={{ fontSize: 40 }} className="ml-5 text-white text-5xl item-center" />
              </a>
              <button className="text-white mx-5" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <div className="flex">
              <a href="/register">
                <p className="text-white mx-10">REGISTER</p>
              </a>
              <p className="text-white">/</p>
              <a href="/login">
                <p className="text-white mx-10">SIGN IN</p>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
