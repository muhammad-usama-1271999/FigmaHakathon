import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import image121 from "@/icons/image121.png"
import image122 from "@/icons/image122.png"

export default function signUp () {
    return(
        <div className="">
                    <Header />
                    <div className="grid place-content-center mx-auto w-[500px] p-5 my-20 shadow-2xl shadow-yellow-100 ">
                        <h5 className="font-[helvetica] font-bold text-xl text-black my-5">Sign Up</h5>
                        <input type="text" className="h-16 border border-slate-200 w-[400px] my-2 text-xl" placeholder="   Name" required/>
                        <input type="email" className="h-16 border border-slate-200 w-[400px] my-2 text-xl" placeholder="   Email" pattern=".+@example\.com" required/>
                        <input type="password" className="h-16 border border-slate-200 w-[400px] my-2 text-xl" placeholder="   Password" required />
                        <div className="h-16 w-[400px] my-2 text-xl">
                            <input type="checkbox" className="mr-2 p-4 accent-yellow-500" /><label>Remember me?</label>
                        </div>
                        <button className="py-3 bg-[#ff9f0d] text-white font-[helvetica] text-lg">Sign Up</button>
                        <div className="flex justify-end">
                            <button className="text-sm text-slate-500 py-3">Forget password?</button>
                        </div>
                        <div className="relative text-black text-sm border border-slate-200 p-3 w-12 mx-auto top-6 bg-white">OR</div>
                        <div className=" border-t border-slate-200 "></div>
                        <button className="border border-slate-200 mt-12 flex p-4">
                            <Image src={image121} alt="google icon" className="w-5 h-5" />
                            <p className="text-base text-slate-700 mx-auto">Sign up with Google</p>
                        </button>
                        <button className="border border-slate-200 my-6 flex p-4">
                            <Image src={image122} alt="google icon" className="w-5 h-5" />
                            <p className="text-base text-slate-700 mx-auto">Sign up with Apple</p>
                        </button>
                    </div>
                    <Footer />
                </div>
    )

}