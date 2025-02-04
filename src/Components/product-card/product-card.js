import './product-card.css'
import Product from './Product/Product';
import {
    ChevronLeftIcon,
  } from "@heroicons/react/outline";
export default function Card(){
    return(
        <>
        {/* cart resours */}
        <li>
        <div className="flex flex-col  w-[400px] left-0  top-12 p-5 border-t-[3px] rounded-2xl [&>*]:transition-colors  border-gold-100 r group-hover:opacity-100 group-hover:visible opacity-0 transition-all duration-500 invisible absolute bg-white text-zinc-700 dark:bg-zinc-700 dark:text-white">
                    {/* cart header */}
                    <div className="flex justify-between w-[360px]">
                      <span className="text-gray-300 text-xs">1 مورد</span>
                      <a className="text-orange-300 text-xs flex" href="">
                        مشاهده سبد خرید
                        <ChevronLeftIcon className="w-4 h-4 text-orange-300" />
                      </a>
                    </div>
                    {/* cart body */}
                   <Product/>
                    {/* cart footer */}
                    <div className="flex justify-between mt-5">
                      <div className="flex flex-col justify-between">
                        <p>مبلغ قابل پرداخت</p>
                        <div className="flex gap-x-1">
                          <h4 className="font-DanaDemiBold">175,000</h4>
                          <span className="font-Dana text-base ">تومان</span>
                        </div>
                      </div>
                      <button className="py-4 px-7 text-white bg-emerald-600 rounded-lg">سفارش</button>
                    </div>
                  </div>
                </li>
        </>
    )
}