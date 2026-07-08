import { Link } from 'react-router-dom'

export function CheckOutPage() {
    return (
        <>
            <nav className="bg-brand-navy flex font-headline p-[1px] justify-between items-center ">
                <div className="flex justify-start gap-2 hidden md:flex">
                    <Link className="flex items-center gap-2 cursor-pointer" to="/">
                        <img className="w-15 h-15 rounded-[50%]" src="../../public/images/shoeLog.jpg" />
                        <span className="text-[35px] text-white font-bold ">SHOE'S<span className="text-brand-gold">HOP</span></span>
                    </Link>
                </div>

                <div className=" flex items-center text-[25px] text-white lg:text-[28px]">
                    <h2 className="mr-2"> Shopping Bag</h2>
                    <span className="text-brand-gold"> (3)</span>
                </div>

                <div className="flex">
                    <div className="m-5 text-[20px] ">
                        <Link to="/products" className="text-[20px] text-white">Products</Link>
                    </div>
                    <div className="m-5 text-[20px]">
                        <Link to= "/orders" className="text-white">Orders</Link>
                    </div>
                </div>


            </nav>

            <div className="grid grid-cols-1 md:flex font-body text-brand-navy">

                <div className=" flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-2 m-2">

                        <div className="grid grid-cols-1 justify-center w-full bg-white mt-5 ">
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="text-center m-5 font-bold">
                                Delivery Date : November 21, 2099
                            </div>
                            <div className="flex justify-center">
                                <img src="/images/products/pink.jpg" className="h-80 m-1 rounded-[20px]" />
                            </div>
                            <div className="font-bold text-center m-5 text-[18px]">
                                White Jeography leopard Mc'do
                            </div>

                            <div className="flex justify-center gap-10">
                                <div className="grid grid-cols">
                                    <span className="font-bold">
                                        Other Info
                                    </span>
                                    <div >
                                        Price : <span className="font-bold"> 5000</span>
                                    </div>
                                    <div>
                                        size : <span className="font-bold">L</span>
                                    </div>
                                    <div>
                                        Color : <span className="font-bold">Pink</span>
                                    </div>
                                    <div >
                                        Quantity : <span className="font-bold"> 2</span>
                                    </div>

                                </div>
                                <div className="grid gap-[10px]">
                                    <h3 className="text-center font-bold" >Delivery Option</h3>
                                    <div className="flex ">
                                        <input type="radio" />
                                        <div className="ml-3">
                                            <div className="font-bold">
                                                TuesDay, june 21
                                            </div>
                                            <div className="opacity-50">
                                                Free Shipping
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" />
                                        <div className="ml-3">
                                            <div className="font-bold">
                                                TuesDay, june 21
                                            </div>
                                            <div className="opacity-50">
                                                499 Shipping
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex ">
                                        <input type="radio" />
                                        <div className="ml-3">
                                            <div className="font-bold">
                                                TuesDay, june 21
                                            </div>
                                            <div className="opacity-50">
                                                999 Shipping
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex justify-center mt-8">
                                <span >
                                    <button className="bg-red-500 px-6 py-2 rounded-[15px] cursor-pointer text-white ">Remove</button>
                                </span>
                            </div>

                            <hr className="my-1 border-t-2 border-gray-300 mt-10" />
                        </div>

                        <div className="grid grid-cols-1 justify-center w-full bg-white mt-5 ">
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="text-center m-5 font-bold">
                                Delivery Date : November 21, 2099
                            </div>
                            <div className="flex justify-center">
                                <img src="/images/products/pink.jpg" className="h-80 m-1 rounded-[20px]" />
                            </div>
                            <div className="font-bold text-center m-5 text-[18px]">
                                White Jeography leopard Mc'do
                            </div>

                            <div className="flex justify-center gap-10">
                                <div className="grid grid-cols">
                                    <span className="font-bold">
                                        Other Info
                                    </span>
                                    <div >
                                        Price : <span className="font-bold"> 5000</span>
                                    </div>
                                    <div>
                                        size : <span className="font-bold">L</span>
                                    </div>
                                    <div>
                                        Color : <span className="font-bold">Pink</span>
                                    </div>
                                    <div >
                                        Quantity : <span className="font-bold"> 2</span>
                                    </div>

                                </div>
                                <div className="grid gap-[10px]">
                                    <h3 className="text-center font-bold" >Delivery Option</h3>
                                    <div className="flex ">
                                        <input type="radio" />
                                        <div className="ml-3">
                                            <div className="font-bold">
                                                TuesDay, june 21
                                            </div>
                                            <div className="opacity-50">
                                                Free Shipping
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" />
                                        <div className="ml-3">
                                            <div className="font-bold">
                                                TuesDay, june 21
                                            </div>
                                            <div className="opacity-50">
                                                499 Shipping
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex ">
                                        <input type="radio" />
                                        <div className="ml-3">
                                            <div className="font-bold">
                                                TuesDay, june 21
                                            </div>
                                            <div className="opacity-50">
                                                999 Shipping
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex justify-center mt-8">
                                <span >
                                    <button className="bg-red-500 px-6 py-2 rounded-[15px] cursor-pointer text-white ">Remove</button>
                                </span>
                            </div>

                            <hr className="my-1 border-t-2 border-gray-300 mt-10" />
                        </div>

                        <div className="grid grid-cols-1 justify-center w-full bg-white mt-5 ">
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="text-center m-5 font-bold">
                                Delivery Date : November 21, 2099
                            </div>
                            <div className="flex justify-center">
                                <img src="/images/products/pink.jpg" className="h-80 m-1 rounded-[20px]" />
                            </div>
                            <div className="font-bold text-center m-5 text-[18px]">
                                White Jeography leopard Mc'do
                            </div>

                            <div className="flex justify-center gap-10">
                                <div className="grid grid-cols">
                                    <span className="font-bold">
                                        Other Info
                                    </span>
                                    <div >
                                        Price : <span className="font-bold"> 5000</span>
                                    </div>
                                    <div>
                                        size : <span className="font-bold">L</span>
                                    </div>
                                    <div>
                                        Color : <span className="font-bold">Pink</span>
                                    </div>
                                    <div >
                                        Quantity : <span className="font-bold"> 2</span>
                                    </div>

                                </div>
                                <div className="grid gap-[10px]">
                                    <h3 className="text-center font-bold" >Delivery Option</h3>
                                    <div className="flex ">
                                        <input type="radio" />
                                        <div className="ml-3">
                                            <div className="font-bold">
                                                TuesDay, june 21
                                            </div>
                                            <div className="opacity-50">
                                                Free Shipping
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" />
                                        <div className="ml-3">
                                            <div className="font-bold">
                                                TuesDay, june 21
                                            </div>
                                            <div className="opacity-50">
                                                499 Shipping
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex ">
                                        <input type="radio" />
                                        <div className="ml-3">
                                            <div className="font-bold">
                                                TuesDay, june 21
                                            </div>
                                            <div className="opacity-50">
                                                999 Shipping
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex justify-center mt-8">
                                <span >
                                    <button className="bg-red-500 px-6 py-2 rounded-[15px] cursor-pointer text-white ">Remove</button>
                                </span>
                            </div>

                            <hr className="my-1 border-t-2 border-gray-300 mt-10" />
                        </div>






                    </div>




                </div>

                <div className="w-full md:w-[20%]">
                    <div className="flex-shrink-0 bg-white">
                        <div className="p-5 grid gap-5 ">
                            <div className="text-center mb-10 mt-5 font-bold text-[25px]">
                                Payment Summary
                            </div>
                            <div className="flex justify-between">
                                <span className="opacity-80">Items (3) :</span>
                                <span className="font-bold mr-5"> 19,000 </span>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex justify-between">
                                <span className="opacity-80">Shipping : </span>
                                <span className="font-bold mr-5"> 499 </span>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex justify-between">
                                <span className="opacity-80">Total before Tax :</span>
                                <span className="font-bold mr-5"> 19,000 </span>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex justify-between">
                                <span className="opacity-80">Estimated Tax :</span>
                                <span className="font-bold mr-5"> 500 </span>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex justify-between">
                                <span className="font-bold text-[20px]">Order Total :  </span>
                                <span className="font-bold mr-5 text-[20px]"> 20,000 </span>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="text-center">
                                <button className="bg-brand-gold 
                            px-5 py-3 rounded-[15px] 
                            text-white w-full
                            hover:bg-amber-400 cursor-pointer">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>


    )
}