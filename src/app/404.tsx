
import Image from "next/image"
import clockIcon from "@/icons/ClockClockwise.png"
import image7 from "@/icons/image7.png"
import image6 from "@/icons/image6.png"
import image13 from "@/icons/image13.png"
import image19 from "@/icons/image19.png"
import image25 from "@/icons/image25.png"
import image26 from "@/icons/image26.png"
import image27 from "@/icons/image27.png"
import image28 from "@/icons/image28.png"
import image29 from "@/icons/image29.png"

export default function Custom(){
    return(
     <div className="mx-auto my-auto  bg-black">
     <div className="mx-52">
       <div className="grid grid-cols-2 mx-auto mt-24 place-content-center">
         <div className="mt-24">
       <h4 className=" font-[helvetica] font-bold text-[#FF9F0D] text-[32px]">Still You Need Our Support ?</h4>
       <p className="font-[inter] text-[16px] text-[#ffffff]">Don't wait make a smart & logical quote here. Its pretty easy.</p>
       </div>
       <div className="mt-24 h-[56px]">
         <input type="input" className="relative mx-auto h-[56px] rounded-[3px] font-[inter] text-[22px] bg-[#FF9F0D]" placeholder="   Enter Your Email" />
         <button className="relative mx-auto h-[59px] font-[helvetica] text-[22px] text-[#FF9F0D] bg-[#ffffff] rounded-[3px]">Subscribe Now</button>
       </div>
       </div>
       <div className=" mx-auto mt-24 border-[1px] border-[#FF9F0D]">
         {/* line div */}
       </div>
       <div className=" grid grid-cols-6 gap-9 mt-24">
          <div className="col-span-2 relative left-[-150px] grid grid-rows-4 gap-2">
          <h5 className="relative w-[114px] h-[32px] left-[80px] font-[helvetica] text-[24px] font-bold text-[#ffffff]">About Us</h5>
          <p className=" relative w-[312px] h-[95px] left-[80px] top-[-40px] font-[inter] text-[16px] text-[#ffffff]">orporate clients and leisure travelers has
                         been relying on Groundlink for dependab
                         safe, and professional chauffeured car
                         service in major cities across World.</p>
         <div className="w-[380px] grid grid-cols-2">
         <div className=" flex justify-center items-center relative w-[78px] h-[72px] left-[80px] rounded-[3px] bg-[#FF9F0D]">
           <Image src={clockIcon} alt="clockIcon" className="" />
         </div>
         <div className="flex flex-col">
           <p className="font-[inter] text-[18px] text-[#ffffff]">Opening Houres</p>
           <p className="font-[inter] text-[14px] text-[#ffffff]">Mon - Sat(8.00 - 6.00)</p>
           <p className="font-[inter] text-[14px] text-[#ffffff]">Sunday - Closed</p>
         </div>
         </div>
          </div>
          <div className="relative h-[311px] left-[0px] grid grid-rows-7 gap-2">
           <p className="font-[inter] text-[24px] text-[#ffffff] font-bold">Useful Links</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">About</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">News</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">Partners</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">Team</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">Menu</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">Contact</p>
          </div>
          <div className="relative h-[311px] left-[109px]  grid grid-rows-7 gap-2 ">
          <p className="font-[inter] text-[24px] text-[#ffffff] font-bold">Help?</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">FAQ</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">Term & conditions</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">Reporting</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">Documentation</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">Support Policy</p>
           <p className="font-[inter] text-[20px] text-[#ffffff]">Privacy</p>
          </div>
          <div className="col-span-2 relative h-[311px] left-[186px] grid grid-rows-4 gap-2 ">
             <p className="font-[inter] text-[24px] text-[#ffffff] font-bold">Recent Post</p>
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
     
     <div className=" grid grid-cols-4 mx-auto -mt-[90px] h-[90px] bg-[#4F4F4F9d]">
       <div className="col-span-2 mx-auto my-auto font-[inter] text-[18px] text-[#ffffff]">Copyright © 2022 by <i className="text-[22px] text-[#FF9F0D]">USAMA</i>. All Rights Reserved.</div>
       <div className="grid grid-cols-5 place-content-center w-[300px] ml-40">
         <div className="flex justify-center items-center mx-auto w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
           <Image src={image25} alt="social side icon" className="w-[10px] h-[18px]" />
         </div>
         <div className="flex justify-center items-center w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
           <Image src={image26} alt="social side icon" className="w-[16px] h-[18px]" />
         </div>
         <div className="flex justify-center items-center w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
           <Image src={image27} alt="social side icon" className="w-[14px] h-[18px]" />
         </div>
         <div className="flex justify-center items-center w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
           <Image src={image28} alt="social side icon" className="w-[18px] h-[18px]" />
         </div>
         <div className="flex justify-center items-center w-[36px] h-[34px] rounded-[2px] bg-[#ffffff]">
           <Image src={image29} alt="social side icon" className="w-[16px] h-[18px]" />
         </div>
       </div>
       <div className="-mt-[284px] ml-[170px]"><Image src={image19} alt="picture of tree" className="mx-auto w-[295px] h-[372px]"/></div>
     </div>
  
 </div>
    )
}