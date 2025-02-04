import './Product.css'
export default function Product({id ,name, picture , price , off}){
    return(
        <>
        {/* cart body */}
        <div className="flex border-b-[1px] pb-6 dark:border-white/10 border-gray-300  justify-between mt-5 gap-x-2.5">
                      <img
                        className="w-[120px] h-[120px]"
                        src={picture}
                        alt=""
                      />
                      <div className="flex flex-col justify-between gap-y-6">
                        <h4 className="text-base text-zinc-700 dark:text-white">
                          {name}
                        </h4>
                        <div>
                          <h5 className="text-teal-600 tracking-tighter dark:text-emerald-500 text-xs">
                            {off} تومان تخفیف
                          </h5>
                          <h4 className="font-DanaDemiBold text-zinc-700 dark:text-white">
                            {price} تومان
                          </h4>
                        </div>
                      </div>
                    </div>
        </>
    )
}