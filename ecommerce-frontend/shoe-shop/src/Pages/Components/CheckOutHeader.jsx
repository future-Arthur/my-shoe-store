
import {Link} from 'react-router-dom'
import {calculateCartQuantity} from '../../Utils/calculateCartQuantity'

export function CheckOutHeader({cart}){
    
     const totalQuantity = calculateCartQuantity(cart)
 
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
                    <span className="text-brand-gold"> ({totalQuantity})</span>
                </div>
                
                <div className="flex items-center lg:justify-evenly lg:gap-15 lg:mr-10 ">
                    <div className="m-5 text-[20px]  ">
                        <Link to="/products" className="text-[25px] text-white hover:text-brand-gold duration-500">Products</Link>
                    </div>
                    <div className="m-5 text-[25px]">
                        <Link to= "/orders" className="text-white hover:text-brand-gold duration-500">Orders</Link>
                    </div>
                </div>
            </nav>
    )
}