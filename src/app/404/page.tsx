import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function contact () {
    return(
        <div className="">
                    <Header />
                    <div className="grid place-content-center mx-auto ">
                        <p className="font [helvetica] font-bold text-8xl text-[#ff9f0d] mx-auto">404</p>
                        <h4 className="font-[helvetica] font-bold text-3xl text-black mx-auto mt-10">Oops! Look likes something going wrong</h4>
                        <p className="text-xl text-slate-800 mx-auto mt-5">Page Cannot be found! we’ll have it figured out in no time.</p>
                        <p className="text-xl text-slate-800 mx-auto">Menwhile, cheek out these fresh ideas:</p>
                        <a href="../" className="mx-auto mt-5"><button className="bg-[#ff9f0d] text-white font-[helvetica] font-semibold text-lg rounded-md py-4 px-7">Go to home</button></a>
                    </div>
                    <Footer />
                </div>
    )

}