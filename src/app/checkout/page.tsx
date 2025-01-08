import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import image85 from "@/icons/image85.png"


export default function checkout(){
    return(
        <div>
            <Header />
            <div className="grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-3 md:mx-5 lg:mx-10 -mt-80">
                <div className="lg:col-span-2 md:col-span-1 ml-10">
                    <h6 className="font-[helvetica] font-bold text-black text-2xl pb-5">Shipping Address</h6>
                    <div className="grid lg:grid-cols-2 md:grid-cols-1">
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">First Name</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">Last name</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">Email address</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">Phone number</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">Company</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">Country</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">City</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">Zip code</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">Address 1</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 sm:grid sm:place-content-center lg:ml-0">
                            <label htmlFor="FirstName" className="text-lg pt-1">Address 2</label><br/>
                            <input type="text" id="name" className=" h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300" required/><br/>
                        </div>
                        <div className="m-1 pl-20 lg:ml-0 lg:col-span-2 md:col-span-1">
                            <h6 className="font-[helvetica] font-bold text-black text-2xl">Billing Address</h6>
                            <input type="checkbox" className="" />
                            <label htmlFor="Sandwiches" className="ml-2">Same as shipping address</label>
                        </div>
                        <div className="sm:grid sm:place-content-center lg:ml-0">
                            <div className="m-1 sm:grid sm:place-content-center lg:ml-0 text-slate-500 text-lg h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] border border-slate-300"><a href="./shopping-cart">{"<"} Back to cart</a></div>
                            </div>
                            <div className="sm:grid sm:place-content-center lg:ml-0">
                            <div className="m-1 sm:grid sm:place-content-center lg:ml-0 text-white text-lg h-[56px] sm:w-[450px] 2xl:w-[385px] lg:w-[400px] xl:w-[500px] md:w-[600px] rounded-[3px] bg-[#ff9f0d]">Proceed to shipping {" >"}</div>
                        </div>
                    </div>
                </div>
                <div className="border border-slate-200 sm:mt-10 2xl:mt-0 sm:mx-24 md:mx-40 lg:mx-60 xl:mx-80 2xl:mx-0 lg:col-span-2 2xl:col-span-1">
                    <div className="flex m-4 border-b border-slate-200 pb-5">
                        <Image src={image85} alt="" className="w-[83px] h-[88px] " />
                        <div className="ml-5">
                            <p className="text-base font-bold text-black">Chicken Tikka Kabab</p>
                            <p className="font-[helvetica] text-sm text-slate-600 mt-2">150 gm net</p>
                            <p className="font-[helvetica] text-sm text-slate-600 mt-2">50$</p>
                        </div>
                    </div>
                    <div className="flex m-4 border-b border-slate-200 pb-5">
                        <Image src={image85} alt="" className="w-[83px] h-[88px] " />
                        <div className="ml-5">
                            <p className="text-base font-bold text-black">Chicken Tikka Kabab</p>
                            <p className="font-[helvetica] text-sm text-slate-600 mt-2">150 gm net</p>
                            <p className="font-[helvetica] text-sm text-slate-600 mt-2">50$</p>
                        </div>
                    </div>
                    <div className="flex m-4 border-b border-slate-200 pb-5">
                        <Image src={image85} alt="" className="w-[83px] h-[88px] " />
                        <div className="ml-5">
                            <p className="text-base font-bold text-black">Chicken Tikka Kabab</p>
                            <p className="font-[helvetica] text-sm text-slate-600 mt-2">150 gm net</p>
                            <p className="font-[helvetica] text-sm text-slate-600 mt-2">50$</p>
                        </div>
                    </div>
                    <div className="mx-10 border-b border-slate-200">
                        <div className="flex justify-between p-5">
                            <p className="font-[helvetica] text-slate-600 text-lg">Sub-total</p>
                            <p className="font-[helvetica] text-slate-600 text-lg">130$</p>
                        </div>
                        <div className="flex justify-between p-5">
                            <p className="font-[helvetica] text-slate-600 text-lg">Shipping</p>
                            <p className="font-[helvetica] text-slate-600 text-lg">Free</p>
                        </div>
                        <div className="flex justify-between p-5">
                            <p className="font-[helvetica] text-slate-600 text-lg">Discount</p>
                            <p className="font-[helvetica] text-slate-600 text-lg">25%</p>
                        </div>
                        <div className="flex justify-between p-5">
                            <p className="font-[helvetica] text-slate-600 text-lg">Tax</p>
                            <p className="font-[helvetica] text-slate-600 text-lg">54.76$</p>
                        </div>
                    </div>
                    <div className="mx-10">
                        <div className="flex justify-between p-5 mt-3">
                            <p className="font-[helvetica] text-slate-600 text-lg">Total</p>
                            <p className="font-[helvetica] text-slate-600 text-lg">432.65$</p>
                        </div>
                        <div className="grid place-content-center py-3 mt-10 bg-[#ff9f0d] text-xl text-white rounded-md">Place an order</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}