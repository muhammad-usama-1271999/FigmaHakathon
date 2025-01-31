
import Image from "next/image"
import Footer from "@/components/Footer"
import backgroundImage from "@/icons/backgroundimage.png"
import chefCap from "@/icons/cheefCap.png"
import burgerDrink from "@/icons/burgerDrink.png"
import spoon from "@/icons/spon.png"
import pizzaSlice from "@/icons/pizzaSlice.png"
import Header from "@/components/Header"
import image31 from "@/icons/image31.png"
import image8 from "@/icons/image8.jpeg"
import image32 from "@/icons/image32.png"
import image33 from "@/icons/image33.png"
import image34 from "@/icons/image34.png"
import image35 from "@/icons/image35.png"
import image36 from "@/icons/image36.png"
import image37 from "@/icons/image37.png"
import image38 from "@/icons/image38.png"
import image39 from "@/icons/image39.png"
import image40 from "@/icons/image40.png"

export default function menu () {
    return(
        <div className="">
            <Header />
            {/* header portion completed here */}

            {/* portion 2 end here */}
            <div className="xl:flex justify-center gap-10 mx-3 lg:mx-auto xl:mx-72 ">
            <div className="xl:hidden sm:grid place-content-center">
                  <Image src={image34} alt="coffee cup" className="w-[25px] h-[25px]" />
                  <h2 className=" font-[helvetica] font-bold text-2xl lg:text-5xl text-[#333333]">Starter Menu</h2>
                </div>
              <div className="flex justify-center xl:justify-end ">
                <Image src={image31} alt="some food" className=" xl:w-[448px] w-[336px] xl:h-[626px] h-[369px]"/>
              </div>
              <div className=" gap-2 p-3 lg:w-[700px] mx-auto xl:mx-10">
                <div className="hidden xl:grid">
                  <Image src={image34} alt="coffee cup" className="w-[25px] h-[25px]" />
                  <h2 className=" font-[helvetica] font-bold text-2xl lg:text-5xl text-[#333333]">Starter Menu</h2>
                </div>
                <div className="">
                  <div className="flex justify-between ">
                    <h5 className=" font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h5>
                    <h5 className=" font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">32$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs  text-[#333333]">Toasted French bread topped with romano, cheddar</p>
                  <p className=" font-[helvetica] lg:text-base text-xs  text-[#333333]">560 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between ">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Berries and creme tart</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">43$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs  text-[#333333]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="font-[helvetica] lg:text-base text-xs  text-[#333333]">700 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between ">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Tormentoso Bush Pizza Pintoage</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">14$</h5>
                  </div>
                  <p className="font-[helvetica] lg:text-base text-xs  text-[#333333]">Ground cumin, avocados, peeled and cubed</p>
                  <p className="font-[helvetica] lg:text-base text-xs  text-[#333333]">1000 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between ">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Spicy Vegan Potato Curry</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">35$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs  text-[#333333]">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="font-[helvetica] lg:text-base text-xs  text-[#333333]">560 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
              </div>
            </div>
            {/* portion 2 end here */}

            {/* portion 3 started here */}
            <div className="xl:flex justify-center gap-10 mt-16 mx-3 lg:mx-auto xl:mx-72 ">
              <div className="xl:hidden grid place-content-center">
                  <Image src={image34} alt="coffee cup" className="w-[25px] h-[25px]" />
                  <h2 className=" font-[helvetica] font-bold text-[48px] text-[#333333]">Main Course</h2>
              </div>
              <div className="flex justify-center xl:hidden ">
                <Image src={image8} alt="some food" className=" xl:w-[448px] w-[336px] xl:h-[626px] h-[369px]"/>
              </div>
              <div className=" gap-2 p-3 lg:w-[700px] mx-auto xl:mx-10 ">
                <div className="hidden xl:grid">
                  <Image src={image34} alt="coffee cup" className="w-[25px] h-[25px]" />
                  <h2 className=" font-[helvetica] font-bold text-2xl lg:text-5xl text-[#333333]">Main Course</h2>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <h5 className=" font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Optic Big Breakfast Combo Menu</h5>
                    <h5 className=" font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">32$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs  text-[#333333]">Toasted French bread topped with romano, cheddar</p>
                  <p className=" font-[helvetica] lg:text-base text-xs  text-[#333333]">560 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Cashew Chicken With Stir-Fry</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">43$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs  text-[#333333]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="font-[helvetica] lg:text-base text-xs  text-[#333333]">700 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]"> Vegetables & Green Salad</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">14$</h5>
                  </div>
                  <p className="font-[helvetica] lg:text-base text-xs  text-[#333333]">Ground cumin, avocados, peeled and cubed</p>
                  <p className="font-[helvetica] lg:text-base text-xs  text-[#333333]">1000 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Spicy Vegan Potato Curry</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">35$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs  text-[#333333]">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="font-[helvetica] lg:text-base text-xs  text-[#333333]">560 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
              </div>
              <div className="xl:flex justify-center hidden ">
                <Image src={image8} alt="some food" className=" xl:w-[448px] w-[336px] xl:h-[626px] h-[369px]"/>
              </div>
            </div>
            {/* portion 3 end here */}

            {/* portion 4 started here */}
            <div className="mt-24">
      <Image src={backgroundImage} alt="backgroundImage" className=" " />
      <div className="relative -mt-40 xl:-mt-72 bg-[#0D0D0DD9] p-4 xl:p-10">
        <div className="mx-auto flex justify-around flex-wrap ">
          <div className="grid place-content-center xl:gap-3 ">
            <Image src={chefCap} alt="chefCap" className=" xl:w-[120px] w-16 xl:h-[120px] h-16 mx-auto" />
            <h5 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-2xl text-sm ">Professional Chefs</h5>
            <h3 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-5xl text-base text-center ">420</h3>
          </div>
          <div className="grid place-content-center xl:gap-3">
          <Image src={burgerDrink} alt="chefCap" className=" xl:w-[120px] w-16 xl:h-[120px] h-16 mx-auto" />
          <h5 className="font-[helvetica] font-bold text-[#ffffff] xl:text-2xl text-sm">Items of food</h5>
            <h3 className="font-[helvetica] font-bold text-[#ffffff] xl:text-5xl text-base text-center ">320</h3>
          </div>
          <div className="grid place-content-center xl:gap-3">
          <Image src={spoon} alt="chefCap" className=" xl:w-[120px] w-16 xl:h-[120px] h-16 mx-auto" />
          <h5 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-2xl text-sm">Years Of Experienced</h5>
            <h3 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-5xl text-base text-center ">30+</h3>
          </div>
          <div className="grid place-content-center xl:gap-3">
          <Image src={pizzaSlice} alt="chefCap" className=" xl:w-[120px] w-16 xl:h-[120px] h-16 mx-auto" />
          <h5 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-2xl text-sm">Happy Customers</h5>
            <h3 className="font-[helvetica] font-bold text-[#ffffff] xl:text-5xl text-base text-center">220</h3>
          </div>
        </div>
      </div>
    </div>
            {/* portion 4 end here */}

           {/* portion 5started here */}
           <div className="xl:flex justify-center gap-10 mt-32 mx-3 lg:mx-auto xl:mx-72 ">
            <div className="xl:hidden sm:grid place-content-center">
                  <Image src={image34} alt="coffee cup" className="w-[25px] h-[25px]" />
                  <h2 className=" font-[helvetica] font-bold text-2xl lg:text-5xl text-[#333333]">Dessert</h2>
                </div>
              <div className="flex justify-center xl:justify-end ">
                <Image src={image32} alt="some food" className=" xl:w-[448px] w-[336px] xl:h-[626px] h-[369px]"/>
              </div>
              <div className=" gap-2 p-3 lg:w-[700px] mx-auto xl:mx-10">
                <div className="hidden xl:grid">
                  <Image src={image34} alt="coffee cup" className="w-[25px] h-[25px]" />
                  <h2 className=" font-[helvetica] font-bold text-[48px] text-[#333333]">Dessert</h2>
                </div>
                <div className="">
                  <div className="flex  justify-between">
                    <h5 className=" font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Fig and lemon cake</h5>
                    <h5 className=" font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">32$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs text-[#333333]">Toasted French bread topped with romano, cheddar</p>
                  <p className=" font-[helvetica] lg:text-base text-xs text-[#333333]">560 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Creamy mascarpone cake</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">43$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs text-[#333333]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="font-[helvetica] lg:text-base text-xs text-[#333333]">700 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between ">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Pastry, blueberries, lemon juice</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">14$</h5>
                  </div>
                  <p className="font-[helvetica] lg:text-base text-xs text-[#333333]">Ground cumin, avocados, peeled and cubed</p>
                  <p className="font-[helvetica] lg:text-base text-xs text-[#333333]">1000 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Pain au chocolat</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">35$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs text-[#333333]">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="font-[helvetica] lg:text-base text-xs text-[#333333]">560 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
              </div>
            </div>
            {/* portion 5 end here */}

            {/* portion 6 started here */}
            <div className="xl:flex justify-center gap-10 mt-16 mx-3 lg:mx-auto xl:mx-72 ">
              <div className="xl:hidden grid place-content-center">
                  <Image src={image34} alt="coffee cup" className="w-[25px] h-[25px]" />
                  <h2 className=" font-[helvetica] font-bold text-2xl lg:text-5xl text-[#333333]">Drinks</h2>
              </div>
              <div className="flex justify-center xl:hidden ">
                <Image src={image33} alt="some food" className=" xl:w-[448px] w-[336px] xl:h-[626px] h-[369px]"/>
              </div>
              <div className=" gap-2 p-3 lg:w-[700px] mx-auto xl:mx-10">
                <div className="hidden xl:grid">
                  <Image src={image34} alt="coffee cup" className="w-[25px] h-[25px]" />
                  <h2 className=" font-[helvetica] font-bold text-[48px] text-[#333333]">Drinks</h2>
                </div>
                <div className="">
                  <div className="flex justify-between ">
                    <h5 className=" font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Caffè macchiato</h5>
                    <h5 className=" font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">32$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs text-[#333333]">Toasted French bread topped with romano, cheddar</p>
                  <p className=" font-[helvetica] lg:text-base text-xs text-[#333333]">560 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Aperol Spritz Capacianno</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">43$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs text-[#333333]">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="font-[helvetica] lg:text-base text-xs text-[#333333]">700 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Caffe Latte Campuri</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">14$</h5>
                  </div>
                  <p className="font-[helvetica] lg:text-base text-xs text-[#333333]">Ground cumin, avocados, peeled and cubed</p>
                  <p className="font-[helvetica] lg:text-base text-xs text-[#333333]">1000 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#333333] hover:text-[#ff9f0d]">Tormentoso BushTea Pintoage</h5>
                    <h5 className="font-[helvetica] font-bold text-sm lg:text-2xl text-[#ff9f0d]">35$</h5>
                  </div>
                  <p className=" font-[helvetica] lg:text-base text-xs text-[#333333]">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="font-[helvetica] lg:text-base text-xs text-[#333333]">560 CAL</p>
                  <div className="mt-4 border-[2px] border-[#E0E0E0] border-dashed "></div>
                </div>
              </div>
              <div className="xl:flex justify-center hidden ">
                <Image src={image33} alt="some food" className=" xl:w-[448px] w-[336px] xl:h-[626px] h-[369px]"/>
              </div>
            </div>
            {/* portion 6 end here */}
            
            {/* portion 7 started here */}
            <div className=" mx-6 mt-16 ">
              <div className="mx-auto grid place-content-center ">
                <p className="font-normal text-xl text-black">Partners & Clients</p>
              </div>
              <div className="mx-auto grid place-content-center">
                <h2 className="font-[helvetica] font-bold xl:text-5xl text-3xl text-black">We work with the best pepole</h2>
              </div>
              <div className="grid grid-cols-6 gap-2 mt-20">
                <div className="">
                  <Image src={image35} alt="restaurant picture" className=""/>
                </div>
                <div className="">
                  <Image src={image36} alt="restaurant picture" className=""/>
                </div>
                <div className="">
                  <Image src={image37} alt="restaurant picture" className=""/>
                </div>
                <div className="">
                  <Image src={image38} alt="restaurant picture" className=""/>
                </div>
                <div className="">
                  <Image src={image39} alt="restaurant picture" className=""/>
                </div>
                <div className="">
                  <Image src={image40} alt="restaurant picture" className=""/>
                </div>
              </div>
            </div>
            {/* portion 7 end */}

            {/* footer portion */}
                <Footer />
        </div>
    )
}