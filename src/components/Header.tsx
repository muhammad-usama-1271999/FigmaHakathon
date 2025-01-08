
import Image from "next/image"
import image30 from "@/icons/image30.png"
import searchIcon from "@/icons/searchIcon.png"
import userIcon from "@/icons/User.png"
import bag from "@/icons/Handbag.png"

export default function Header(){
    return(
        <div className="h-screen">
                <Image src={image30} alt="some food" className="w-[1920px] h-[410px]"/>
                <div className="absolute inset-x-0 top-0 h-[90px] bg-black flex justify-center items-center">
                    <div className="w-full h-[32px] mx-28 flex justify-between ">
                        <div className="w-[109px] h-[32px] text-[#ffffff] font-[helvetica] text-[38px] font-bold ">Food<span className="text-[#FF9F0D]">tuck</span></div>
                        <div className="col-span-2 w-[508px] h-[32px] ">
                            <ul className="xl:grid sm:hidden grid-cols-7 place-content-center">
                                <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D] "><button><a href="../">Home</a></button></li>
                                <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./menu">Menu</a></button></li>
                                <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./shop">Shop</a></button></li>
                                <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./blog">Blog</a></button></li>
                                <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./about-us">About</a></button></li>
                                <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./pages">Pages</a></button></li>
                                <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./signUp">signUp</a></button></li>
                            </ul>
                        </div>
                        <div className=" flex gap-3">
                            <button className="">
                                <Image src={searchIcon} alt="searchIcon" className="w-[24px] h-[24px]"/>
                            </button>
                            <button className="">
                            <Image src={userIcon} alt="searchIcon" className="w-[24px] h-[24px]"/>
                            </button>
                            <button className="">
                            <a href="./shopping-cart"><Image src={bag} alt="searchIcon" className="w-[24px] h-[24px]"/></a>
                            </button>
                            <div className="xl:hidden text-3xl text-white">&#8801;
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:-mt-64 sm:-mt-52 h-screen">
                    <h2 className="mx-auto flex justify-center font-[helvetica] font-bold text-white text-[48px]">Our Menu</h2>
                    <button className="flex justify-center mx-auto h-[10px] font-[inter] text-white text-[20px] hover:text-[#ff9f0d]"><a href="../">Home <span className="text-white">{">"}</span></a></button>
                </div>
                
            </div>
    )
}