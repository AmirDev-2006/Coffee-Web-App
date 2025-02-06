import "./Mobilenav.css";
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
export default function Mobilenav() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen , setMenuOpen] = useState(false)
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* header phone */}
      <div className="bg-white dark:bg-zinc-700 px-4 h-16 flex items-center justify-between md:hidden w-full">
        <div>
          <a href="#">
            <MenuIcon className=" dark:text-white w-6 h-6 text-zinc-700 open close" />
          </a>
        </div>
        {/* side bar menu */}
        <div className="bg-white py-3 px-4 z-20 dark:bg-zinc-700 w-64 fixed top-0 right-0 min-h-screen">
          {/* header responsive site */}
          <div className="flex py-3 items-center justify-between border-b-[1px] border-black-100/10 dark:border-white/10">
            <div className="flex px-3 gap-x-3.5 items-center justify-between">
              <img className="w-10 h-10" src={coffeelogo} alt="" />
              <img className="w-{100px} h-10" src={applogo} alt="" />
            </div>
            <div className="px-2">
              <a  href="#">
                <XIcon className={` w-5 h-5  text-zinc-600 dark:text-white`} />
              </a>
            </div>
            {/* body side bar menu */}
          </div>
          <div className="p-2">
            <ul className=" gap-y-2 border-b-[1px] pb-4 dark:border-white border-black/10 [&>*]:dark:text-white [&>*]:text-zinc-700 [&>*:hover]:text-orange-400 [&>*:hover]:bg-orange-100">
              <li className="flex items-center gap-x-1 w-full h-8 rounded-lg">
                <HomeIcon className="w-4 h-4   " />
                <a className="" href="">
                  صفحه اصلی
                </a>
              </li>
              <li className="">
                <div className="flex justify-between items-center">
                  <a onClick={()=>{}}
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

                <ul className={`flex-col gap-y-2`}>
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
          <a href="#">
            <ShoppingCartIcon className=" dark:text-white w-6 h-6 text-zinc-700" />
          </a>
        </div>
      </div>
      <div className="overley bg-black-100/40 fixed inset-0 flex flex-col  w-full h-100 z-10 md:hidden"></div>
    </>
  );
}
