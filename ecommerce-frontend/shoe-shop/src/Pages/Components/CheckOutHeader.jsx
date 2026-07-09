
import {Link} from 'react-router-dom'

export function CheckOutHeader(){
    return(
          <nav className="bg-brand-navy flex font-headline p-[1px] justify-between items-center ">
                <div className="flex justify-start gap-2 hidden md:flex">
                    <Link className="flex items-center gap-2 cursor-pointer" to="/">
                        <img className="w-15 h-15 rounded-[50%]" src="/images/icons/shoelog.jpg" />
                        <span className="text-[35px] text-white font-bold ">SHOE'S<span className="text-brand-gold">HOP</span></span>
                    </Link>
                </div>

                <div className=" flex items-center text-[20px] text-white lg:text-[28px]">
                    <h2 className="mr-2"> Shopping Bag</h2>
                    <span className="text-brand-gold"> (3)</span>
                </div>
                
                <div className="flex items-center">
                    <div className="m-5 text-[20px] ">
                        <Link to="/products" className="text-[25px] text-white">Products</Link>
                    </div>
                    <div className="m-5 text-[25px]">
                        <Link to= "/orders" className="text-white">Orders</Link>
                    </div>
                </div>
            </nav>
    )
}