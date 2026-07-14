import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { calculateCartQuantity } from '../../../Utils/calculateCartQuantity'

export function Header({ cart, setOnSearch,setSelectedCategory,wishList }) {
    const [search, setSearch] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const totalQuantity = calculateCartQuantity(cart);

    const navigate = useNavigate();

    const inputValue = (event) => {
        const input = (event.target.value);
        setSearch(input)
        if (setOnSearch) {
            setOnSearch(input)

        }

    }
    const handleSearchSubmit = (event) => {
        navigate('/products')
        event.preventDefault()

        if (setOnSearch) {
            setOnSearch(search)
        }

    }

    return (
        <nav className="bg-brand-navy flex flex-col justify-center font-headline p-[10px] md:flex-row md:justify-between ">
            <div className="flex justify-start items-center gap-2 ">
                <Link className="flex items-center gap-2 cursor-pointer" to="/">
                    <img className="w-15 h-15 rounded-[50%]" src="/images/icons/shoeLog.jpg" />
                    <span className="text-[35px] text-white font-bold ">SHOE'S<span className="text-brand-gold">HOP</span></span>
                </Link>
            </div>

            <div className={`${isMenuOpen? "flex justify-between" : "hidden"}   md:flex md:max-gap-2 xl:gap-80 p-5`}>
                <div className="flex text-white gap-10 items-center md:hidden lg:flex lg:gap-20 xl:gap-30">
                    <Link to="/products"><button className="cursor-pointer" onClick={() => { setSelectedCategory('All') }}>FEATURED</button></Link>
                    <Link to="/products"><button className="cursor-pointer" onClick={() => { setSelectedCategory('Mens') }}>MENS</button></Link>
                    <Link to="/products"><button className="cursor-pointer" onClick={() => { setSelectedCategory('Womens') }}>WOMENS</button></Link>
                    <Link to="/products"><button className="cursor-pointer" onClick={() => { setSelectedCategory('Kids') }}>KIDS</button></Link>
                </div>
            </div>

            <div className="text-white items-center flex xl:mr-5 flex justify-evenly xl:gap-5">
                <div className="flex items-center md:hidden">
                    <button onClick = {()=>{setIsMenuOpen(!isMenuOpen)}}>
                         <img src="/images/icons/menu.png" />
                    </button>
                   
                </div>
                <form className="flex bg-white items-center rounded-[10px] ml-10 md:ml-0" onSubmit={handleSearchSubmit} >
                    <button className="m-2 cursor-pointer"
                    ><img src="/images/icons/search.png" /></button>
                    <input type="text"
                        value={search} onChange={inputValue}
                        placeholder="find shoes"
                        spellCheck="false"
                        className="bg-white text-black rounded  transition-all 
                                 duration-500  outline-none text-sm w-45 md:w-60"
                    />
                </form>

                <div className = "relative">
                    <Link to="/wishlist">
                        <img src= "/images/icons/whiteheart.png" className = "w-10 h-10"/>
                     </Link>
                      <span className={`absolute -top-[9px] -right-[13px] bg-red-500 
                                text-white text-s rounded-full h-6 w-6 
                                flex items-center justify-center ${wishList.length === 0 && "hidden"}`}>{wishList.length}
                        </span>
                </div>

                <div className="relative flex">
                    <Link to="/checkout" >
                        <svg className="lucide lucide-shopping-bag-icon lucide-shopping-bag cursor-pointer "
                            xmlns="http://www.w3.org/2000/svg"
                            width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M16 10a4 4 0 0 1-8 0" />
                            <path d="M3.103 6.034h17.794" />
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                        </svg>
                        <span className={`absolute -top-[9px] -right-[13px] bg-red-500 
                                text-white text-s rounded-full h-6 w-6 
                                flex items-center justify-center ${totalQuantity === 0 && "hidden"}`}>{totalQuantity}
                        </span>
                    </Link>
                   

                </div>
                
                
            </div>

        </nav>
    )
}