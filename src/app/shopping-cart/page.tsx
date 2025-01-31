import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import image54 from "@/icons/image54.png"
import image55 from "@/icons/image55.png"
import image56 from "@/icons/image56.png"
import image57 from "@/icons/image57.png"
import image58 from "@/icons/image58.png"
import star from "@/icons/star.png"
import silverStar from "@/icons/silverStar.png"


function cart () {
  return (
    <div>
       <Header />
        <div className="2xl:mx-auto mx-9 grid place-content-center">
            <div className="grid grid-cols-6 gap-20 lg:gap- ">
                <h6 className="col-span-2 font-[inter] text-black text-2xl font-bold w-24 ">Product</h6>
                <h6 className="font-[inter] text-black text-2xl font-bold w-24 ">Price</h6>
                <h6 className="font-[inter] text-black text-2xl font-bold w-24 ">Quantity</h6>
                <h6 className="font-[inter] text-black text-2xl font-bold w-24 ">Total</h6>
                <h6 className="font-[inter] text-black text-2xl font-bold w-24 -ml-5 xl:ml-0">Remove</h6>
            </div>
                <div className="flex justify-around lg:justify-between mt-10 border-b-4 border-slate-200 pb-5 lg:pr-20">
                <div className="flex justify-between gap-1">
                    <div className="">
                      <Image src={image54} alt="" className="w-[93px] h-[97px]"/>
                    </div>
                    <div className="grid place-content-center">
                    <p className="font-[inter] text-black text-xl font-bold">Burger</p>
                    <div className="flex justify-start gap-1 ">
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={silverStar} alt="" className="w-5 h-5" />
                        <Image src={silverStar} alt="" className="w-5 h-5" />
                    </div>
                    </div>
                </div>
                <p className="font-[helvetica] text-black text-base flex items-center">$35.00</p>
                <div className="border rounded-3xl border-slate-300 h-6 mt-8 flex items-center">
                    <button className="ml-4 text-3xl text-slate-400">-</button>
                    <button className="ml-3 text-xl text-black">1</button>
                    <button className="ml-3 text-2xl text-black">+</button>
                </div>
                <p className="font-[inter] text-black text-xl flex items-center">$221.00</p>
                <p className="font-[inter] text-black text-2xl grid place-content-center  hover:text-[#ff9f0d]">x</p>
                </div>
                <div className="flex justify-around lg:justify-between mt-10 border-b-4 border-slate-200 pb-5 lg:pr-20">
                <div className="flex justify-between gap-1">
                    <div className="">
                      <Image src={image55} alt="" className="w-[93px] h-[97px]"/>
                    </div>
                    <div className="grid place-content-center">
                    <p className="font-[inter] text-black text-xl font-bold">Fresh Lime</p>
                    <div className="flex justify-start gap-1 ">
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={silverStar} alt="" className="w-5 h-5" />
                        <Image src={silverStar} alt="" className="w-5 h-5" />
                    </div>
                    </div>
                </div>
                <p className="font-[helvetica] text-black text-base flex items-center">$25.00</p>
                <div className="border rounded-3xl border-slate-300 h-6 mt-8 flex items-center">
                    <button className="ml-4 text-3xl text-slate-400">-</button>
                    <button className="ml-3 text-xl text-black">1</button>
                    <button className="ml-3 text-2xl text-black">+</button>
                </div>
                <p className="font-[inter] text-black text-xl flex items-center">$521.00</p>
                <p className="font-[inter] text-black text-2xl grid place-content-center  hover:text-[#ff9f0d]">x</p>
                </div>
                <div className="flex justify-around lg:justify-between mt-10 border-b-4 border-slate-200 pb-5 lg:pr-20">
                <div className="flex justify-between gap-1">
                    <div className="">
                      <Image src={image56} alt="" className="w-[93px] h-[97px]"/>
                    </div>
                    <div className="grid place-content-center">
                    <p className="font-[inter] text-black text-xl font-bold">Pizza</p>
                    <div className="flex justify-start gap-1 ">
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={silverStar} alt="" className="w-5 h-5" />
                        <Image src={silverStar} alt="" className="w-5 h-5" />
                    </div>
                    </div>
                </div>
                <p className="font-[helvetica] text-black text-base flex items-center">$15.00</p>
                <div className="border rounded-3xl border-slate-300 h-6 mt-8 flex items-center">
                    <button className="ml-4 text-3xl text-slate-400">-</button>
                    <button className="ml-3 text-xl text-black">1</button>
                    <button className="ml-3 text-2xl text-black">+</button>
                </div>
                <p className="font-[inter] text-black text-xl flex items-center">$421.00</p>
                <p className="font-[inter] text-black text-2xl grid place-content-center  hover:text-[#ff9f0d]">x</p>
                </div>
                <div className="flex justify-around lg:justify-between mt-10 border-b-4 border-slate-200 pb-5 lg:pr-20">
                <div className="flex justify-between gap-1">
                    <div className="">
                      <Image src={image57} alt="" className="w-[93px] h-[97px]"/>
                    </div>
                    <div className="grid place-content-center">
                    <p className="font-[inter] text-black text-xl font-bold">Chocolate Muffin</p>
                    <div className="flex justify-start gap-1 ">
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={star} alt="" className="w-5 h-5" />
                        <Image src={silverStar} alt="" className="w-5 h-5" />
                        <Image src={silverStar} alt="" className="w-5 h-5" />
                    </div>
                    </div>
                </div>
                <p className="font-[helvetica] text-black text-base flex items-center">$45.00</p>
                <div className="border rounded-3xl border-slate-300 h-6 mt-8 flex items-center">
                    <button className="ml-4 text-3xl text-slate-400">-</button>
                    <button className="ml-3 text-xl text-black">1</button>
                    <button className="ml-3 text-2xl text-black">+</button>
                </div>
                <p className="font-[inter] text-black text-xl flex items-center">$521.00</p>
                <p className="font-[inter] text-black text-2xl grid place-content-center  hover:text-[#ff9f0d]">x</p>
                </div>
                <div className="flex justify-around lg:justify-between mt-10 border-b-4 border-slate-200 pb-5 lg:pr-20">
                    <div className="flex justify-between gap-1">
                        <div className="">
                            <Image src={image58} alt="" className="w-[93px] h-[97px]"/>
                        </div>
                        <div className="grid place-content-center">
                            <p className="font-[inter] text-black text-xl font-bold">Cheese Butter</p>
                            <div className="flex justify-start gap-1 ">
                                <Image src={star} alt="" className="w-5 h-5" />
                                <Image src={star} alt="" className="w-5 h-5" />
                                <Image src={star} alt="" className="w-5 h-5" />
                                <Image src={silverStar} alt="" className="w-5 h-5" />
                                <Image src={silverStar} alt="" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <p className="font-[helvetica] text-black text-base flex items-center">$15.00</p>
                    <div className="border rounded-3xl border-slate-300 h-6 mt-8 flex items-center">
                        <button className="ml-4 text-3xl text-slate-400">-</button>
                        <button className="ml-3 text-xl text-black">1</button>
                        <button className="ml-3 text-2xl text-black">+</button>
                    </div>
                    <p className="font-[inter] text-black text-xl flex items-center">$325.00</p>
                    <p className="font-[inter] text-black text-2xl grid place-content-center hover:text-[#ff9f0d]">x</p>
                </div>
                <div className="mx-auto grid place-content-center xl:grid-cols-2 ">
                    <div className="mt-24">
                        <h4 className="font-[helvetica]  text-4xl text-black font-bold">Coupon Code</h4>
                        <div className="border-2 border-slate-200 rounded-md mt-8 p-8">
                            <p className="font-[inter] text-lg w-[500px] text-slate-400 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
                            <input type="input" className=" border border-slate-300 rounded-md w-[500px] h-9 mt-5" placeholder="   Enter Here Code" />
                            <button className="w-[69px] h-[36px] bg-[#ff9f0d] text-white rounded-md">Apply</button>
                        </div>
                    </div>
                    <div className="mt-24 ml-5 sm:mx-5">
                        <h4 className="font-[helvetica] font-bold text-4xl text-black">Total Bill</h4>
                        <div className="border-2 border-slate-200 rounded-md mt-8 p-8">
                            <h6 className="font-[helvetica] font-semibold text-black text-xl">Cart Subtotal <span className="font-[inter] text-lg md:ml-24 lg:ml-80 sm:ml-80">$120.00</span> </h6>
                            <p className="font-[inter] text-lg text-slate-800 mt-5">Shipping Charge <span className="md:ml-24 lg:ml-80 sm:ml-80">$00.00</span> </p>
                            <h6 className="font-[helvetica] font-semibold text-xl text-black border-t-2 border-slate-200 mt-5 pt-5">Total Amount <span className="md:ml-24 lg:ml-80 sm:ml-80">$205.00</span> </h6>
                        </div>
                        <a href="./checkout">
                        <div className="bg-[#ff9f0d] mt-5 grid place-content-center px-5 py-5 text-lg text-white font-semibold">Proceed to Checkout</div>
                        </a>
                    </div>
                </div>
        </div>
        <Footer />
    </div>
  )
}

export default cart