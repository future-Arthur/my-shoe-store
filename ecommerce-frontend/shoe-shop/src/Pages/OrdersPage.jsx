import { OrdersHeader } from './Components/OrdersHeader'

export function OrdersPage() {
    return (
        <>
            <OrdersHeader />

            <div className="font-body text-brand-navy">
                <div className="flex flex-col mt-3">
                    <div className="text-[30px] font-bold m-2 text-center">Your Orders</div>
                    <div className="grid gap-5 flex-col md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex flex-col gap-10 bg-white rounded-[10px] p-5">
                            <div>
                                <div className="flex flex-col gap-3">
                                    <span>Order Placed : November 15</span>
                                    <span>Total : 6000</span>
                                    <span>Order ID : 27cba69d-4c3d-4098-b42d-ac7fa62b7664</span>
                                </div>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex items-center ">
                                <img className="h-60 rounded-[20px] " src="/images/products/black.jpg" />
                                <div className="m-3 ">
                                    <div className="flex flex-col gap-10">
                                        <button className="cursor-pointer bg-brand-gold p-3 
                                                rounded-[15px] text-white text-[15px]">Order Again</button>
                                        <button className="cursor-pointer bg-red-500 p-3 rounded-[15px] 
                                                text-white text-center text-[15px]" >Cancel</button>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="font-bold text-[20px]" >White Jeography leopard Mc'do</span>
                                <hr className=" border-t-2 border-gray-300 " />
                                <span>Arriving On : November 21</span>
                                <span>Quantity : 3</span>
                            </div>


                        </div>
                            <div className="flex flex-col gap-10 bg-white rounded-[10px] p-5">
                            <div>
                                <div className="flex flex-col gap-3">
                                    <span>Order Placed : November 15</span>
                                    <span>Total : 6000</span>
                                    <span>Order ID : 27cba69d-4c3d-4098-b42d-ac7fa62b7664</span>
                                </div>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex items-center ">
                                <img className="h-60 rounded-[20px] " src="/images/products/black.jpg" />
                                <div className="m-3 ">
                                    <div className="flex flex-col gap-10">
                                        <button className="cursor-pointer bg-brand-gold p-3 
                                                rounded-[15px] text-white text-[15px]">Order Again</button>
                                        <button className="cursor-pointer bg-red-500 p-3 rounded-[15px] 
                                                text-white text-center text-[15px]" >Cancel</button>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="font-bold text-[20px]" >White Jeography leopard Mc'do</span>
                                <hr className=" border-t-2 border-gray-300 " />
                                <span>Arriving On : November 21</span>
                                <span>Quantity : 3</span>
                            </div>


                        </div>

                            <div className="flex flex-col gap-10 bg-white rounded-[10px] p-5">
                            <div>
                                <div className="flex flex-col gap-3">
                                    <span>Order Placed : November 15</span>
                                    <span>Total : 6000</span>
                                    <span>Order ID : 27cba69d-4c3d-4098-b42d-ac7fa62b7664</span>
                                </div>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex items-center ">
                                <img className="h-60 rounded-[20px] " src="/images/products/black.jpg" />
                                <div className="m-3 ">
                                    <div className="flex flex-col gap-10">
                                        <button className="cursor-pointer bg-brand-gold p-3 
                                                rounded-[15px] text-white text-[15px]">Order Again</button>
                                        <button className="cursor-pointer bg-red-500 p-3 rounded-[15px] 
                                                text-white text-center text-[15px]" >Cancel</button>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="font-bold text-[20px]" >White Jeography leopard Mc'do</span>
                                <hr className=" border-t-2 border-gray-300 " />
                                <span>Arriving On : November 21</span>
                                <span>Quantity : 3</span>
                            </div>


                        </div>

                            <div className="flex flex-col gap-10 bg-white rounded-[10px] p-5">
                            <div>
                                <div className="flex flex-col gap-3">
                                    <span>Order Placed : November 15</span>
                                    <span>Total : 6000</span>
                                    <span>Order ID : 27cba69d-4c3d-4098-b42d-ac7fa62b7664</span>
                                </div>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex items-center ">
                                <img className="h-60 rounded-[20px] " src="/images/products/black.jpg" />
                                <div className="m-3 ">
                                    <div className="flex flex-col gap-10">
                                        <button className="cursor-pointer bg-brand-gold p-3 
                                                rounded-[15px] text-white text-[15px]">Order Again</button>
                                        <button className="cursor-pointer bg-red-500 p-3 rounded-[15px] 
                                                text-white text-center text-[15px]" >Cancel</button>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className="font-bold text-[20px]" >White Jeography leopard Mc'do</span>
                                <hr className=" border-t-2 border-gray-300 " />
                                <span>Arriving On : November 21</span>
                                <span>Quantity : 3</span>
                            </div>


                        </div>
                        






                    </div>

                </div>
            </div>
        </>

    )
}