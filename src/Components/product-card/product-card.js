import product2 from "../../assets/img/products/p1.png";
import porduct1 from '../../assets/img/products/p2.png';
import product3 from '../../assets/img/products/p3.png';
import product4 from '../../assets/img/products/p4.png';
import product5 from '../../assets/img/products/p5.png';
import product6 from '../../assets/img/products/p6.png';
import product7 from '../../assets/img/products/p7.png';
import product8 from '../../assets/img/products/p8.png';
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
        <div className="flex flex-col max-h-80 container-snap sm:overflow-y-scroll  w-[400px] left-0  top-12 p-5 border-t-[3px] rounded-2xl [&>*]:transition-colors  border-gold-100 r group-hover:opacity-100 group-hover:visible opacity-0 transition-all duration-500 invisible absolute bg-white text-zinc-700 dark:bg-zinc-700 dark:text-white">
                    {/* cart header */}
                    <div className="flex justify-between w-[360px]">
                      <span className="text-gray-300 text-xs font-Dana">2 مورد</span>
                      <a className="text-orange-300 text-xs flex" href="">
                        مشاهده سبد خرید
                        <ChevronLeftIcon className="w-4 h-4 text-orange-300" />
                      </a>
                    </div>
                    {/* cart body */}
                   <Product picture={product6} price={180000} name="قهوه وارداتی از باکو همراه با 40% پودر شکلات" off={14500}/>
                   <Product picture={product4} price={160000} name="قهوه وارداتی از هند همراه با 40% پودر شکلات" off={25500}/>
                   <Product picture={product4} price={160000} name="قهوه وارداتی از هند همراه با 40% پودر شکلات" off={25500}/>
                   <Product picture={product4} price={160000} name="قهوه وارداتی از هند همراه با 40% پودر شکلات" off={25500}/>


                    {/* cart footer */}
                    <div className="flex justify-between mt-5">
                      <div className="flex flex-col justify-between">
                        <p>مبلغ قابل پرداخت</p>
                        <div className="flex gap-x-1">
                          <h4 className="font-DanaDemiBold">175,000</h4>
                          <span className="font-Dana text-base ">تومان</span>
                        </div>
                      </div>
                      <button className="py-4 px-7 text-white tracking-tightest hover:bg-emerald-700 transition-colors bg-emerald-600 rounded-lg">سفارش</button>
                    </div>
                  </div>
                </li>
        </>
    )
}