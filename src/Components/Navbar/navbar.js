import './navbar.css'
import Card from "../product-card/product-card";
import logo from "../../assets/img/app-logo.png";
import Mobilenav from '../Mobile/mobile-nav/Mobilenav';
import {
  ShoppingCartIcon,
  SunIcon,
  MoonIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import { useEffect , useState } from 'react';

export default function Navbar(){
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode])
    return(
        <>
        <Mobilenav/>
        
        <nav className="lg:w-[90%] w-[98%] md:flex hidden  lg:px-10 h-24 backdrop-blur-[6px] bg-black-100 rounded-xl absolute top-8 items-center justify-between">
          {/* Logo & links */}
          <div className="flex items-center gap-x-4 h-12">
            <img className="px-4 w-17 shrink-0  h-12" src={logo} alt="coffee" />
            <ul className="flex gap-6 tracking-tightest leading-[56px] [&>*]:leading-[56px]">
              <li className="cursor-pointer font-Dana text-gray-300 text-lg hover:text-gold-100">
                <a href="#">صفحه اصلی</a>
              </li>
              <li className="relative group cursor-pointer text-gray-300 text-lg  delay-75  hover:text-gold-100">
                <a className="group-hover:text-orange-300" href="#">
                  فروشگاه
                </a>
                {/* sub menu */}
                <div className="top-full dark:[&>*]:text-white [&>*]:p-0 dark:[&>*:hover]:text-orange-300 transition-all duration-500 group-hover:opacity-100 group-hover:visible opacity-0 invisible [&>*]:transition-colors [&>*]:text-zinc-700 [&>*:hover]:text-gold-100 shadow-normal [&>*]:block space-y-5 tracking-normal absolute w-52 p-6 bg-white border-t-[3px] rounded-2xl text-base text-zinc-700 dark:bg-zinc-700 border-gold-100">
                  <a href="#">ویژه در سطح جهانی</a>
                  <a href="#">قهوه درجه یک</a>
                  <a href="#">قهوه ویژه</a>
                  <a href="#">ترکیبات تجاری</a>
                  <a href="#">کپسول قهوه</a>
                  <a href="#">قهوه زینو برزیلی</a>
                </div>
              </li>
              <li className="cursor-pointer text-gray-300 text-lg hover:text-gold-100">
                <a href="#">دیکشنری</a>
              </li>
              <li className="cursor-pointer text-gray-300 text-lg hover:text-gold-100">
                <a href="#">وبلاگ</a>
              </li>
              <li className="cursor-pointer text-gray-300 text-lg hover:text-gold-100">
                <a href="#">درباره ما</a>
              </li>
              <li className="cursor-pointer text-gray-300 text-lg hover:text-gold-100">
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </div>
          {/* login & Shop*/}
          <div className="flex items-center gap-x-6">
            {/* shopicon & Darkmodeicon */}
            <div className="">
              <ul className="flex items-center gap-x-2 md:gap-x-4 pl-6 border-l border-white/20">
                <li className="relative group delay-75">
                  <a href="#">
                    <ShoppingCartIcon className="cursor-pointer w-8 h-8  text-gold-100 hover:text-purple-600 hover:border-b-2 hover:border-purple-60 border-purple-600 hover:rounded-lg" />
                  </a>
                  <Card/>
                </li>
                <li>
                  <a onClick={() => setIsDarkMode(!isDarkMode)} className="py-3" href="#">
                    <MoonIcon className="dark:inline-block hidden cursor-pointer w-8 h-8 text-gold-100 " />
                    <SunIcon className="dark:hidden inline-block cursor-pointer w-8 h-8 text-gold-100 " />
                  </a>
                </li>
              </ul>
            </div>
            {/* loginlogo & textlogo */}
            <div className="flex items-center">
              <a className="flex items-center gap-x-1 pl-6" href="">
                <LoginIcon className="w-8 h-8 rotate-180 text-gold-100" />
                <p className="text-gold-100  xl:gap-x-10 gap-x-5 text-xl tracking-tightest xl:inline-block hidden">
                  ثبت نام | ورود
                </p>
              </a>
            </div>
          </div>
        </nav>
        </>
    )
}