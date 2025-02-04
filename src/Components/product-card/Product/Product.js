import product2 from "../../../assets/img/products/p2.png";
import porduct1 from '../../../assets/img/products/p1.png'
import './Product.css'
export default function Product(){
    return(
        <>
        {/* cart body */}
        <div className="flex border-b-[1px] pb-6 dark:border-white/10 border-gray-300  justify-between mt-5 gap-x-2.5">
                      <img
                        className="w-[120px] h-[120px]"
                        src={product2}
                        alt=""
                      />
                      <div className="flex flex-col justify-between gap-y-6">
                        <h4 className="text-base text-zinc-700 dark:text-white">
                          قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                          <h5 className="text-teal-600 tracking-tighter dark:text-emerald-500 text-xs">
                            14,500 تومان تخفیف
                          </h5>
                          <h4 className="font-DanaDemiBold text-zinc-700 dark:text-white">
                            175,000 تومان
                          </h4>
                        </div>
                      </div>
                    </div>
        </>
    )
}