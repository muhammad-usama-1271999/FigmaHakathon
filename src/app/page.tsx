import heroBackgroundImage from "../icons/heroBackgroundimage.png"
import Image from "next/image";
import downIcon from "../icons/downIcon.png"
import bag from "../icons/Handbag.png";
import searchIcon from "../icons/searchIcon.png"
import facebookIcon from "../icons/facebook.png"
import pIcon from "../icons/p.png"
import twitterIcon from "../icons/twitter.png"
import leaves from "../icons/leaves.png"
import mainImage from "../icons/plateWithEgg.png"
import smallLeaves from "../icons/smallLeaves.png"
import chinesFood from "../icons/chinesFood.png"
import specialFood from "../icons/specialFood.png"
import noodles from "../icons/noodles.png"
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
import image6 from"../icons/image6.jpeg"
import image7 from"../icons/image7.jpeg"
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
import image13 from "../icons/image13.jpeg"
import image14 from "../icons/image14.jpeg"
import image15 from "../icons/image15.jpeg"
import image16 from "../icons/image16.jpeg"
import image17 from "../icons/image17.jpeg"
import image18 from "../icons/image18.jpeg"
import image19 from "../icons/image19.jpeg"


export default function Home() {
  return (
    // main page div stared here
    <div className="absolute w-[1920px] h-[6000px] bg-black">
    {/* // first portion started here */}
     <Image src={heroBackgroundImage} alt="hero background Image" className="absolute w-[1920px] h-[950px]" />
    <div className="absolute w-[1920] h-[950] bg-[#0D0D0Df2]">
    {/* navbar start */}
    <div className="absolute w-[1320px] h-[87px] left-[300px] top-[45px] ">

      <div className="absolute left-[590px] top-0 text-[#FF9F0D] text-[30px] leading-[35px] font-bold">
        Fo<span className="text-[#ffffff] text-[30px] leading-[35px] font-bold">odTuck</span>
      </div>
      {/* list item start */}
      <div className="absolute w-[12px] h-[12px] left-[1px]  ">
        <ul>
           <li><div className="absolute w-[45px] h-[24px]   top-[48px]  text-white text-base leading-[24px] font-normal">
                 Home 
                 <div className="absolute w-[7px] h-[7px] left-[17px]  top-[23px]  bg-[#FF9F0D] rounded-[100%]">
                    {/* home down circle */}
                 </div>
          </div></li>
          <li><div className="absolute w-[43px] h-[24px] left-[77px]  top-[48px]  text-white text-base leading-[24px] font-normal">
                 Menu 
          </div></li>
          <li><div className="absolute w-[34px] h-[24px] left-[152px]  top-[48px]  text-white text-base leading-[24px] font-normal">
                Blog 
          </div></li>
          <li><div className="absolute w-[47px] h-[24px] left-[218px]  top-[48px]  text-white text-base leading-[24px] font-normal">
                Pages 
          </div></li>
          <li><div className="absolute w-[46px] h-[24px] left-[297px]  top-[48px]  text-white text-base leading-[24px] font-normal">
                About 
                <button> <Image src={downIcon} alt="downAeroIcon" className="absolute w-[10] left-[45px] top-[12] " /></button>
          </div></li>
          <li><div className="absolute w-[39px] h-[24px] left-[375px] top-[48px] text-white text-base leading-[24px] font-normal">
                Shop 
          </div></li>
          <li><div className="absolute w-[61px] h-[24px] left-[446px] top-[48px]  text-white text-base leading-[24px] font-normal">
                Contact  
          </div></li>
        </ul>
      </div>
      {/* list item end */}


      {/* search portion start*/}
      <div className="absolute w-[310px] h-[44px] left-[900px] top-[33px] border-[1px] border-[#FF9F0D] rounded-[27px] box-border ">
          <div className="absolute w-[30px] h-[30px] left-[265px] top-[10px] ">
              <Image src={searchIcon} alt="searchIcon" className="absolute w-[24px] h-[24px]  "/>
          </div>
             <div className="absolute w-[66px] h-[24px] left-[15px] top-[12px]  text-white text-base leading-[24px] font-normal ">
               Search....
            </div>
      </div>
      <div className="absolute w-[24px] h-[24px] left-[1225px] top-[45px] ">
          <Image src={bag} alt="handbag" className="absolute w-[40px] h-[25px] "/>
      </div>
      </div>
    
    {/* navbar end */}

    {/* start icons line */}
    <div className="absolute w-[25px] h-[30px] left-[190px] top-[280px]  ;">
{/* group-1000002057 */}
   <div className="absolute w-[150px] left-[0px] top-[0px]  border border[1px] border-white rotate-90 ">
   {/* line-11 upper side line   */}
   </div>
   <div>
      <Image src={facebookIcon} alt="facebookIcon" className="absolute left-[71px] top-[100px]   "/>
      <Image src={twitterIcon} alt="twitterIcon" className="absolute left-[69px] top-[140px]"/>
      <Image src={pIcon} alt="pIcon" className="absolute left-[70px] top-[180px]"/>
   </div>
   <div className="absolute w-[150px] left-[0px] top-[300px]  border border[1px] border-white rotate-90">

   </div>
    </div>
   {/* end side line icon */}

    {/* left lorem side start */}
   <div className="absolute w-[472px] h-[356px] left-[300px] top-[180px]">
   <div className="absolute w-[549px] h-[40px] left-[10px] top-[100px] text-[#FF9F0D] text-[32px] ">
        It's Quick & Amusing!
    </div>
    <div className="absolute w-[600px] left-[10px] top-[170px] text-[#FF9F0D] font-helvetica font-bold text-[60px] leading-[68px]">
        Th<span className="text-[#ffffff] font-helvetica font-bold text-[60px] leading-[68px]">e Art of Speed Food Quality</span>
    </div>

    <div className="absolute left-[10px] top-[325px] text-white font-inter font-normal text-[16px] leading-[24px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
    </div>

    <button className="absolute w-[200px] h-[40px] left-[10px] top-[439px] bg-[#FF9F0D] rounded-[30px]">
        <div className="absolute w-[200px] left-[3px]  top-[8px] text-[#E0DFDF] font-inter font-bold text-[20px] leading-[24px]">
            See Menu
        </div>
    </button>
  </div>
    {/* left lorem side end */}

    {/* right hero picture side start */}
    <div className="absolute w-[578px] h-[578px] left-[893px] top-[242px] border-[2px] border-[#ffffff] rounded-[100%] ">
         {/* {/* circle div  */}
    </div>
    <Image src={leaves} alt="leaves" className="absolute w-[636px] h-[382px] top-[233px] left-[1142px] rotate-[-60]" />
    <Image src={mainImage} alt="Egg image" className="absolute w-[750px] h-[1160px] top-[-120px] left-[900px]"/>
    <Image src={smallLeaves} alt="group of leaves" className="absolute w-[50px] left-[964px] top-[682px]" />
    <Image src={chinesFood} alt="chinesFoodDish" className="absolute w-[100px] left-[860px] top-[550px]"/>
    <Image src={specialFood} alt="specialFood" className="absolute w-[110px] left-[845px] top-[415px]"/>
    <Image src={noodles} alt="noodles's picture" className="absolute w-[115px] left-[910px] top-[285px]"/>
   {/* right hero picture side end  */}

    </div>
     {/* // first portion completed */}

    {/* second portion stared here */}
    <div className="absolute w-[1320px] h-[562px] top-[1070px] left-[300px] ">
      <div className="bg-black w-[660px] h-[562px]">
        <h1 className="w-[200px] h-[40px] left-[300px] top-[1070px] text-[#FF9F0D] font-helvetica font-bold text-[30px] leading-[38px]">ABOUT US</h1>
        <h2 className="absolute w-[646px] h-[110px] top-[55px] left-[0px] text-[#FF9F0D] font-[68px] font-helvetica font-bold text-[60px] leading-[68px]">We 
          <span className="text-[#ffffff] font-[68px] font-helvetica font-bold text-[60px] leading-[68px]"> Create the best foody product</span></h2>
        <p className="absolute w-[526px] h-130px] top-[220] left-[0px] text-[#ffffff] font-[16px] font-inter font-bold text-[15.7px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        <p className="absolute w-[600px] text-[#ffffff] left-[50px] top-[380px]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        <Image src={checkIcon} alt="checkIcon" className="absolute left-[10px] top-[380px]" />
        <p className="absolute w-[600px] text-[#ffffff] left-[50px] top-[430px]"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
        <Image src={checkIcon} alt="checkIcon" className="absolute left-[10px] top-[430px]" />
        <p className="absolute w-[600px] text-[#ffffff] left-[50px] top-[480px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <Image src={checkIcon} alt="checkIcon" className="absolute left-[10px] top-[480px]" />
        <button className="absolute w-[200px] h-[40px] left-[8px] top-[539px] bg-[#FF9F0D] rounded-[30px]">
        <div className="absolute w-[200px] left-[3px]  top-[8px] text-[#E0DFDF] font-inter font-bold text-[20px] leading-[24px]">
            See Menu
        </div>
    </button>
      </div>
         
      <div>
      <Image src={boilEgg} alt="boilEgg with chapati" className="absolute w-[660px] h-[330px] top-[00px] left-[660px]"/>
      <Image src={foodWithSauce} alt="some foods with sauce" className="absolute w-[330px] h-[232px] left-[660px] top-[330px]"/>
      <Image src={sandwich} alt="sandwich" className="absolute w-[330px] h-[232px] left-[990px] top-[330px]"/>
      </div>
    </div>
    {/* second portion end here */}

    {/* third portion start here */}
    <div className="w-[1320px] h-[489px] top-[1752px] left-[300px]">
      <h2 className="absolute w-[277px] h-40px] top-[1752px] left-[871px] text-[#FF9F0D] font-[great vibes] text-[32px] leading-[40px]"> Food Category</h2>
      <h1 className="absolute w-[446px] h-[56px] top-[1800px] left-[741px] text-[#FF9F0D] font-[helvetica] text-[48px] leading-[56px]">Ch
        <span className="text-[#ffffff] font-[helvetica] text-[48px] leading-[56px]">oose Food Item</span></h1>
    
        {/* third portion background image  */}
      <div><Image src={fancyLeave} alt="fancy leave picture" className="absolute w-[444px] h-[532px] top-[2010px] left-[1462px]"/></div>


        {/* third portion images code start  */}
      <div className=" w-[1320px] h-[329px] top-[1912px] left-[300px] ">
        <div><Image src={image1} alt="some food" className="absolute w-[305px] h-[328px] top-[1913px] left-[300px] rounded-[6px]"/></div>
        <div><Image src={image2} alt="some food" className="absolute w-[305px] h-[328px] top-[1913px] left-[636px] rounded-[6px]"/></div>
        <div><Image src={image3} alt="some food" className="absolute w-[305px] h-[328px] top-[1913px] left-[972px] rounded-[6px]"/></div>
        <div><Image src={image4} alt="some food" className="absolute w-[305px] h-[328px] top-[1913px] left-[1308px] rounded-[6px]"/></div>
      </div>
      {/* third portion images code end here */}
      <div className="absolute w-[206px] h-[88px] left-[300px] top-[2036px] rounded-[6px] "></div>
      <div className="absolute w-[206px] h-[46px] top-[2087px] left-[300px] rounded-[6px] bg-[#FF9F0D]">
          <div className="absolute left-[22px] top-[13px] text-[#FFffff] font-[inter] text-bold text-[26px] leading-[18px]">Fast Food Dish</div>
      </div>
      <div className="absolute w-[125px] h-[40px] left-[381px] top-[2036px] rounded-[6px] bg-[#ffffff]">
        <div className="absolute left-[18px] top-[11px] text-[#FF9F0D] font-[inter] text-bold text-[24px] leading-[16px] ">Save 30%</div>
        {/* </div> */}
        </div>
    </div>  
    {/* third portion end here] */}

    {/* fourth portion start here */}
   <div> 
      {/*  left side picture portion  */}
      <div>
        <Image src={image5} alt="some food" className="absolute w-[362px] h-[356px] left-[300px] top-[2361px] rounded-[6px]"/>
      </div>
      <div>
        <Image src={image6} alt="some food" className="absolute w-[281px] h-[231px] left-[678px] top-[2481] rounded-[6px]"/>
        </div>
      <div>
        <Image src={image7} alt="some food" className="absolute w-[244px] h-[306px] left-[300px] top-[2733px] rounded-[6px]"/>
        </div>
      <div>
        <Image  src={image8} alt="some food" className="absolute w-[221px] h-[226px] left-[560px] top-[2733] rounded-[6px]"/>
        </div>
      <div>
        <Image src={image9} alt="some food" className="absolute w-[161px] h-[168px] left-[797px] top-[2727px] rounded"/></div>
      <div>
        <Image src={image10} alt="some food" className="absolute w-[161px] h-[166px] left-[797px] top-[2911px] rounded"/>
      </div>
    {/* right side content portion */}
    <div className="absolute w-[225px] h-[40px] top-[2423px] left-[1094px]">
      <h2 className="font-[helvetica] text-[28px] text-[#FF9F0D]">why Choose us</h2>
    </div>
    <div className="absolute w-[433px] h-[112px] top-[2471px] left-[1094px]">
      <h1 className="font-[helvetica] text-[48px] text-[#FF9F0D]">Ex
        <span className="font-[helvetica] text-[48px] text-[#FFffff]">tra ordinary taste And Experienced</span> </h1>
    </div>
    <div className="absolute w-[446px] h-[120px] top-[2615px] left-[1094px]">
       <p className="font-[inter] text-[16px] text-[#ffffff]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
         volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices 
         mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    </div>
    <div className="absolute w-[102px] h-[100px] top-[2767px] left-[1094px] rounded-[6px] bg-[#FF9F0D]">
      <Image src={hamburger} alt="Hamburger" className="absolute w-[56px] h-[56px] top-[22px] left-[19px]" />
    </div>
    <div className="absolute w-[102px] h-[100px] top-[2767px] left-[1229px] rounded-[6px] bg-[#FF9F0D]">
    <Image src={cookie} alt="cookie" className="absolute w-[56px] h-[56px] top-[22px] left-[19px]" />
    </div>
    <div className="absolute w-[102px] h-[100px] top-[2767px] left-[1366px] rounded-[6px] bg-[#FF9F0D]">
    <Image src={wineGlass} alt="wineGlass" className="absolute w-[56px] h-[56px] top-[22px] left-[19px]" />
    </div>
    <h3 className="absolute w-[85px] h-[26px] top-[2876px] left-[1109px] text-[#ffffff] font-[inter] text-[18px]">Fast Food</h3>
    <h3 className="absolute w-[85px] h-[26px] top-[2876px] left-[1257px] text-[#ffffff] font-[inter] text-[18px]">Lunch</h3>
    <h3 className="absolute w-[85px] h-[26px] top-[2876px] left-[1394px] text-[#ffffff] font-[inter] text-[18px]">Dinner</h3>
    <div className="absolute w-[374px] h-[92px] top-[2936px] left-[1094px]">
      <div className="absolute w-[10px] h-[91px] left-[4px] bg-[#FF9F0D] "></div>
      <div className="absolute w-[362] h-[91px] left-[11px] bg-[#ffffff] " ></div>
      <div className="absolute w-[376px] h-[92px] border border-[2px] border-black rounded-[6px]"></div>
      <h3 className="absolute w-[82px] h-[56px] left-[50px] top-[13px] font-[helvetica] text-[48px] font-bold text-[#FF9F0D]">30+</h3>
      <p className="absolute w-[78px] h-[28px] top-[13px] left-[180px] font-[inter] text-[20px] text-[#1E1E1E]">Years of</p>
      <h5 className="absolute w-[143px] h-[32px] left-[180px] top-[42px] font-[helvetica] text-[24px] font-bold leading-[28px] text-[#1E1E1E]">Experienced</h5>
    </div>
  </div>
    {/* fourth portion end here */}

    {/* fivth portion start here */}
    <div>
      <Image src={backgroundImage} alt="backgroundImage" className="absolute w-[1923px] h-[468px] top-[3197px] left-[-1px]" />
      <div className="absolute w-[1920px] h-[469px] top-[3197px] left-[-1px] bg-[#0D0D0DD9]">
        <div className="absolute w-[1319px] h-[247px] top-[110px] left-[299px] ">
          <div className="absolute w-[218px] h-[247px] top-[9px]">
            <Image src={chefCap} alt="chefCap" className="absolute w-[120px] h-[120px] left-[40px]" />
            <h5 className="absolute w-[218px] h-[32px] top-[140px] left-[px] font-[helvetica] font-bold text-[#ffffff] text-[24px]">Professional Chefs</h5>
            <h3 className="absolute w-[67px] h-[48px] top-[200px] left-[60px] font-[helvetica] font-bold text-[#ffffff] text-[48px] ">420</h3>
          </div>
          <div className="absolute w-[162px] h-[247px] top-[9px] left-[360px]">
          <Image src={burgerDrink} alt="chefCap" className="absolute w-[120px] h-[120px] left-[40px]" />
          <h5 className="absolute w-[218px] h-[32px] top-[140px] left-[30px] font-[helvetica] font-bold text-[#ffffff] text-[24px]">Items of food</h5>
            <h3 className="absolute w-[67px] h-[48px] top-[200px] left-[60px] font-[helvetica] font-bold text-[#ffffff] text-[48px] ">320</h3>
          </div>
          <div className="absolute w-[248px] h-[247px] top-[9px] left-[720px]">
          <Image src={spoon} alt="chefCap" className="absolute w-[120px] h-[120px] left-[40px]" />
          <h5 className="absolute w-[288px] h-[32px] top-[140px] left-[-20px] font-[helvetica] font-bold text-[#ffffff] text-[24px]">Years Of Experienced</h5>
            <h3 className="absolute w-[67px] h-[48px] top-[200px] left-[60px] font-[helvetica] font-bold text-[#ffffff] text-[48px] ">30+</h3>
          </div>
          <div className="absolute w-[162px] h-[247px] top-[9px] left-[1080px]">
          <Image src={pizzaSlice} alt="chefCap" className="absolute w-[120px] h-[120px] left-[40px]" />
          <h5 className="absolute w-[218px] h-[32px] top-[140px] left-[0px] font-[helvetica] font-bold text-[#ffffff] text-[24px]">Happy Customers</h5>
            <h3 className="absolute w-[67px] h-[48px] top-[200px] left-[60px] font-[helvetica] font-bold text-[#ffffff] text-[48px] ">220</h3>
          </div>
        </div>
      </div>

    </div>
    {/* fivth portion completed */}

    {/* sixth portion start here */}
    <div className="absolute w-[1320px] h-[656px] top-[3786px] left-[300px] ">
       <p className="absolute w-[209px] h-[40px] top-[px] left-[546px] font-[great vibes] text-[26px] leading-[40px] text-[#FF9F0D]">Choose & pick</p>
       <h3 className="absolute w-[358px] h-[56px] top-[70px] left-[450px] font-[helvetica] font-bold text-[48px] leading-[56px] text-[#FF9F0D]">Fr
        <span className="font-[helvetica] font-bold text-[48px] leading-[56px] text-[#FFffff]">om Our Menu</span></h3>
        <div className="w-[1056px] h-[28px] ">
          <ul className="grid gap-40 grid-cols-7 mt-[206px] w-[1056px] h-[28px] ">
            <li className="font-[inter] text-[20px] text-[#FF9F0D]">Breakfast</li>
            <li className="font-[inter] text-[20px] text-[#FFffff]">Lunch</li>
            <li className="font-[inter] text-[20px] text-[#FFffff]">Dinner</li>
            <li className="font-[inter] text-[20px] text-[#FFffff]">Dessert</li>
            <li className="font-[inter] text-[20px] text-[#FFffff]">Drink</li>
            <li className="font-[inter] text-[20px] text-[#FFffff]">Snack</li>
            <li className="font-[inter] text-[20px] text-[#FFffff]">Suops</li>
          </ul>
        </div>
        <Image src={doubleLeaves} alt="doubleLeaves" className="absolute w-[515px] h-[406px] top-[300px] left-[-20px]" />
        <Image src={image11} alt="some food" className="absolute w-[366px] h-[362px] top-[300px] left-[55px]" />
        </div>
        <div className="absolute w-[816px] h-[444px] left-[836px] top-[4030px] ">
          <div className=" grid gap-4 grid-cols-2 mt-9">
          <div className=" w-[376px] h-[79px] ">
            <Image src={image12} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
            <h3 className=" absolute w-[123px] h-[28px] top-[29px] left-[89px] text-white font-bold text-[20px]">Lettuce Leaf</h3>
            <p className="absolute w-[287px] h-[22px] top-[60px] left-[89px] font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="absolute w-[49px] h-[26px] top-[80px] left-[89px] font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
          </div>
          <div className="w-[376px] h-[79px] rounded-[6px] ">
          <Image src={image13} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
          <h3 className=" absolute w-[223px] h-[28px] top-[29px] left-[506px] text-white font-bold text-[20px]">Glow Cheese</h3>
            <p className="absolute w-[287px] h-[22px] top-[60px] left-[506px] font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="absolute w-[49px] h-[26px] top-[80px] left-[506px] font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
          </div>
          <div className="w-[376px] h-[79px] rounded-[6px]">
          <Image src={image14} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
          <h3 className=" absolute w-[223px] h-[28px] top-[124px] left-[89px] text-white font-bold text-[20px]">Fresh Breakfast</h3>
            <p className="absolute w-[287px] h-[22px] top-[155px] left-[89px] font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="absolute w-[49px] h-[26px] top-[175px] left-[89px] font-bold text-[28px] text-[#FF9F0D]">14.5$</p>
          </div>
          <div className="w-[376px] h-[79px] rounded-[6px] ">
          <Image src={image15} alt="some food" className=" w-[80px] h-[79px] rounded-[6px] rotate-90" />
          <h3 className=" absolute w-[223px] h-[28px] top-[124px] left-[506px] text-white font-bold text-[20px]">Italian Pizza</h3>
            <p className="absolute w-[287px] h-[22px] top-[155px] left-[506px] font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="absolute w-[49px] h-[26px] top-[175px] left-[506px] font-bold text-[28px] text-[#FF9F0D]">14.5$</p>
          </div>
          <div className="w-[376px] h-[79px] rounded-[6px] ">
          <Image src={image16} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" /
          ><h3 className=" absolute w-[123px] h-[28px] top-[219px] left-[89px] text-white font-bold text-[20px]">Mild Butter</h3>
            <p className="absolute w-[287px] h-[22px] top-[250px] left-[89px] font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="absolute w-[49px] h-[26px] top-[270px] left-[89px] font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
          </div>
          <div className="w-[376px] h-[79px] rounded-[6px] ">
          <Image src={image17} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
          <h3 className=" absolute w-[123px] h-[28px] top-[219px] left-[506px] text-white font-bold text-[20px]">Sllice Beef</h3>
            <p className="absolute w-[287px] h-[22px] top-[250px] left-[506px] font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="absolute w-[49px] h-[26px] top-[270px] left-[506px] font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
          </div>
          <div className="w-[376px] h-[79px] rounded-[6px] ">
          <Image src={image18} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
          <h3 className=" absolute w-[123px] h-[28px] top-[314px] left-[89px] text-white font-bold text-[20px]">Fresh Bread</h3>
            <p className="absolute w-[287px] h-[22px] top-[345px] left-[89px] font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="absolute w-[49px] h-[26px] top-[365px] left-[89px] font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
          </div>
          <div className="w-[376px] h-[79px] rounded-[6px] ">
          <Image src={image19} alt="some food" className=" w-[80px] h-[79px] rounded-[6px]" />
          <h3 className=" absolute w-[223px] h-[28px] top-[314px] left-[506px] text-white font-bold text-[20px]">Mushaom Pizza</h3>
            <p className="absolute w-[287px] h-[22px] top-[345px] left-[506px] font-[inter] text-[14px] text-[#ffffff]">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="absolute w-[49px] h-[26px] top-[365px] left-[506px] font-bold text-[28px] text-[#FF9F0D]">12.5$</p>
          </div>
        </div>
        </div>
    {/* sixth portion completed here */}


</div>

 // end here main page div  
  );
}
