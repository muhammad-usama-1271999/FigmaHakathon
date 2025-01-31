import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import image41 from "@/icons/image41.png"
import image42 from "@/icons/image42.png"
import image43 from "@/icons/image43.png"
import image44 from "@/icons/image44.png"
import image45 from "@/icons/image45.png"
import image46 from "@/icons/image46.png"
import image47 from "@/icons/image47.png"
import image48 from "@/icons/image48.png"
import image49 from "@/icons/image49.png"
import searchIcon from "@/icons/searchIcon.png"
import image51 from "@/icons/image51.png"
import image52 from "@/icons/image52.png"
import image53 from "@/icons/image53.png"
import star from "@/icons/star.png"
import silverStar from "@/icons/silverStar.png"

export default function shop () {
    return(
        <div className="">
                    <Header />
                    <div className="flex justify-center flex-wrap mx lg:mx-3">
                        <div className="mx-auto">
                            <div className="flex justify-evenly">
                                <div className="w-[px] h-[46px] font-normal text-xl mt-2 mx-2">
                                    sort :
                                </div>
                                <div className="w-[px] h-[46px] font-normal text-xl mt-2 mx-2">
                                    show :
                                </div>
                            </div>
                            <div className="flex justify-center flex-wrap">
                                <div className="">
                                    <Image src={image41} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Fresh Lime</p>
                                    <p className="text-[#FF9F0D]">$38.00 <del className="text-slate-400"> $45.00</del></p>
                                </div>
                                <div className="">
                                    <Image src={image42} alt="some food" className="w-[312px] h-[267px]" />
                                    <p className="w-[166px] h-[36px] font-[inter] text-[20px] font-bold">Chocolate Muffin</p>
                                    <p className="text-[#FF9F0D]">$28.00 </p>
                                </div>
                                <div className="">
                                    <Image src={image43} alt="some food" className="w-[312px] h-[267px]" />
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Burger</p>
                                    <p className="text-[#FF9F0D]">$21.00 <del className="text-slate-400"> $45.00</del></p>
                                </div>
                                <div className="">
                                    <Image src={image44} alt="some food" className="w-[312px] h-[267px]" />
                                    <p className="w-[146px] h-[36px] font-[inter] text-[20px] font-bold">Country Burger</p>
                                    <p className="text-[#FF9F0D]">$45.00</p>
                                </div>
                                <div className="">
                                    <Image src={image45} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Drink</p>
                                    <p className="text-[#FF9F0D]">$23.00 <del className="text-slate-400"> $45.00</del></p>
                                </div>
                                <div className="">
                                    <Image src={image46} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Pizza</p>
                                    <p className="text-[#FF9F0D]">$43.00 <del className="text-slate-400"> $45.00</del></p>
                                </div>
                                <div className="">
                                    <Image src={image47} alt="some food" className="w-[312px] h-[267px]" />
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Cheese Butter</p>
                                    <p className="text-[#FF9F0D]">$10.00 </p>
                                </div>
                                <div className="">
                                    <Image src={image48} alt="some food" className="w-[312px] h-[267px]" />
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Sandwiches</p>
                                    <p className="text-[#FF9F0D]">$25.00 </p>
                                </div>
                                <div className="">
                                    <Image src={image49} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Chicken Chup</p>
                                    <p className="text-[#FF9F0D]">$12.00</p>
                                </div>
                                <div className="">
                                    <Image src={image44} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[146px] h-[36px] font-[inter] text-[20px] font-bold">Country Burger</p>
                                    <p className="text-[#FF9F0D]">$45.00 </p>
                                </div>
                                <div className="">
                                    <Image src={image45} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Drink</p>
                                    <p className="text-[#FF9F0D]">$23.00 <del className="text-slate-400"> $45.00</del></p>
                                </div>
                                <div className="">
                                    <Image src={image46} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Pizza</p>
                                    <p className="text-[#FF9F0D]">$43.00</p>
                                </div>
                                <div className="">
                                    <Image src={image47} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Cheese Butter</p>
                                    <p className="text-[#FF9F0D]">$10.00 </p>
                                </div>
                                <div className="">
                                    <Image src={image48} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Sandwiches</p>
                                    <p className="text-[#FF9F0D]">$25.00 </p>
                                </div>
                                <div className="">
                                    <Image src={image49} alt="some food" className="w-[312px] h-[267px]"/>
                                    <p className="w-[126px] h-[36px] font-[inter] text-[20px] font-bold">Chicken Chup</p>
                                    <p className="text-[#FF9F0D]">$12.00 </p>
                                </div>
                            </div>
                            <div className="">
                                <ul className=" gap-5 m-3 hidden">
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">{"<<"}</li>
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">1</li>
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">2</li>
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">3</li>
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">{">>"}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mx-auto h-[1580px] lg:w-96 border-[1px] border-slate-300 rounded-2xl">
                            <div className="">
                                <input type="input" className="w-[248px] h-[46px] bg-yellow-100 grid mt-7 mx-7" placeholder="Search Product"/>
                                <div className="relative left-[229px] top-[-46px] w-[46px] h-[46px] bg-[#ff9f0d] grid place-content-center">
                                    <Image src={searchIcon} alt="searchIcon" className=""/>
                                </div>
                                <div className="grid gap-5 mx-7">
                                    <div><h6 className="relative top-[-13px] font-[helvetica] font-bold text-2xl">Category</h6></div>
                                    <div>
                                        <input type="checkbox" className="" />
                                        <label htmlFor="Sandwiches" className="relative left-[6px]">Sandwiches</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="" />
                                        <label htmlFor="Burger" className="relative left-[6px]">Burger</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="" />
                                        <label htmlFor="Chicken Chup" className="relative left-[6px]">Chicken Chup</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="" />
                                        <label htmlFor="Drink" className="relative left-[6px]">Drink</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="" />
                                        <label htmlFor="Pizza" className="relative left-[6px]">Pizza</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="" />
                                        <label htmlFor="Thi" className="relative left-[6px]">Thi</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="" />
                                        <label htmlFor="Non Veg" className="relative left-[6px]">Non Veg</label>
                                    </div>
                                    <div className="">
                                        <input type="checkbox" className="" />
                                        <label htmlFor="Uncategorized" className="relative left-[6px]">Uncategorized</label>
                                    </div>
                                </div>
                                <div className="">
                                    <Image src={image51} alt="some food" className="relative left-7 top-7 w-[248px] h-[286px]"/>
                                    <p className="relative font-[inter] font-bold text-xl text-white left-12 top-[-230px]">Perfect Taste</p>
                                    <h6 className="relative font-extrabold  text-xl text-white left-12 top-[-230px]">Classic Restaurant</h6>
                                    <p className="relative font-[inter] font-bold text-xl text-[#ff9f0d] left-12 top-[-220px]">45.00$</p>
                                    <p className="relative font-[inter] text-xl text-white left-12 top-[-120px]">Shop Now</p>
                                    <Image src={image53} alt="aero" className="relative h-[25px] w-[25px] top-[-148px] left-36"/>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <h6 className="relative left-7 top-[-90px] font-[helvetica] font-bold text-xl text-black">Filter By Price</h6>
                                    <div className="-mt-16 mx-4">
                                        <input type="range" className="w-full accent-[#ff9f0d] " />
                                    </div>
                                    <span className="relative text-xl text-slate-400 mx-6 top-[20px]">From $0 to $8000</span>
                                    <span className="relative text-xl text-slate-400 mx-6 top-[20px]">Filter</span>
                                    <div className="grid gap-4 ml-6 mt-12">
                                        <div className="font-[helvetica] text-2xl text-black font-bold">Latest Products</div>
                                        <div className="grid grid-cols-3">
                                            <div className="">
                                                <Image src={image52} alt="" className="w-[72px] h-[65px] " />
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-[helvetica] text-lg text-slate-600">Pizza</span>
                                                <div className="grid grid-cols-5 w-20">
                                                    <Image src={star} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={star} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                </div>
                                                <p className="font-[helvetica] text-lg text-slate-600">$35.00</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <div className="">
                                                <Image src={image52} alt="" className="w-[72px] h-[65px] " />
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-[helvetica] text-lg text-slate-600">Cupchake</span>
                                                <div className="grid grid-cols-5 w-20">
                                                    <Image src={star} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={star} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                </div>
                                                <p className="font-[helvetica] text-lg text-slate-600">$35.00</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <div className="">
                                                <Image src={image52} alt="" className="w-[72px] h-[65px] " />
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-[helvetica] text-lg text-slate-600">Cookies</span>
                                                <div className="grid grid-cols-5 w-20">
                                                    <Image src={star} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={star} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                </div>
                                                <p className="font-[helvetica] text-lg text-slate-600">$35.00</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <div className="">
                                                <Image src={image52} alt="" className="w-[72px] h-[65px] " />
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-[helvetica] text-lg text-slate-600">Burger</span>
                                                <div className="grid grid-cols-5 w-20">
                                                    <Image src={star} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={star} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                    <Image src={silverStar} alt="" className="w-[12px] h-[11px]" />
                                                </div>
                                                <p className="font-[helvetica] text-lg text-slate-600">$35.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-5">
                                    <h6 className="mx-auto font-[helvetica] text-2xl text-black font-bold">Product Tags</h6>
                                    <div className="grid grid-cols-3">
                                        <button className="text-black font-[inter] text-xl border-b-2 m-2 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">Services</button>
                                        <button className="text-black font-[inter] text-xl border-b-2 m-2 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">Our Menu</button>
                                        <button className="text-black font-[inter] text-xl border-b-2 m-2 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">Pizza</button>
                                        <button className="text-black font-[inter] text-xl border-b-2 m-2 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">Cupcake</button>
                                        <button className="text-black font-[inter] text-xl border-b-2 m-2 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">Burger</button>
                                        <button className="text-black font-[inter] text-xl border-b-2 m-2 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">Cookies</button>
                                        <button className="text-black font-[inter] text-xl border-b-2 m-2 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">Our Shop</button>
                                        <button className="col-span-2 text-black font-[inter] text-xl border-b-2 m-2 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">Tandoori Chicken</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                                <ul className="flex justify-center lg:gap-5 gap-3 m-3 2xl:hidden">
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">{"<<"}</li>
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">1</li>
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">2</li>
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">3</li>
                                    <li className="w-[50px] h-[50px] border border-[#ff9f0d] text-xl text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white grid place-content-center">{">>"}</li>
                                </ul>
                            </div>
                    </div>
                    <Footer />
                </div>
    )

}