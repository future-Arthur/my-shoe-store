import '../index.css'

export function HomePage() {
    return (

        <>
            <nav className="bg-brand-navy flex justify-between font-headline p-2">
                <div className="flex justify-center items-center gap-2">
                    <a className="flex items-center gap-2 cursor-pointer" href="/">
                        <img className="w-15 h-15 rounded-[50%]" src="../../public/images/shoeLog.jpg" />
                        <span className="text-[35px] text-white font-bold ">SHOE'S<span className="text-brand-gold">HOP</span></span>
                    </a>
                </div>
                <div className="flex text-white gap-20 items-center ">
                        <a>MEN</a>
                        <a>WOMEN</a>
                        <a>KIDS</a>

                  
                </div>
                <div className="text-white items-center gap-5 flex items-center ">
                    <div className="flex bg-white items-center rounded-[10px] ">
                        <span className="m-2" ><img src="../../public/images/search.png" /></span>
                        <input type="text" placeholder="search  shoes"
                            spellCheck="false"
                            className="bg-white rounded cursor-pointer w-50 h-10 
                        rounded-[10px] text-black outline-none text-sm !font-light hidden md:flex"/>
                    </div>

                    <div className="realtive mr-10 flex gap-4">
                        <button className="cursor-pointer">
                            <svg className=" cursor-pointer" xmlns="http://www.w3.org/2000/svg" 
                                width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                className="lucide lucide-shopping-bag-icon lucide-shopping-bag">
                                <path d="M16 10a4 4 0 0 1-8 0" />
                                <path d="M3.103 6.034h17.794" />
                                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                            </svg>
                        </button>
                        <span className="absolute -top-[-7px] -right-[-27px] bg-red-500 text-white text-s rounded-full h-6 w-6 flex items-center justify-center">3</span>
                    </div>

                </div>
            </nav>
            <div>

            </div>
        </>

    )
}