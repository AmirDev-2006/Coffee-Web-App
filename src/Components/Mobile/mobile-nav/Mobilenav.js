import "./Mobilenav.css";
import product2 from "../../../assets/img/products/p1.png";
import porduct1 from "../../../assets/img/products/p2.png";
import product3 from "../../../assets/img/products/p3.png";
import product4 from "../../../assets/img/products/p4.png";
import product5 from "../../../assets/img/products/p5.png";
import product6 from "../../../assets/img/products/p6.png";
import product7 from "../../../assets/img/products/p7.png";
import product8 from "../../../assets/img/products/p8.png";
import applogo from "../../../assets/img/svgs/app-logo-type.svg";
import coffeelogo from "../../../assets/img/app-logo.png";
import {
  MenuIcon,
  ShoppingCartIcon,
  XIcon,
  HomeIcon,
  ShoppingBagIcon,
  ChevronLeftIcon,
  LoginIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import Product from "../../product-card/Product/Product";
export default function Mobilenav() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [display, setdisplay] = useState('hidden');
  const [shopClick, setShopClick] = useState(true);
  const [rotate , setrotate] = useState('-rotate-90');
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const subNavClick = () =>{
    if(!display){
      setdisplay('hidden')
      setrotate('-rotate-90')
    }
    else{
      setdisplay('')
      setrotate('rotate-90')
    }
  }
  const shopNav = () => {
    setShopClick(!shopClick);
  };

  return (
    <>
      {/* header phone */}
      <div className="bg-white transition-colors duration-500 dark:bg-zinc-700 px-4 h-16 flex items-center justify-between md:hidden w-full">
        <div>
          <a href="#">
            <MenuIcon
              onClick={handleClick}
              className=" dark:text-white w-6 h-6 text-zinc-700 open close"
            />
          </a>
        </div>
        {/* side bar menu */}
        <div
          style={{ right: toggle ? "-256px" : "0px" }}
          className={`bg-white duration-500 py-3 px-4 z-20 dark:bg-zinc-700 w-64 fixed  top-0  transition-all min-h-screen`}
        >
          {/* header responsive site */}
          <div className="flex py-3 items-center justify-between border-b-[1px] border-black-100/10 dark:border-white/10">
            <div className="flex px-3 gap-x-3.5 items-center justify-between">
              <img className="w-10 h-10" src={coffeelogo} alt="" />
              <img className="w-{100px} h-10" src={applogo} alt="" />
            </div>
            <div className="px-2">
              <a href="#">
                <XIcon
                  onClick={handleClick}
                  className={` w-5 h-5  text-zinc-600 dark:text-white`}
                />
              </a>
            </div>
          </div>
          {/* body side bar menu */}
          <div className="flex flex-col p-2 py-4 dark:text-white  ">
            <ul className="[&>*]:transition-colors">
              <li className="w-full h-8 hover:bg-gold-100 dark:hover:bg-orange-300 flex px-1 rounded-lg">
                <button className="flex items-center gap-x-1">
                  <HomeIcon className="w-4 h-4"/>
                  <span>صفحه اصلی</span>
                </button>
              </li>
              <li className=" flex-col flex px-1 gap-y-1 ">
                <button onClick={subNavClick} className="flex w-full h-8 items-center rounded-lg dark:hover:bg-orange-300 hover:bg-gold-100 p-1 justify-between gap-x-1">
                  <div className="flex items-center gap-x-1">
                  <ShoppingBagIcon className="w-4 h-4"/>
                  <span>فروشگاه</span>
                  </div>
                  <div>
                  <ChevronLeftIcon className={`w-4 h-4 ${rotate} transition-all duration-300 text-zinc-700 dark:text-white`}/>
                  </div>
                </button>
                <div className={`${display} pr-4 `}>
                  <ul className="[&>*]:py-1 [&>*:hover]:text-orange-300 dark:[&>*:hover]:text-gold-100">
                    <li><button>ویژه در سطح جهانی</button></li>
                    <li><button>قهوه درجه یک</button></li>
                    <li><button>قهوه ویژه</button></li>
                    <li><button>ترکیبات تجاری</button></li>
                    <li><button>کپسول قهوه</button></li>
                    <li><button>قهوه زینو برزیلی</button></li>
                  </ul>
                </div>
              </li>
              <li className="w-full h-8 dark:hover:bg-orange-300 hover:bg-gold-100 flex px-1 rounded-lg">
                <button className="flex items-center">
                  <span>دیکشنری</span>
                </button>
              </li>
              <li className="w-full h-8 dark:hover:bg-orange-300 hover:bg-gold-100 flex px-1 rounded-lg">
                <button className="flex items-center">
                  <span>وبلاگ</span>
                </button>
              </li>
              <li className="w-full h-8 dark:hover:bg-orange-300 hover:bg-gold-100 flex px-1 rounded-lg">
                <button className="flex items-center">
                  <span>درباره ما</span>
                </button>
              </li>
              <li className="w-full h-8 dark:hover:bg-orange-300 hover:bg-gold-100 flex px-1 rounded-lg">
                <button className="flex items-center">
                  <span>تماس با ما</span>
                </button>
              </li>
            </ul>
          </div>
          {/* footer sidebar nav responsive */}
          <div className="flex flex-col gap-y-4 [&>*]:text-orange-300">
            <a className="flex items-center gap-x-1" href="#">
              <LoginIcon className="w-4 h-4 " />
              <span className="">ورود | ثبت نام</span>
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex toggle-theme flex-col"
            >
              <span className="flex dark:hidden items-center gap-x-1">
                <MoonIcon className="w-4 h-4" />
                تم تیره
              </span>
              <span className="dark:flex hidden  items-center gap-x-1">
                <SunIcon className="w-4 h-4 " />
                تم روشن
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-[138px] h-[55px] dark:text-white"
            src={applogo}
            alt=""
          />
        </div>
        <div>
          {/* shop nav bar icon*/}
          <a onClick={shopNav} href="#">
            <ShoppingCartIcon className=" dark:text-white w-6 h-6 text-zinc-700" />
          </a>
          {/* shop nav bar */}
          <div
            style={{ left: shopClick ? "-256px" : "0px" }}
            className="bg-white duration-500 py-3 px-4 z-20 dark:bg-zinc-700 w-64 fixed flex flex-col justify-between  top-0 transition-all min-h-screen"
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-center border-b-[1px] pb-3 dark:border-white/10">
                <XIcon
                  onClick={shopNav}
                  className="w-5 h-5 cursor-pointer text-zinc-700 dark:text-white"
                />
                <img src={coffeelogo} className="w-10 h-10" alt="" />
              </div>
              {/* products that in shopcarticon */}
              <Product price={120000} off={12000} picture={product4} />
            </div>
            <div className="flex py-5 justify-between p-2 rounded-xl bg-orange-300 items-center dark:text-white">
              <div className="flex flex-col">
                <span>قیمت تمام شده:</span>
                <span> تومان 180000</span>
              </div>
              <button className="bg-emerald-600 p-4 rounded-xl">سفارش</button>
            </div>
          </div>
        </div>
      </div>
      <div className="overley hidden bg-black-100/40 fixed inset-0  flex-col  w-full h-100 z-10 md:hidden"></div>
    </>
  );
}
