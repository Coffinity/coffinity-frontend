import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneIcon from '@mui/icons-material/Phone'
import HomeIcon from '@mui/icons-material/Home'
import InstagramIcon from '@mui/icons-material/Instagram'
import { FC } from 'react'

interface Props {
  footerRef: React.MutableRefObject<HTMLDivElement | null>
}

const Footer: FC<Props> = ({ footerRef }) => {
  return (
    <footer ref={footerRef} className="bg-footerTexture py-10">
      <div className="flex w-full gap-x-20 items-center justify-between ">
        <div className="w-1/2 ">
          <img src="assets/logo.png" className="mx-auto h-64 w-64" />
        </div>
        <div className="flex items-center">
          <div className="w-0 h-[270px] border-solid border-white border-[1px]"></div>
        </div>

        <div className="w-1/2">
          <h1 className="pl-20 text-3xl mb-5 font-semibold text-white max-md:pl-5">CONTACT US</h1>
          <div className="pl-20 max-md:pl-5">
            <div className="flex gap-5 mb-5 items-center">
              <PhoneIcon sx={{ fontSize: 30 }} className="text-white" />
              <p className="text-[#AAAAAA]">084-961-4154</p>
            </div>
            <div className="flex gap-5 mb-5 items-center">
              <FacebookIcon sx={{ fontSize: 30 }} className="text-white " />
              <p className="text-[#AAAAAA]">Dharmajati Cafe Surin</p>
            </div>
            <div className="flex gap-5 mb-5 items-center">
              <HomeIcon sx={{ fontSize: 30 }} className="text-white " />
              <p className="text-[#AAAAAA]">327 Thetsaban1 Road, Naimueang, MueangSurin, Surin, Thailand</p>
            </div>
            <div className="flex gap-5 mb-5 items-center">
              <InstagramIcon sx={{ fontSize: 30 }} className="text-white " />
              <p className="text-[#AAAAAA]">dharmajati_coffee_eatery</p>
            </div>
            <div className="flex gap-5 mb-5 items-center">
              <img src="assets/lineLogo.svg" className="object-cover h-[30px] w-[30px] " />
              <p className="text-[#AAAAAA]">peet.werapat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-content-center mt-5">
        <p className="text-[#AAAAAA]">Copyright © 2020 Dharmajati</p>
      </div>
    </footer>
  )
}

export default Footer
