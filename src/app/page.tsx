import Image from "next/image"
import Footer from "@/components/Footer"
import bag from "../icons/Handbag.png";
import searchIcon from "../icons/searchIcon.png"
import facebookIcon from "../icons/facebook.png"
import pIcon from "../icons/p.png"
import twitterIcon from "../icons/twitter.png"
import heroImage from "@/icons/heroImage.png"
import checkIcon from "../icons/check.png"
import boilEgg from "../icons/boilEgg.png"
import foodWithSauce from "../icons/foodWithSauce.jpeg"
import sandwich from "../icons/sandwich.jpeg"
import image1 from "../icons/image1.jpeg"
import image2 from "../icons/image2.jpeg"
import image3 from "../icons/image3.jpeg"
import image4 from"../icons/image4.jpeg"
import fancyLeave from "../icons/fancyLeave.png"
import image5 from"../icons/image5.jpeg"
import image7 from"../icons/image7.png"
import image8 from"../icons/image8.jpeg"
import image9 from"../icons/image9.jpeg"
import image10 from"../icons/image10.jpeg"
import hamburger from "../icons/Hamburger.png"
import cookie from "../icons/Cookie.png"
import wineGlass from "../icons/Wine.png"
import backgroundImage from "../icons/backgroundimage.png"
import chefCap from "../icons/cheefCap.png"
import burgerDrink from "../icons/burgerDrink.png"
import spoon from "../icons/spon.png"
import pizzaSlice from "../icons/pizzaSlice.png"
import doubleLeaves from "../icons/doubleLeaves.png"
import image11 from "../icons/image11.png"
import image12 from "../icons/image12.jpeg"
import image14 from "../icons/image14.jpeg"
import image15 from "../icons/image15.jpeg"
import image16 from "../icons/image16.jpeg"
import image17 from "../icons/image17.jpeg"
import image18 from "../icons/image18.jpeg"
import image20 from "../icons/image20.png"
import image21 from "../icons/image21.jpeg"
import image22 from "../icons/image22.jpeg"
import image23 from "../icons/image23.jpeg"
import image24 from "../icons/image24.jpeg"
import feedbackBackgroundImage from "../icons/feedbackBackgroundImage.png"
import feedbackImage from "../icons/feedbackImage.png"
import silverStar from "../icons/silverStar.png"
import star from "../icons/star.png"
import quotes from "../icons/Quotes.png"
import ninePortionBackground from "../icons/ninePortionBackground.png"
import youtubeIcon from "../icons/youtubeIcon.png"
import pizza from "../icons/pizza.png"
import thumbsUp from "../icons/ThumbsUp.png"
import chat from "../icons/ChatDots.png"
import share from "../icons/ShareNetwork.png"





export default function Home() {
  return (
    <div className="bg-black">
        {/*  main page div stared here */}
        {/*  first portion started here hero section */}
        <div className="">
          {/* navbar start */}
          <div className="flex justify-between px-20 bg-black">
            {/* list item start */}
            <div className="">
                <ul className="xl:flex gap-5 mt-8 hidden">
                    <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D] "><button><a href="../">Home</a></button></li>
                    <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./menu">Menu</a></button></li>
                    <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./shop">Shop</a></button></li>
                    <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./blog">Blog</a></button></li>
                    <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./about-us">About</a></button></li>
                    <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./pages">Pages</a></button></li>
                    <li className="text-[18px] font-[inter] text-[#ffffff] hover:text-[#FF9F0D]"><button><a href="./signUp">signUp</a></button></li>
                </ul>
            </div>
            {/* list item end */}

            <div className=" text-[#FF9F0D] text-5xl font-bold ">
              Fo<span className="text-[#ffffff]">odTuck</span>
            </div>

            {/* search portion start*/}
            <div className="flex mt-8">
              <div className="w-[310px] hidden h-[44px] border border-[#FF9F0D] rounded-[27px] xl:flex justify-around pt-2 gap-9">
                <div className=" text-white text-base leading-[24px] font-normal ">
                  Search....
                </div>
                <div className=" ">
                    <Image src={searchIcon} alt="searchIcon" className="w-[24px] h-[24px]  "/>
                </div>
              </div>
              <div className="">
                <button className="hover:bg-white"> <a href="./shopping-cart"><Image src={bag} alt="handbag" className=" w-[40px] h-[25px] m-2"/></a></button>
              </div>
              <div className="xl:hidden text-4xl text-white">&#8801;</div>
            </div>
          </div>
          {/* navbar end */}
          <div className="lg:flex justify-center mt-24 gap-10 mx-10">
            <div className="flex gap-10">
              {/* start icons line */}
              <div className="">
                <div className="border border-white h-[191px] w-0">
                  {/* line-11 upper side line   */}
                </div>
                <div className="my-10">
                  <Image src={facebookIcon} alt="facebookIcon" className="w-3 h-3 my-6"/>
                  <Image src={twitterIcon} alt="twitterIcon" className="w-3 h-3 my-6"/>
                  <Image src={pIcon} alt="pIcon" className="w-3 h-3 my-6"/>
                </div>
                <div className="border border-white h-[191px] w-0">
                </div>
              </div>
              {/* ends icons line */}
              {/* left lorem side start */}
              <div className="w-[482px] mt-24 ">
                <div className="text-[#ff9f0d] lg:text-3xl text-xl">
                  It's Quick & Amusing!
                </div>
                <h1 className="font-[helvetica] font-bold lg:text-6xl text-3xl text-[#ff9f0d] mt-3">
                  Th<span className="text-[#ffffff]">e Art of Speed Food Quality</span>
                </h1>
                <div className="text-base text-white mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
                </div>
                <button className="text-white text-base py-4 px-12 rounded-[30px] bg-[#ff9f0d] mt-10 hover:bg-yellow-500">
                    See Menu
                </button>
              </div>
            </div>
            {/* left lorem side end */}
      
            {/* right hero picture side start */}
            <div className="">
              <Image src={heroImage} alt="" className="xl:w-[877px] w-[577px] xl:h-[670px]" />
            </div>
            {/* right hero picture side end  */}
          </div>
        </div>
        {/*first portion completed hero section*/}

    {/* second portion stared here about us*/}
    <div className="flex justify-center gap-20  mx-10 mt-40">
      <div className="w-[600px] ">
        <h1 className="text-[#FF9F0D] font-helvetica font-bold lg:text-3xl text-xl">ABOUT US</h1>
        <h2 className="text-[#FF9F0D] font-helvetica font-bold lg:text-6xl text-3xl mt-5">We 
          <span className="text-[#ffffff]"> Create the best foody product</span></h2>
        <div className="lg:hidden">
          <Image src={boilEgg} alt="boilEgg with chapati" className="w-[460px] h-[230px] mb-5 rounded-md"/>
          <div className="flex gap-3">
            <Image src={foodWithSauce} alt="some foods with sauce" className="w-[230px] h-[182px] rounded-md"/>
            <Image src={sandwich} alt="sandwich" className="w-[230px] h-[182px] rounded-md"/>
          </div>
        </div>
        <p className="text-[#ffffff] font-inter font-bold text-base mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        <div className="flex gap-5 mt-10">
          <Image src={checkIcon} alt="checkIcon" className="" />
          <p className="text-[#ffffff]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        </div>
        <div className="flex gap-5 mt-10">
          <Image src={checkIcon} alt="checkIcon" className="" />
          <p className="text-[#ffffff]"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
        </div>
        <div className="flex gap-5 mt-10">
          <Image src={checkIcon} alt="checkIcon" className="" />
          <p className="text-[#ffffff]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <button className="text-white bg-[#FF9F0D] rounded-[30px] py-5 px-12 mt-10">
          See Menu
        </button>
      </div>
         
      <div className="hidden lg:grid ">
        <Image src={boilEgg} alt="boilEgg with chapati" className="w-[660px] h-[330px] mb-5 rounded-md"/>
        <div className="flex gap-3">
          <Image src={foodWithSauce} alt="some foods with sauce" className="w-[330px] h-[232px] rounded-md"/>
          <Image src={sandwich} alt="sandwich" className="w-[330px] h-[232px] rounded-md"/>
        </div>
      </div>
    </div>
    {/* second portion end here about us*/}

    {/* third portion start here food categary*/}
    <div className="mt-40">
      <h2 className="text-center text-[#FF9F0D] font-[helvetica] lg:text-3xl text-xl"> Food Category</h2>
      <h1 className="text-center text-[#FF9F0D] font-[helvetica] lg:text-5xl text-3xl mt-5">Ch
        <span className="text-[#ffffff]">oose Food Item</span></h1>
    
        {/* third portion background image  */}
      <div className="hidden 2xl:grid">
        <Image src={fancyLeave} alt="fancy leave picture" className="absolute w-[444px] h-[532px] top-[2010px] left-[1462px]"/>
      </div>


        {/* third portion images code start  */}
      <div className="flex justify-center flex-wrap gap-5 mt-12">
        <div>
          <Image src={image1} alt="some food" className=" w-[305px] h-[328px] rounded-[6px]"/>
            <p className="relative text-center text-[#FF9F0D] font-[inter] text-bold text-[24px] rounded-[6px] bg-[#ffffff] w-[125px] -mt-20">Save 30%</p>
            <p className="relative text-center text-[#FFffff] font-[inter] text-bold text-[26px] rounded-[6px] bg-[#FF9F0D] w-[206px]">Fast Food Dish</p>
        </div>
        <div>
          <Image src={image2} alt="some food" className=" w-[305px] h-[328px] rounded-[6px]"/>
        </div>
        <div>
          <Image src={image3} alt="some food" className=" w-[305px] h-[328px] rounded-[6px]"/>
        </div>
        <div>
          <Image src={image4} alt="some food" className=" w-[305px] h-[328px] rounded-[6px]"/>
        </div>
      </div>
      {/* third portion images code end here */}
      
    </div>  
    {/* third portion end here food categary] */}

    {/* fourth portion start here why choose us */}
    <div className="flex justify-center gap-20 flex-wrap mt-24"> 
      {/*  left side picture portion  */}
      <div className="">
        <div className="flex items-end gap-3 mb-3">
          <div>
            <Image src={image5} alt="some food" className="w-[362px] h-[356px] rounded-[6px]"/>
          </div>
          <div>
            <Image src={image2} alt="some food" className="w-[281px] h-[231px] rounded-[6px]"/>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <Image src={image7} alt="some food" className="w-[244px] h-[306px] rounded-[6px]"/>
          </div>
          <div>
            <Image  src={image8} alt="some food" className="w-[221px] h-[226px] rounded-[6px]"/>
          </div>
          <div className="grid gap-3">
            <div>
              <Image src={image9} alt="some food" className="w-[161px] h-[168px] rounded"/>
            </div>
            <div>
              <Image src={image10} alt="some food" className="w-[161px] h-[166px] rounded"/>
            </div>
          </div>
        </div>
      </div>
    {/* right side content portion */}
      <div className="w-[526px]">
        <div className="">
          <h2 className="font-[helvetica] text-[28px] text-[#FF9F0D]">why Choose us</h2>
        </div>
        <div className="mt-4">
          <h1 className="font-[helvetica] font-bold text-5xl text-[#FF9F0D]">Ex
            <span className=" text-[#FFffff]">tra ordinary taste And Experienced</span> </h1>
        </div>
        <div className="mt-9">
          <p className="font-[inter] text-[16px] text-[#ffffff]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
            volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices 
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        </div>
        <div className="flex gap-5 mt-6">
          <div className="rounded-[6px] bg-[#FF9F0D] p-5">
            <Image src={hamburger} alt="Hamburger" className="w-[56px] h-[56px]" />
          </div>
          <div className="rounded-[6px] bg-[#FF9F0D] p-5">
            <Image src={cookie} alt="cookie" className="w-[56px] h-[56px]" />
          </div>
          <div className="rounded-[6px] bg-[#FF9F0D] p-5">
            <Image src={wineGlass} alt="wineGlass" className="w-[56px] h-[56px]" />
          </div>
        </div>
        <div className="flex gap-12">
          <h3 className=" text-[#ffffff] font-[inter] text-[18px] p-2">Fast Food</h3>
          <h3 className=" text-[#ffffff] font-[inter] text-[18px] p-2">Lunch</h3>
          <h3 className=" text-[#ffffff] font-[inter] text-[18px] p-2">Dinner</h3>
        </div>
        <div className="">
          <div className="flex justify-around w-[374px] border-l-8 border-[#ff9f0d] bg-[#ffffff] rounded-md p-4">
            <div className="">
              <h3 className="font-[helvetica] text-[48px] font-bold text-[#FF9F0D]">30+</h3>
            </div>
            <div className="">
              <p className="font-[inter] text-[20px] text-[#1E1E1E]">Years of</p>
              <h5 className=" text-[24px] font-bold text-[#1E1E1E]">Experienced</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* fourth portion end here why choose us */}

    {/* fivth portion start here counting dishes, chef and experience */}
    <div className="mt-24">
      <Image src={backgroundImage} alt="backgroundImage" className=" " />
      <div className="relative -mt-40 xl:-mt-72 bg-[#0D0D0DD9] p-4 xl:p-10">
        <div className="mx-auto flex justify-around ">
          <div className="grid place-content-center xl:gap-3 ">
            <Image src={chefCap} alt="chefCap" className=" xl:w-[120px] w-16 xl:h-[120px] h-16" />
            <h5 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-[24px] text-sm ">Professional Chefs</h5>
            <h3 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-[48px] text-xl ">420</h3>
          </div>
          <div className="grid place-content-center xl:gap-3">
          <Image src={burgerDrink} alt="chefCap" className=" xl:w-[120px] w-16 xl:h-[120px] h-16" />
          <h5 className="font-[helvetica] font-bold text-[#ffffff] xl:text-[24px] text-sm">Items of food</h5>
            <h3 className="font-[helvetica] font-bold text-[#ffffff] xl:text-[48px] text-xl ">320</h3>
          </div>
          <div className="grid place-content-center xl:gap-3">
          <Image src={spoon} alt="chefCap" className=" xl:w-[120px] w-16 xl:h-[120px] h-16" />
          <h5 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-[24px] text-sm">Years Of Experienced</h5>
            <h3 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-[48px] text-xl ">30+</h3>
          </div>
          <div className="grid place-content-center xl:gap-3">
          <Image src={pizzaSlice} alt="chefCap" className=" xl:w-[120px] w-16 xl:h-[120px] h-16" />
          <h5 className=" font-[helvetica] font-bold text-[#ffffff] xl:text-[24px] text-sm">Happy Customers</h5>
            <h3 className="font-[helvetica] font-bold text-[#ffffff] xl:text-[48px] text-xl">220</h3>
          </div>
        </div>
      </div>
    </div>
    {/* fivth portion completed counting dishes, chef and experience*/}

    {/* sixth portion start menu here */}
    <div className="mt-32">
      <div className="mx-auto">
        <p className="font-[helvetica] text-[26px] text-[#FF9F0D] text-center">Choose & pick</p>
        <h3 className="font-[helvetica] font-bold text-[48px] text-[#FF9F0D] text-center">Fr
          <span className=" text-[#FFffff]">om Our Menu</span></h3>
        <div className="mt-14">
          <ul className="flex justify-center lg:gap-16 gap-10">
            <li className="font-[inter] text-[20px] text-[#ffffff] hover:text-[#FF9F0D]">Breakfast</li>
            <li className="font-[inter] text-[20px] text-[#FFffff] hover:text-[#FF9F0D]">Lunch</li>
            <li className="font-[inter] text-[20px] text-[#FFffff] hover:text-[#FF9F0D]">Dinner</li>
            <li className="font-[inter] text-[20px] text-[#FFffff] hover:text-[#FF9F0D]">Dessert</li>
            <li className="font-[inter] text-[20px] text-[#FFffff] hover:text-[#FF9F0D]">Drink</li>
            <li className="font-[inter] text-[20px] text-[#FFffff] hover:text-[#FF9F0D]">Snack</li>
            <li className="font-[inter] text-[20px] text-[#FFffff] hover:text-[#FF9F0D]">Suops</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center flex-wrap mt-14 gap-10">
        <div className="">
          <div className="">
            <Image src={doubleLeaves} alt="doubleLeaves" className="w-[515px] h-[406px]" />
          </div>
          <div className="flex justify-center -mt-96">
            <Image src={image11} alt="some food" className="w-[366px] h-[362px]" />
          </div>
        </div>
        <div className=" grid gap-8 grid-cols-2">
          <div className="flex gap-4">
            <div className="">
              <Image src={image12} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
            </div>
            <div className="">
              <h3 className="text-white font-bold text-[20px]">Lettuce Leaf</h3>
              <p className="font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="">
              <Image src={image8} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
            </div>
            <div className="">
              <h3 className="text-white font-bold text-[20px]">Glow Cheese</h3>
              <p className="font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="">
              <Image src={image14} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
            </div>
            <div className="">
              <h3 className="text-white font-bold text-[20px]">Fresh Breakfast</h3>
              <p className="font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="font-bold text-[28px] text-[#FF9F0D]">14.5$</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="">
              <Image src={image15} alt="some food" className=" w-[80px] h-[79px] rounded-[6px] rotate-90" />
            </div>
            <div className="">
              <h3 className="text-white font-bold text-[20px]">Italian Pizza</h3>
              <p className="font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="font-bold text-[28px] text-[#FF9F0D]">14.5$</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="">
              <Image src={image16} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
            </div>
            <div className="">
              <h3 className="text-white font-bold text-[20px]">Mild Butter</h3>
              <p className="font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="">
              <Image src={image17} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
            </div>
            <div className="">
              <h3 className="text-white font-bold text-[20px]">Sllice Beef</h3>
              <p className="font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="">
              <Image src={image18} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
            </div>
            <div className="">
              <h3 className="text-white font-bold text-[20px]">Fresh Bread</h3>
              <p className="font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="">
              <Image src={image2} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
            </div>
            <div className="">
              <h3 className="text-white font-bold text-[20px]">Mushaom Pizza</h3>
              <p className="font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* sixth portion completed menu here */}

    {/* seven portion start here meet our chef */}
    <div className="mt-32">
      <div className="">
        <h4 className="text-[#FF9F0D] font-[helvetica] text-[32px] text-center">Chefs</h4>
        <h2 className="text-[#FF9F0D] font-[helvetica] font-bold text-[48px] text-center">Me
          <span className="text-[#FFffff]">et Our Chef</span></h2>
      </div>
      <Image src={image20} alt="fancy leave for backgroun image" className="w-[409px] h-[531px] mt-10"/>
      <div className="flex justify-center flex-wrap gap-5 -mt-[500px]">
        <div className="">
          <Image src={image21} alt="chef" className="w-[312px] h-[391px] rounded-[6px]" />
          <div className=" w-[181px] bg-white rounded-bl-md -mt-[51px] relative">
            <h6 className="text-black font-[inter] font-bold text-[20px] text-center">D.Estwood</h6>
            <p className="text-black font-[inter] text-[14px] text-center">Chief Chef</p>
          </div>
        </div>
        <div className="">
          <Image src={image22} alt="chef" className="w-[312px] h-[391px] rounded-[6px]"/>
          <div className="w-[181px] bg-white rounded-bl-md -mt-[51px] relative">
          <h6 className="text-black font-[inter] font-bold text-[20px] text-center">D.Scoriesh</h6>
            <p className="text-black font-[inter] text-[14px] text-center">Assistant Chef</p>
          </div>
        </div>
        <div className="">
          <Image src={image23} alt="chef" className="w-[312px] h-[391px] rounded-[6px]" />
          <div className="w-[181px] bg-white rounded-bl-md -mt-[51px] relative">
          <h6 className="text-black font-[inter] font-bold text-[20px] text-center">M. William</h6>
          <p className="text-black font-[inter] text-[14px] text-center">Advertising Chef</p>
          </div>
        </div>
        <div className="">
          <Image src={image24} alt="chef" className="w-[312px] h-[391px] rounded-[6px]" />
          <div className="w-[181px] bg-white rounded-bl-md -mt-[51px] relative">
          <h6 className="text-black font-[inter] font-bold text-[20px] text-center">W.Readfroad</h6>
          <p className="text-black font-[inter] text-[14px] text-center"> Chef</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a href="./chef">
          <button className="border border-[#FF9F0D] rounded-[30px] px-12 py-4 hover:bg-[#FF9F0D] text-[#FF9F0D] font-bold text-[20px] hover:text-white">
            See More
          </button>
        </a>
      </div>
    </div>
    {/* seven portion completed meet our chef */}

    {/* eight feedback portion started here  */}
    <div className="lg:mx-32 2xl:mx-72">
      <div className="mt-24">
          <p className="lg:text-3xl text-2xl text-[#ff9f0d] text-center lg:text-start">Testimonials</p>
          <h2 className="font-[helvetica] font-bold lg:text-5xl text-3xl text-center lg:text-start text-[#ffffff]">What our client are saying</h2>
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
      </div>
      <div className="flex justify-center gap-2 mt-24">
          <div className="w-4 h-4 bg-[#FF9F0D4D] rounded-full hover:bg-[#FF9F0D]"></div>
          <div className="w-4 h-4 bg-[#FF9F0D4D] rounded-full hover:bg-[#FF9F0D]"></div>
          <div className="w-4 h-4 bg-[#FF9F0D4D] rounded-full hover:bg-[#FF9F0D]"></div>
          <div className="w-4 h-4 bg-[#FF9F0D4D] rounded-full hover:bg-[#FF9F0D]"></div>
      </div>
    </div>
    {/* eight feedback portion completed here */}

    {/* nine portion (restaurant active process) starte here */}
    {/* <div className="relative w-[1918px] h-[558px] top-[5690px] bg-white">
      <Image src={ninePortionBackground} alt="food" className="relative w-[1918px] h-[558px]" />
      <div className="relative h-[558px] w-[150px] top-[-558px] left-[1640px]"></div>
      <h4 className="relative w-[443px] h-[40px] left-[1362px] top-[-1000px] text-[#FF9F0D] text-[22px] font-[great vibes]">Restaurant Active Process</h4>
      <h2 className="relative w-[1500px] h-[60px] left-[1040px] top-[-1000px] text-[#FF9F0D] font-[helvetica] font-bold text-[48px] ">We 
        <span className="text-[#ffffff]">Document Every Food</span></h2>
      <h2 className="relative w-[1500px] h-[60px] left-[918px] top-[-1000px] text-[#FFffff] font-[helvetica] font-bold text-[48px] ">Bean Process untile it is saved</h2>
      <p className="relative w-[1400px] h-[40px] left-[1030px] top-[-970px] text-[#ffffff] font-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque</p>
      <p className="relative w-[1400px] h-[40px] left-[1140px] top-[-985px] text-[#ffffff] font-[16px]">bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </p>
      <div className="relative w-[651px] h-[48px] top-[-970px] left-[967px]">
        <button className="relative w-[190px] h-[60px] left-[283px] border-[1px] border-[#FF9F0D] rounded-[30px] text-[#ffffff] font-bold hover:bg-[#FF9F0D] hover:text-black hover:font-bold">Read More</button>
        <div className="relative w-[60px] h-[60px] top-[-60px] left-[495px] bg-[#FF9F0D] rounded-[100px]">
          <Image src={youtubeIcon} alt="youtubeIcon" className="relative left-[24px] top-[20px]" />
        </div>
        <p className="relative w-[83px] h-[24px] top-[-102] left-[568px] text-[#ffffff] text-[22px] font-bold">Play Video</p>
      </div>
    </div> */}
    {/* nine portion completed here */}

    {/* ten portion (blogs part) start here */}
    <div className="mt-32">
      <h4 className="text-[#FF9F0D] text-3xl font-[helvetica] text-center">Blog Post</h4>
      <h2 className="text-[#FF9F0D] text-5xl font-[helvetica] font-bold text-center mt-4"> La<span className="text-[#ffffff]">test News & Blog</span></h2>
      <div className="flex justify-center flex-wrap gap-10 mt-14">
        <div className="border border-[#ffffff] w-[425px] pb-4">
          <Image src={image2} alt="food" className="w-[425px] h-[350px] -ml-[1px] -mt-[1px]" />
          <div className="mx-6">
            <p className="text-[#FF9F0D] mt-4">10 February 2022 </p>
            <p className="text-[#ffffff] text-[26px] font-[helvetica]">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
            <div className="flex justify-between mt-4">
              <div className="">
                <button className="text-[#ffffff] hover:text-[#FF9F0D]">Learn More</button>
              </div>
              <div className="">
                <ul className="flex gap-2">
                  <li className=""><Image src={thumbsUp} alt="thumbsupIcon" /></li>
                  <li className=""><Image src={chat} alt="thumbsupIcon" /></li>
                  <li className=""><Image src={share} alt="thumbsupIcon" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#ffffff] w-[425px] pb-4">
          <Image src={pizza} alt="food" className="w-[425px] h-[350px] -ml-[1px] -mt-[1px]" />
          <div className="mx-6">
            <p className="text-[#FF9F0D] mt-4">10 February 2022 </p>
            <p className="text-[#ffffff] text-[26px] font-[helvetica]">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
            <div className="flex justify-between mt-4">
              <div className="">
                <button className="text-[#ffffff] hover:text-[#FF9F0D]">Learn More</button>
              </div>
              <div className="">
                <ul className="flex gap-2">
                  <li className=""><Image src={thumbsUp} alt="thumbsupIcon" /></li>
                  <li className=""><Image src={chat} alt="thumbsupIcon" /></li>
                  <li className=""><Image src={share} alt="thumbsupIcon" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#ffffff] w-[425px] pb-4">
          <Image src={image5} alt="food" className="w-[425px] h-[350px] -ml-[1px] -mt-[1px]" />
          <div className="mx-6">
            <p className="text-[#FF9F0D] mt-4">10 February 2022 </p>
            <p className="text-[#ffffff] text-[26px] font-[helvetica]">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
            <div className="flex justify-between mt-4">
              <div className="">
                <button className="text-[#ffffff] hover:text-[#FF9F0D]">Learn More</button>
              </div>
              <div className="">
                <ul className="flex gap-2">
                  <li className=""><Image src={thumbsUp} alt="thumbsupIcon" /></li>
                  <li className=""><Image src={chat} alt="thumbsupIcon" /></li>
                  <li className=""><Image src={share} alt="thumbsupIcon" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ten portion (blogs part) completed here */}
    {/* last portion ( footer) */}
    <div className=" ">
    <Footer />
    
    </div>
    
    </div>
    

 // end here main page div  
 
  );
}
