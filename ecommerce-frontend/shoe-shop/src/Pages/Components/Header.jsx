import {Link} from 'react-router-dom'

export function Header(){
    return(
        <nav className="bg-brand-navy flex flex-col justify-center font-headline p-[1px] md:flex-row md:justify-between ">
                <div className="flex justify-start items-center gap-2 ">
                    <Link className="flex items-center gap-2 cursor-pointer" to="/">
                        <img className="w-15 h-15 rounded-[50%]" src="../../public/images/shoeLog.jpg" />
                        <span className="text-[35px] text-white font-bold ">SHOE'S<span className="text-brand-gold">HOP</span></span>
                    </Link>
                </div>

                <div className="flex justify-between md:gap-2 lg:gap-30 xl:gap-80 p-5">
                    <div className="flex items-center md:hidden">
                        <img src="/images/menu.png" />
                    </div>
                    <div className="flex text-white gap-10 items-center hidden md:hidden lg:flex lg:gap-20 xl:gap-30">
                        <Link to= "/products">FEATURED</Link>
                        <Link to= "/">MEN</Link>
                        <Link to = "/">WOMEN</Link>
                        <Link to = "/">KIDS</Link>
                    </div>

                    <div className="text-white items-center flex xl:mr-10">
                        <div className="flex bg-white items-center rounded-[10px] 
                            " >
                            <span className="m-2"
                            ><img src="/images/search.png" /></span>
                            <input type="text"

                                placeholder="find shoes"
                                spellCheck="false"
                                className="bg-white text-black rounded  transition-all 
                                 duration-500  outline-none text-sm w-60"
                            />
                        </div>

                        <div className="relative flex gap-4 ml-3 xl:ml-5">
                            <Link to="/checkout">
                                <button className="cursor-pointer">
                                <svg className=" cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                                    width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-shopping-bag-icon lucide-shopping-bag">
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                    <path d="M3.103 6.034h17.794" />
                                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                                </svg>
                            </button>
                            <span className="absolute -top-[12px] -right-[10px] bg-red-500 text-white text-s rounded-full h-6 w-6 flex items-center justify-center">3</span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
    )
}