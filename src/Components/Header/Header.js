import "./Header.css";
import logo from "../../assets/img/app-logo.png"
import {
    ShoppingCartIcon,
    SunIcon,
    MoonIcon,
    ArrowCircleRightIcon,
  } from "@heroicons/react/outline";
export default function Header() {
  return (
    <>
      <header className="w-screen h-screen background bg-cover bg-no-repeat flex justify-center bg-center fixed">
        {/* navigation bar */}
        <nav className="w-[90%] h-24 backdrop-blur-[6px] bg-black-100 rounded-xl absolute top-8 flex items-center justify-between">
        {/* Logo & links */}
        <div className="flex items-center gap-x-4 h-12">
        <img className="px-4 w-17 h-12" src={logo} alt="coffee" />
        <ul className="flex gap-x-9 tracking-tightest">
            <li className="cursor-pointer font-Dana text-gray-300 text-lg hover:text-gold-100"><a href="#"></a>صفحه اصلی</li>
            <li className="cursor-pointer text-gray-300 text-lg   hover:text-gold-100"><a href="#"></a>فروشگاه</li>
            <li className="cursor-pointer text-gray-300 text-lg hover:text-gold-100"><a href="#"></a>دیکشنری</li>
            <li className="cursor-pointer text-gray-300 text-lg hover:text-gold-100"><a href="#"></a>وبلاگ</li>
            <li className="cursor-pointer text-gray-300 text-lg hover:text-gold-100"><a href="#"></a>درباره ما</li>
            <li className="cursor-pointer text-gray-300 text-lg hover:text-gold-100"><a href="#"></a>تماس با ما</li>
        </ul>
        </div>
        {/* login & Shop*/}
        <div className="flex items-center gap-x-6">
        {/* shopicon & Darkmodeicon */}
        <div className="">
            <ul className="flex items-center gap-x-2 pl-6 border-l border-white/20">
                <li><a href="#"></a><ShoppingCartIcon className="cursor-pointer w-8 h-8  text-gold-100 hover:text-purple-600 hover:border-b-2 hover:border-purple-60 border-purple-600 hover:rounded-lg"/></li>
                <li><a href="#"></a><MoonIcon className="cursor-pointer w-8 h-8 text-gold-100  hover:text-purple-600 hover:border-b-2 hover:border-purple-60 border-purple-600 hover:rounded-lg"/></li>
            </ul>
        </div>
        {/* loginlogo & textlogo */}
        <div className="flex items-center">
        <a className="flex items-center gap-x-1 pl-6" href="">
            <ArrowCircleRightIcon className="w-8 h-8 text-gold-100"/>
            <p className="text-gold-100 text-xl tracking-tightest">ثبت نام | ورود</p>
            <h1 className="text-white w-6 h-6 bg-red-700">Hello world</h1>
        </a>
        </div>
        </div>
        </nav>
      </header>
    </>
  );
}
