import "./Mobilenav.css";
import product2 from "../../../assets/img/products/p1.png";
import porduct1 from '../../../assets/img/products/p2.png';
import product3 from '../../../assets/img/products/p3.png';
import product4 from '../../../assets/img/products/p4.png';
import product5 from '../../../assets/img/products/p5.png';
import product6 from '../../../assets/img/products/p6.png';
import product7 from '../../../assets/img/products/p7.png';
import product8 from '../../../assets/img/products/p8.png';
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
  const [subMenu , setSubMenu] = useState(true);
  const [shopClick , setShopClick] = useState(true)
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
  const subclick = () => {
    setSubMenu(!subMenu)
  }
  const shopNav = () => {
    setShopClick(!shopClick)
  }


  return (
    <>
      {/* header phone */}
      <div className="bg-white dark:bg-zinc-700 px-4 h-16 flex items-center justify-between md:hidden w-full">
        <div>
          <a href="#">
            <MenuIcon onClick={handleClick} className=" dark:text-white w-6 h-6 text-zinc-700 open close" />
          </a>
        </div>
        {/* side bar menu */}
        <div style={{ right: toggle ? '-256px' : '0px' }}  className={`bg-white duration-500 py-3 px-4 z-20 dark:bg-zinc-700 w-64 fixed  top-0  transition-all min-h-screen`}>
          {/* header responsive site */}
          <div className="flex py-3 items-center justify-between border-b-[1px] border-black-100/10 dark:border-white/10">
            <div className="flex px-3 gap-x-3.5 items-center justify-between">
              <img className="w-10 h-10" src={coffeelogo} alt="" />
              <img className="w-{100px} h-10" src={applogo} alt="" />
            </div>
            <div className="px-2">
              <a  href="#">
                <XIcon onClick={handleClick} className={` w-5 h-5  text-zinc-600 dark:text-white`} />
              </a>
            </div>
          </div>
            {/* body side bar menu */}
          <div className="p-2 ">
            <ul className=" gap-y-2 border-b-[1px] pb-4 dark:border-white border-black/10 [&>*]:dark:text-white [&>*]:text-zinc-700 [&>*:hover]:text-orange-400 [&>*:hover]:bg-orange-100">
              <li className="flex items-center gap-x-1 w-full h-8 rounded-lg">
                <HomeIcon className="w-4 h-4   " />
                <a className="" href="">
                  صفحه اصلی
                </a>
              </li>
              <li className="">
                <div className="flex justify-between items-center">
                  <a onClick={subclick}
                      className={`flex justify-between items-center gap-x-1 w-full h-8 rounded-lg`}
                    href=""
                  >
                    <div className="flex items-center gap-x-1">
                    <ShoppingBagIcon className="w-4 h-4" />
                    <span>فروشگاه</span>
                    </div>
                  <div>
                    <ChevronLeftIcon className="w-4 h-4 -rotate-90 text-zinc-700 dark:text-white " />
                  </div>
                  </a>
                </div>

                <ul style={{ display: subMenu ? 'hidden' : 'flex' }} className={`flex-col gap-y-2`}>
                  <li>
                    <a href="">ویژه در سطح جهانی</a>
                  </li>
                  <li>
                    <a href="">قهوه درجه یک</a>
                  </li>
                  <li>
                    <a href="">قهوه ویژه</a>
                  </li>
                  <li>
                    <a href="">ترکیبات تجاری</a>
                  </li>
                  <li>
                    <a href="">کپسول قهوه</a>
                  </li>
                  <li>
                    <a href="">قهوه زینو برزیلی</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">دیکشنری</a>
              </li>
              <li>
                <a href="">وبلاگ</a>
              </li>
              <li>
                <a href="">درباره ما</a>
              </li>
              <li>
                <a href="">تماس با ما</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4 [&>*]:text-orange-300">
            <a className="flex items-center gap-x-1" href="#">
              <LoginIcon className="w-4 h-4 " />
              <span className="">ورود | ثبت نام</span>
            </a>
            <a
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex toggle-theme flex-col"
              href=""
            >
              <span className="flex dark:hidden items-center gap-x-1">
                <MoonIcon className="w-4 h-4" />
                تم تیره
              </span>
              <span className="dark:flex hidden  items-center gap-x-1">
                <SunIcon className="w-4 h-4 " />
                تم روشن
              </span>
            </a>
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
        <div style={{ left: shopClick ? '-256px' : '0px' }} className="bg-white duration-500 py-3 px-4 z-20 dark:bg-zinc-700 w-64 fixed flex flex-col justify-between  top-0 transition-all min-h-screen">
          <div className="flex flex-col">
          <div className="flex justify-between items-center border-b-[1px] pb-3 dark:border-white/10">
            <XIcon onClick={shopNav}  className="w-5 h-5 cursor-pointer text-zinc-700 dark:text-white"/>
            <img src={coffeelogo} className="w-10 h-10" alt="" />
          </div>
          {/* products that in shopcarticon */}
          <Product price={120000} off={12000} picture={product4}/>
          </div>
          <div className="flex py-5 justify-between p-2 rounded-xl bg-orange-300 items-center dark:text-white">
            <div className="flex flex-col">
              <span>قیمت تمام شده:</span>
              <span> تومان 180000</span>
            </div>
            <button className="bg-emerald-600 p-4 rounded-xl" >سفارش</button>
          </div>
        </div>

      </div>
        </div>
      <div className="overley hidden bg-black-100/40 fixed inset-0  flex-col  w-full h-100 z-10 md:hidden"></div>
    </>
  );
}
