import LocalMallIcon from '@mui/icons-material/LocalMall'
import { FC } from 'react'

interface Props {
  onCoffeeBeanCick: () => void
  onEquipmentClick: () => void
  onFooterClick: () => void
}

const Navbar: FC<Props> = ({ onCoffeeBeanCick, onEquipmentClick, onFooterClick }) => {
  return (
    <div>
      <div className="navbar w-full z-50 fixed bg-black text-neutral-content bg-opacity-50 justify-between">
        <div className="flex">
          <h1 className="text-white m-5 font-kanit text-4xl">ดัมมะชาติ</h1>
          <div className="flex py-10 mt-13">
            <button className="hover:text-white px-5">HOME</button>
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
        </div>
        <div className="flex ">
          <div className="flex gap-10 items-start  ">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            {/* <SearchIcon fontSize="large" className="text-white large " /> */}
            <LocalMallIcon sx={{ fontSize: 40 }} className="text-white text-5xl item-center" />
          </div>
          <div className="flex">
            <p className="text-white mx-10">REGISTER</p>
            <p className="text-white">/</p>
            <p className="text-white mx-10">SIGN IN</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
