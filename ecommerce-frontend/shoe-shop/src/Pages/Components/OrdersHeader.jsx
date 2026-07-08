import {Link} from 'react-router-dom'

export function OrdersHeader(){
    return(
        <>
        <nav className="bg-brand-navy flex font-headline p-[1px] justify-between items-center ">
                <div className="flex justify-start gap-2 hidden md:flex">
                    <Link className="flex items-center gap-2 cursor-pointer" to="/">
                        <img className="w-15 h-15 rounded-[50%]" src="../../public/images/shoeLog.jpg" />
                        <span className="text-[35px] text-white font-bold ">SHOE'S<span className="text-brand-gold">HOP</span></span>
                    </Link>
                </div>

                <div className=" flex items-center text-[25px] text-white lg:text-[28px]">
                    <h2 className="mr-2"> Orders</h2>
                    <span className="text-brand-gold"> (3)</span>
                </div>

                <div className="flex">
                    <div className="m-5 text-[20px] ">
                        <Link to="/products" className="text-[25px] text-white">Products</Link>
                    </div>
                    <div className="m-5 text-[2px] relative">
                        <Link 
                        to= "/checkout" >
                            <svg  className="lucide lucide-shopping-bag-icon lucide-shopping-bag cursor-pointer text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                <path d="M16 10a4 4 0 0 1-8 0" />
                                <path d="M3.103 6.034h17.794" />
                                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                            </svg>
                              <span className="text-[15px] absolute -top-[12px] -right-[10px] bg-red-500 
                                text-white text-s rounded-full h-6 w-6 
                                flex items-center justify-center">3</span>
                        </Link>
                    </div>
                </div>
        </nav>
        </>
    )
}