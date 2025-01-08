import Image from "next/image"
import clockIcon from "@/icons/ClockClockwise.png"
import image7 from "@/icons/image7.png"
import image6 from "@/icons/image6.png"
import image13 from "@/icons/image13.png"
// import image19 from "@/icons/image19.png"
import image25 from "@/icons/image25.png"
import image26 from "@/icons/image26.png"
import image27 from "@/icons/image27.png"
import image28 from "@/icons/image28.png"
import image29 from "@/icons/image29.png"



export default function Footer () {
  return (
    <div className="mx-auto  bg-black">
        <div className="mx-28 ">
          <div className="xl:flex justify-around sm:grid place-content-center xl:mt-24 border-b-2 sm:border-[#ffffff] xl:border-[#FF9F0D] sm:pb-12 xl:pb-24 ">
            <div className="xl:mt-24">
                <h4 className=" font-[helvetica] font-bold text-[#FF9F0D] xl:text-[32px] sm:text-2xl sm:pt-12 xl:pt-0 ">Still You Need Our Support ?</h4>
                <p className="font-[inter] text-[16px] text-[#ffffff]">Dont wait make a smart & logical quote here. Its pretty easy.</p>
            </div>
            <div className="xl:mt-24 sm:mt-12 h-[56px]">
              <input type="input" className="relative mx-auto h-[56px] rounded-[3px] font-[inter] text-[22px] bg-[#FF9F0D]" placeholder="   Enter Your Email" />
              <button className="relative mx-auto h-[59px] font-[helvetica] text-[22px] text-[#FF9F0D] bg-[#ffffff] rounded-[3px]">Subscribe Now</button>
            </div>
          </div>
          
          <div className=" grid sm:grid-cols-2 xl:grid-cols-4 xl:mt-24 sm:gap-y-10 xl:gap-y-0 sm:mb-16 xl:mb-10 sm:mt-10  gap-x-20">
            <div className="">
              <h5 className="font-[helvetica] text-[24px] font-bold text-[#FF9F0D]">About Us</h5>
              <p className="mt-1 font-[inter] text-[16px] text-[#ffffff]">
                            orporate clients and leisure travelers has
                            been relying on Groundlink for dependab
                            safe, and professional chauffeured car
                            service in major cities across World.</p>
              <div className="flex">
                <div className="p-2 m-3 flex justify-center items-center rounded-[3px] bg-[#FF9F0D]">
                  <Image src={clockIcon} alt="clockIcon" className="h-10 w-10 " />
                </div>
                <div className="">
                  <p className="font-[inter] text-[18px] text-[#ffffff]">Opening Houres</p>
                  <p className="font-[inter] text-[14px] text-[#ffffff]">Mon - Sat(8.00 - 6.00)</p>
                  <p className="font-[inter] text-[14px] text-[#ffffff]">Sunday - Closed</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-[inter] text-[24px] text-[#FF9F0D] font-bold">Useful Links</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">About</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">News</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">Partners</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">Team</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">Menu</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">Contact</p>
            </div>
            <div className="">
              <p className="font-[inter] text-[24px] text-[#FF9F0D] font-bold">Help?</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">FAQ</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">Term & conditions</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">Reporting</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">Documentation</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">Support Policy</p>
              <p className="font-[inter] text-[20px] text-[#ffffff]">Privacy</p>
            </div>
            <div className="gap-2 ">
              <p className="font-[inter] text-[24px] text-[#FF9F0D] font-bold">Recent Post</p>
              <div className="w-[244px] h-[53px] grid grid-cols-2 gap-0 ">
                <div className=""><Image src={image7} alt="some food" className="w-[59px] h-[53px]" /></div>
                <div className="relative left-[-120px] w-[250px]">
                  <p className="relative left-[69px] font-[inter] text-[16px] text-[#ffffff]">19 DEC 2024</p>
                  <p className="relative left-[69px] font-[inter] text-[18px] text-[#ffffff]">Keep Your Business </p>
                </div>
              </div>
              <div className="w-[244px] h-[53px] grid grid-cols-2 gap-0 ">
                <div className=""><Image src={image6} alt="some food" className="w-[59px] h-[53px]" /></div>
                <div className="relative left-[-120px] w-[250px]">
                  <p className="relative left-[69px] font-[inter] text-[16px] text-[#ffffff]">19 DEC 2024</p>
                  <p className="relative left-[69px] font-[inter] text-[18px] text-[#ffffff]">Keep Your Business </p>
                </div>
              </div>
              <div className="w-[244px] h-[53px] grid grid-cols-2 gap-0 ">
                <div className=""><Image src={image13} alt="some food" className="w-[59px] h-[53px]" /></div>
                <div className="relative left-[-120px] w-[250px]">
                  <p className="relative left-[69px] font-[inter] text-[16px] text-[#ffffff]">19 DEC 2024</p>
                  <p className="relative left-[69px] font-[inter] text-[18px] text-[#ffffff]">Keep Your Business </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:flex justify-between px-32 h-[90px] bg-[#4F4F4F9d]">
          <div className="lg:my-auto sm:my-2 sm:mx-auto lg:mx-0 font-[inter] text-[18px] text-[#ffffff]">Copyright © 2022 by <i className="text-[22px] text-[#FF9F0D]">USAMA</i>. All Rights Reserved.</div>
          <div className="flex my-auto gap-3">
            <div className="flex justify-center items-center mx-auto w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
              <Image src={image25} alt="social side icon" className="w-[10px] h-[18px]" />
            </div>
            <div className="flex justify-center items-center mx-auto w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
              <Image src={image26} alt="social side icon" className="w-[16px] h-[18px]" />
            </div>
            <div className="flex justify-center items-center mx-auto w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
              <Image src={image27} alt="social side icon" className="w-[14px] h-[18px]" />
            </div>
            <div className="flex justify-center items-center mx-auto w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
              <Image src={image28} alt="social side icon" className="w-[18px] h-[18px]" />
            </div>
            <div className="flex justify-center items-center mx-auto w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
              <Image src={image29} alt="social side icon" className="w-[16px] h-[18px]" />
            </div>
          </div>
          
        </div>
     
    </div>
  )
}

