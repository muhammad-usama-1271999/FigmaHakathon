import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import image73 from "@/icons/image73.png"
import image74 from "@/icons/image74.png"
import image75 from "@/icons/image75.png"
import image76 from "@/icons/image76.png"
import image77 from "@/icons/image77.png"
import image78 from "@/icons/image78.png"
import image79 from "@/icons/image79.png"
import image80 from "@/icons/image80.png"
import image81 from "@/icons/image81.png"
import image82 from "@/icons/image82.png"
import image83 from "@/icons/image83.png"
import image84 from "@/icons/image84.png"

export default function chef (){
    return(
        <div>
           <Header />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 -mt-80 ">
            <div className="m-5 grid place-content-center">
                <Image src={image73} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Tahmina Rumi</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image74} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Jorina Begum</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image75} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">M.Mohammad</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image76} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Munna Kathy</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image77} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Tahmina Rumi</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image78} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Bisnu devgon</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image79} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Motin Molladsf</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image80} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">William Rumi</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image81} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Kets william roy</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image82} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Mahmud kholil</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image83} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Ataur Rahman</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
            <div className="m-5 grid place-content-center">
                <Image src={image84} alt="" className="w-[312px] h-[380px]"/>
                <h6 className="font-[helvetica] font-semibold text-xl text-black flex justify-center p-2">Monalisa holly</h6>
                <h6 className="font-[helvetica] text-xl text-black flex justify-center">Chef</h6>
            </div>
           </div>
           <Footer />
        </div>
    )
}