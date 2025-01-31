import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import image5 from "@/icons/image5.jpeg"
import image113 from "@/icons/image113.png"
import image41 from "@/icons/image41.png"
import image123 from "@/icons/image123.png"
import image124 from "@/icons/image124.png"
import image125 from "@/icons/image125.png"
import image126 from "@/icons/image126.png"
import image127 from "@/icons/image127.png"
import image128 from "@/icons/image128.png"
import image75 from "@/icons/image75.png"
import image82 from "@/icons/image82.png"
import image83 from "@/icons/image83.png"
import image84 from "@/icons/image84.png"
import feedbackBackgroundImage from "@/icons/feedbackBackgroundImage.png"
import feedbackImage from "@/icons/feedbackImage.png"
import quotes from "@/icons/Quotes.png"
import star from "@/icons/star.png"
import silverStar from "@/icons/silverStar.png"


export default function about () {
    return(
            <div className="bg-[#CDCDCD40]">
                <Header />
                    <div className="grid gird-content-center mx-auto">
                        {/* first portion starts here */}
                        <div className="xl:flex justify-center mx-auto xl:mx-72 gap-24">
                            <div className="flex justify-center  ">
                                <div className="m-1">
                                <Image src={image5} alt="" className="w-[336px] h-[536px] rounded-md"/>
                                </div>
                                <div className="mt-10">
                                    <div className="m-1">
                                    <Image src={image113} alt="" className="w-[309px] h-[271px] rounded-md"/>
                                    </div>
                                    <div className="m-1">
                                    <Image src={image41} alt="" className="w-[309px] h-[382px] rounded-md"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-32 w-[526px]">
                                <p className="font-sans text-lg text-[#ff9f0d] xl:mx-auto mx-10 md:mx-24 ">About us</p>
                                <h2 className="font-[helvetica] font-bold xl:text-5xl text-3xl text-black mx-10 md:mx-24 xl:mx-0 mt-3">Food is an important part Of a balanced Diet</h2>
                                <p className="text-base text-gray-700 mx-10 md:mx-20 xl:mx-0 mt-10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                                    Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                                <div className="flex gap-3 mt-8 mx-10 md:mx-24 xl:mx-0">
                                    <div className="">
                                        <button className="text-lg text-white py-4 px-12 rounded-md bg-[#ff9f0d]">Show more</button>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="bg-[#ff9f0d] rounded-full w-14 h-14 flex justify-center items-center">
                                            <Image src={image123} alt="" className="" />
                                        </div>
                                        <div className="text-base text-black flex items-center">Watch video </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* first portion ends here */}

                        {/* second portion starts here */}
                        <div className="xl:mx-72 mx-24">
                            <div className="mt-32">
                                <h2 className="font-[helvetica] font-bold xl:text-5xl sm:text-3xl text-black text-center">Why Choose us</h2>
                                <p className="font-[helvetica] text-base text-slate-800 text-center w-[520px] mx-auto mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
                            </div>
                            <div className=" xl:mt-10 mt-5">
                                <Image src={image124} alt="" className="" />
                            </div>
                            <div className="md:flex justify-between gap-32 md:mt-16">
                                <div className="mt-5 md:mt-0">
                                    <div className="flex justify-center ">
                                        <Image src={image125} alt="" className="w-20 h-20"/>
                                    </div>
                                    <h5 className="font-[helvetica] text-2xl text-black md:mt-10 mt-2 text-center ">Best Chef</h5>
                                    <p className="font-[helvetica] text-base text-slate-600 md:mt-7 mt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                         Quisque diam pellentesque bibendum non dui volutpat </p>
                                </div>
                                <div className="mt-5 md:mt-0">
                                    <div className="flex justify-center ">
                                        <Image src={image126} alt="" className="w-20 h-20"/>
                                    </div>
                                    <h5 className="font-[helvetica] text-2xl text-black md:mt-10 mt-2 text-center ">120 Item food</h5>
                                    <p className="font-[helvetica] text-base text-slate-600 md:mt-7 mt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                         Quisque diam pellentesque bibendum non dui volutpat </p>
                                </div>
                                <div className="mt-5 md:mt-0">
                                    <div className="flex justify-center ">
                                        <Image src={image127} alt="" className="w-20 h-20"/>
                                    </div>
                                    <h5 className="font-[helvetica] text-2xl text-black md:mt-10 mt-2 text-center ">Clean Environment</h5>
                                    <p className="font-[helvetica] text-base text-slate-600 md:mt-7 mt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                         Quisque diam pellentesque bibendum non dui volutpat </p>
                                </div>
                            </div>
                        </div>
                        {/* second portion ends here */}

                        {/* third portion starts here */}
                         <div className="">
                             {/* third portion for sm devices starts here */}
                             <div className="mt-32 border-2 lg:border-hidden border-[#ff9f0d]">
                                <div className="flex lg:hidden justify-around">
                                    <div className="">
                                        <Image src={image75} alt="" className="-w-[212px] h-[268px]" />
                                        <div className="w-[212px]">
                                            <h6 className="font-[helvetica] text-xl font-semibold text-center">M.Mohammad</h6>
                                            <p className="font-[helvetica] text-base text-center">Owner</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Image src={image82} alt="" className="w-[212px] h-[268px]" />
                                        <div className="w-[212px]">
                                            <h6 className="font-[helvetica] text-xl font-semibold text-center"> Mahmud kholil</h6>
                                            <p className="font-[helvetica] text-base text-center">Chef</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <Image src={image128} alt="" className="" />
                                </div>
                                <div className="relative top-[-172px] bg-[#FF9F0DD9] h-[172px]">
                                    <div className="mx-auto">
                                        <h2 className="font-[helvetica] font-bold xl:text-5xl text-3xl text-white text-center pt-10">Team Member</h2>
                                        <p className="text-base text-white text-center mt-3 w-[418px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Varius sed pharetra dictum neque massa congue</p>
                                    </div>
                                </div>
                                <div className="flex lg:hidden justify-around -mt-32">
                                    <div className="">
                                        <Image src={image83} alt="" className="w-[212px] h-[268px]" />
                                        <div className="w-[212px]">
                                            <h6 className="font-[helvetica] text-xl font-semibold text-center">Ataur Rahman</h6>
                                            <p className="font-[helvetica] text-base text-center">Founder</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Image src={image84} alt="" className="w-[212px] h-[268px]" />
                                        <div className="w-[212px]">
                                            <h6 className="font-[helvetica] text-xl font-semibold text-center">Monalisa holly</h6>
                                            <p className="font-[helvetica] text-base text-center">Specialist</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* third portion for sm devices ends here */}

                            {/* third portion for xl devices starts here */}
                            <div className="">
                                <div className="lg:flex hidden justify-center gap-5 -mt-[172px]">
                                    <div className="">
                                        <Image src={image75} alt="" className="w-[212px] h-[368px]" />
                                        <div className="w-[212px]">
                                            <h6 className="font-[helvetica] text-xl font-semibold text-center">M.Mohammad</h6>
                                            <p className="font-[helvetica] text-base text-center">Owner</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Image src={image82} alt="" className="w-[212px] h-[368px]" />
                                        <div className="w-[212px]">
                                            <h6 className="font-[helvetica] text-xl font-semibold text-center"> Mahmud kholil</h6>
                                            <p className="font-[helvetica] text-base text-center">Chef</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Image src={image83} alt="" className="w-[212px] h-[368px]" />
                                        <div className="w-[212px]">
                                            <h6 className="font-[helvetica] text-xl font-semibold text-center">Ataur Rahman</h6>
                                            <p className="font-[helvetica] text-base text-center">Founder</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Image src={image84} alt="" className="w-[212px] h-[368px]" />
                                        <div className="w-[212px]">
                                            <h6 className="font-[helvetica] text-xl font-semibold text-center">Monalisa holly</h6>
                                            <p className="font-[helvetica] text-base text-center">Specialist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* third portion for xl devices ends here */}
                         </div>
                        {/* third portion ends here */}

                        {/* forth portion starts here */}
                        <div className="lg:mx-32 2xl:mx-72">
                            <div className="mt-24">
                                <p className="lg:text-3xl text-2xl text-[#ff9f0d] text-center lg:text-start">Testimonials</p>
                                <h2 className="font-[helvetica] font-bold lg:text-5xl text-3xl text-center lg:text-start text-black">What our client are saying</h2>
                            </div>
                            <div className="bg-[#FFFFFF] xl:w-[868px] w-[650px] h-[450px] mx-auto  mt-32">
                                <div className="flex justify-end mx-20">
                                    <Image src={feedbackBackgroundImage} alt="" className="w-[395px] h-[500px]" />
                                </div>
                                <div className="mx-auto text-center lg:w-[700px] w-[600px] px-3 -mt-[570px]">
                                    <div className="flex justify-center">
                                        <Image src={feedbackImage} alt="" className="lg:w-32 w-28 lg:h-32 h-28"/>
                                    </div>
                                    <div className="flex justify-center mt-10">
                                        <Image src={quotes} alt="" className="lg:w-12 w-10 lg:h-12 h-10" />
                                    </div>
                                    <p className="font-[helvetica] text-lg text-gray-900 mt-10">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                                        Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus.
                                        Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                                    <div className="flex justify-center gap-2 mt-7">
                                        <Image src={star} alt="" className="w-6 h-6"/>
                                        <Image src={star} alt="" className="w-6 h-6"/>
                                        <Image src={star} alt="" className="w-6 h-6"/>
                                        <Image src={star} alt="" className="w-6 h-6"/>
                                        <Image src={silverStar} alt="" className="w-6 h-6"/>
                                    </div>
                                    <h5 className="font-[helvetica] text-2xl text-gray-950 mt-3">Alamin Hasan</h5>
                                    <p className="font-[helvetica] text-base text-gray-700 mt-2">Food Specialist</p>
                                </div>
                                <div className="flex justify-center gap-2 mt-24">
                                    <div className="w-4 h-4 bg-[#FF9F0D4D] rounded-full hover:bg-[#FF9F0D]"></div>
                                    <div className="w-4 h-4 bg-[#FF9F0D4D] rounded-full hover:bg-[#FF9F0D]"></div>
                                    <div className="w-4 h-4 bg-[#FF9F0D4D] rounded-full hover:bg-[#FF9F0D]"></div>
                                    <div className="w-4 h-4 bg-[#FF9F0D4D] rounded-full hover:bg-[#FF9F0D]"></div>
                                </div>
                            </div>
                        </div>
                        {/* forth portion ends here */}

                        {/* five portion starts here */}
                        <div className="mx-auto mt-48">
                            <h2 className="font-[helvetica] font-bold lg:text-5xl text-3xl text-gray-950 text-center">Our Food Menu</h2>
                            <p className="text-base text-center text-gray-500 w-[440px] mt-3 mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue</p>
                                <div className="border-b border-gray-300 ">
                                    <ul className="flex justify-center gap-10 mt-4">
                                        <li className="text-xl text-gray-500 hover:text-[#ff9f0d] border-b-2 hover:border-[#ff9f0d] pb-4 ">Breakfast</li>
                                        <li className="text-xl text-gray-500 hover:text-[#ff9f0d] border-b-2 hover:border-[#ff9f0d] pb-4 ">Lunch</li>
                                        <li className="text-xl text-gray-500 hover:text-[#ff9f0d] border-b-2 hover:border-[#ff9f0d] pb-4 ">Dinner</li>
                                        <li className="text-xl text-gray-500 hover:text-[#ff9f0d] border-b-2 hover:border-[#ff9f0d] pb-4 ">Dessert</li>
                                        <li className="text-xl text-gray-500 hover:text-[#ff9f0d] border-b-2 hover:border-[#ff9f0d] pb-4 ">Drink</li>
                                        <li className="text-xl text-gray-500 hover:text-[#ff9f0d] border-b-2 hover:border-[#ff9f0d] pb-4 ">Snack</li>
                                    </ul>
                                </div>
                                <div className="grid xl:grid-cols-2 place-content-center gap-5 mt-8">
                                    <div className="border-dashed border-b-2 border-gray-200 pb-4 mt-7">
                                        <div className="flex justify-between w-[648px] xl:w-[500px] 2xl:w-[648px]">
                                            <h5 className="font-[helvetica] font-bold text-2xl text-gray-950 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h5>
                                            <h5 className="font-[helvetica] font-bold text-2xl text-[#ff9f0d]">32$</h5>
                                        </div>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">Toasted French bread topped with romano, cheddar</p>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">560 CAL</p>
                                    </div>
                                    <div className="border-dashed border-b-2 border-gray-200 pb-4 mt-7">
                                        <div className="flex justify-between w-[648px] xl:w-[500px] 2xl:w-[648px]">
                                            <h5 className="font-[helvetica] font-bold text-2xl text-gray-950 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h5>
                                            <h5 className="font-[helvetica] font-bold text-2xl text-[#ff9f0d]">32$</h5>
                                        </div>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">Toasted French bread topped with romano, cheddar</p>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">560 CAL</p>
                                    </div>
                                    <div className="border-dashed border-b-2 border-gray-200 pb-4 mt-7">
                                        <div className="flex justify-between w-[648px] xl:w-[500px] 2xl:w-[648px]">
                                            <h5 className="font-[helvetica] font-bold text-2xl text-gray-950 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h5>
                                            <h5 className="font-[helvetica] font-bold text-2xl text-[#ff9f0d]">32$</h5>
                                        </div>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">Toasted French bread topped with romano, cheddar</p>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">560 CAL</p>
                                    </div>
                                    <div className="border-dashed border-b-2 border-gray-200 pb-4 mt-7">
                                        <div className="flex justify-between w-[648px] xl:w-[500px] 2xl:w-[648px]">
                                            <h5 className="font-[helvetica] font-bold text-2xl text-gray-950 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h5>
                                            <h5 className="font-[helvetica] font-bold text-2xl text-[#ff9f0d]">32$</h5>
                                        </div>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">Toasted French bread topped with romano, cheddar</p>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">560 CAL</p>
                                    </div>
                                    <div className="border-dashed border-b-2 border-gray-200 pb-4 mt-7">
                                        <div className="flex justify-between w-[648px] xl:w-[500px] 2xl:w-[648px]">
                                            <h5 className="font-[helvetica] font-bold text-2xl text-gray-950 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h5>
                                            <h5 className="font-[helvetica] font-bold text-2xl text-[#ff9f0d]">32$</h5>
                                        </div>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">Toasted French bread topped with romano, cheddar</p>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">560 CAL</p>
                                    </div>
                                    <div className="border-dashed border-b-2 border-gray-200 pb-4 mt-7">
                                        <div className="flex justify-between w-[648px] xl:w-[500px] 2xl:w-[648px]">
                                            <h5 className="font-[helvetica] font-bold text-2xl text-gray-950 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h5>
                                            <h5 className="font-[helvetica] font-bold text-2xl text-[#ff9f0d]">32$</h5>
                                        </div>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">Toasted French bread topped with romano, cheddar</p>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">560 CAL</p>
                                    </div>
                                    <div className="border-dashed border-b-2 border-gray-200 pb-4 mt-7">
                                        <div className="flex justify-between w-[648px] xl:w-[500px] 2xl:w-[648px]">
                                            <h5 className="font-[helvetica] font-bold text-2xl text-gray-950 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h5>
                                            <h5 className="font-[helvetica] font-bold text-2xl text-[#ff9f0d]">32$</h5>
                                        </div>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">Toasted French bread topped with romano, cheddar</p>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">560 CAL</p>
                                    </div>
                                    <div className="border-dashed border-b-2 border-gray-200 pb-4 mt-7">
                                        <div className="flex justify-between w-[648px] xl:w-[500px] 2xl:w-[648px]">
                                            <h5 className="font-[helvetica] font-bold text-2xl text-gray-950 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h5>
                                            <h5 className="font-[helvetica] font-bold text-2xl text-[#ff9f0d]">32$</h5>
                                        </div>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">Toasted French bread topped with romano, cheddar</p>
                                        <p className="font-[helvetica] text-base text-gray-700 mt-2">560 CAL</p>
                                    </div>
                                </div>
                            <a href="./menu" className="flex justify-center"><button className="font-[helvetica] text-lg text-[#ff9f0d] hover:text-white border border-[#ff9f0d] hover:bg-[#ff9f0d] py-3 px-8 m-16">View menu</button></a>
                        </div>
                        {/* five portion ends here */}
                    </div>
                
                  <Footer /> 
            </div>
        
    )

}