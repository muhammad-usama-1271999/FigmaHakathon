import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import image59 from "@/icons/image59.png"
import image60 from "@/icons/image60.png"
import image61 from "@/icons/image61.png"
import image62 from "@/icons/image62.png"
import image63 from "@/icons/image63.png"
import image64 from "@/icons/image64.png"
import star from "@/icons/star.png"
import image65 from "@/icons/image65.png"
import image66 from "@/icons/image66.png"
import image67 from "@/icons/image67.png"
import image68 from "@/icons/image68.png"
import image69 from "@/icons/image69.png"
import image70 from "@/icons/image70.png"
import image71 from "@/icons/image71.png"
import image72 from "@/icons/image72.png"
import image41 from "@/icons/image41.png"
import image8 from "@/icons/image8.jpeg"

export default function shopDetails (){
    return(
        <div>
            <Header />
             <div className="px-5 grid place-content-center -mt-96">
                <div className=" gap-7 ">
                    <div className="xl:flex justify-center xl:gap-10 mx-auto">
                        <div className="xl:hidden grid place-content-center">
                            <p className="bg-[#ff9f0d] font-[inter] text-white text-xl py-2 px-4 w-24 rounded-lg">In stock</p>
                            <div className="flex gap-5 -mt-9 sm:ml-72">
                                <Image src={image64} alt="" className=""/>
                                <p className="text-slate-500 text-xl">Prev</p>
                                <p className="text-slate-500 text-xl">Next</p>
                                <Image src={image64} alt="" className="rotate-180"/>
                            </div>
                             <h2 className="font-[helvetica] font-bold text-black text-5xl my-10">Yummy Chicken Chup</h2>
                        </div>
                        <div className="flex justify-center gap-4 mx-auto xl:mx-0 ">
                            <div className="">
                                <Image src={image59} alt="" className="w-[132px] h-32 rounded-md my-4"/>
                                <Image src={image60} alt="" className="w-[132px] h-32 rounded-md my-4"/>
                                <Image src={image61} alt="" className="w-[132px] h-32 rounded-md my-4"/>
                                <Image src={image62} alt="" className="w-[132px] h-32 rounded-md my-4"/>
                            </div>
                            <div className="">
                                <Image src={image63} alt="" className="w-[491px] h-[596px] rounded-md"/>
                            </div>
                        </div>
                        <div className="grid place-content-center xl:m-0 m-10">
                            <div className="hidden xl:grid">
                                <p className="bg-[#ff9f0d] font-[inter] text-white text-xl py-2 px-4 w-24 rounded-lg">In stock</p>
                                <div className="flex gap-5 -mt-9 sm:ml-72">
                                    <Image src={image64} alt="" className=""/>
                                    <p className="text-slate-500 text-xl">Prev</p>
                                    <p className="text-slate-500 text-xl">Next</p>
                                    <Image src={image64} alt="" className="rotate-180"/>
                                </div>
                                <h2 className="font-[helvetica] font-bold text-black text-5xl my-10">Yummy Chicken Chup</h2>
                            </div>
                            <div className="">
                                <p className="font-[inter] text-slate-700 text-lg border-b-2 border-slate-200 pb-7 w-[600px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                                    bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum.
                                    Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                                <h4 className="font-[helvetica] font-bold text-black text-3xl my-7">54.00$  </h4>
                                <div className="flex gap-1">
                                    <Image src={star} alt="" className="h-5 w-5"/>
                                    <Image src={star} alt="" className="h-5 w-5"/>
                                    <Image src={star} alt="" className="h-5 w-5"/>
                                    <Image src={star} alt="" className="h-5 w-5"/>
                                    <Image src={star} alt="" className="h-5 w-5"/>
                                    <p className="font-[inter] text-lg text-slate-400 border-l border-slate-400 px-5 ml-5">5.0 Rating</p>
                                    <p className="font-[inter] text-lg text-slate-400 border-l border-slate-400 px-5">22 Review</p>
                                </div>
                                <p className=" text-xl text-black my-8">Dictum/cursus/Risus</p>
                                <div className="flex gap-5 border-b-2 border-r-slate-200 pb-7">
                                    <div className="border border-black flex items-center">
                                        <div className="text-4xl text-black px-5 cursor-pointer">-</div>
                                        <div className="text-2xl text-black border-x border-black px-5 cursor-pointer">1</div>
                                        <div className="text-3xl text-black px-5 cursor-pointer">+</div>
                                    </div>
                                    <div className="bg-[#ff9f0d] text-xl text-white py-2 px-5">Add to cart</div>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <Image src={image65} alt="" className="w-5 h-5"/>
                                    <p className="text-slate-600 text-xl">Add to Wishlist</p>
                                    <Image src={image66} alt="" className="w-5 h-5"/>
                                    <p className="text-slate-600 text-xl">Compare</p>
                                </div>
                                <p className="text-slate-600 text-xl mt-3"><span className="font-semibold">Category:</span> Pizza</p>
                                <p className="text-slate-600 text-xl mt-3"><span className="font-semibold">Tag:</span> Our Shop</p>
                                <div className="flex mt-5 gap-3">
                                    <p className="text-slate-600 text-xl">Share : </p>
                                    <Image src={image67} alt="" className="w-6 h-6"/>
                                    <Image src={image68} alt="" className="w-6 h-6"/>
                                    <Image src={image69} alt="" className="w-6 h-6"/>
                                    <Image src={image70} alt="" className="w-6 h-6"/>
                                    <Image src={image71} alt="" className="w-6 h-6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="flex lg:ml-72 mx-5">
                            <div className="bg-[#ff9f0d] py-2 px-4 font-[helvetica] text-white text-lg">Description</div>
                            <div className="py-2 px-4 font-[helvetica] text-black text-lg">Reviews (24)</div>
                        </div>
                        <p className="text-lg text-slate-600 lg:ml-72 mx-5 mt-10">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue,
                                 eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum.
                                  Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
                                   Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae.
                                    Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>

                        <p className="text-lg text-slate-600 lg:ml-72 mx-5 mt-10">Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec.
                             Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa.
                              Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum.
                               Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
                        
                        <h6 className="font-[helvetica] text-slate-600 text-xl lg:ml-72 mt-10 font-semibold">Key Benefits</h6>
                        <ul className=" mt-4 list-disc lg:ml-72 mx-5">
                            <li className="text-base text-slate-600 my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className="text-base text-slate-600 my-1">Maecenas ullamcorper est et massa mattis condimentum.</li>
                            <li className="text-base text-slate-600 my-1">Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                            <li className="text-base text-slate-600 my-1">Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                            <li className="text-base text-slate-600 my-1">Mauris eget diam magna, in blandit turpis.</li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2">
                        <h4 className="font-[helvetica] font-bold text-3xl text-black grid place-content-center">Similar Products</h4>
                        <div className="grid grid-cols-2 lg:grid-cols-4 mx-20">
                            <div className="m-5">
                                <Image src={image41} alt="" className="w-[312px] h-[267px]"/>
                                <p className="text-xl font-semibold">Fresh Lime</p>
                                <p className="text-[#FF9F0D] text-lg">$38.00 <del className="text-slate-400"> $45.00</del></p>
                            </div>
                            <div className="m-5">
                                <Image src={image72} alt="" className="w-[312px] h-[267px]"/>
                                <p className="text-xl font-semibold">Fresh Lime</p>
                                <p className="text-[#FF9F0D] text-lg">$28.00</p>
                            </div>
                            <div className="m-5">
                                <Image src={image8} alt="" className="w-[312px] h-[267px]"/>
                                <p className="text-xl font-semibold">Fresh Lime</p>
                                <p className="text-[#FF9F0D] text-lg">$21.00</p>
                            </div>
                            <div className="m-5">
                                <Image src={image41} alt="" className="w-[312px] h-[267px]"/>
                                <p className="text-xl font-semibold">Fresh Lime</p>
                                <p className="text-[#FF9F0D] text-lg">$38.00 <del className="text-slate-400"> $45.00</del></p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <Footer />
        </div>
    )
}