import { useEffect, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { OrdersHeader } from './Components/Headers/OrdersHeader'
import { moneyFormat } from '../Utils/moneyFormat'

export function OrdersPage({ cart }) {
    const [orders, getOrders] = useState([]);

    const fetchOrdersData = async () => {
        const response = await axios.get('/api/orders?expand=products')
        getOrders(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        fetchOrdersData();
    }, [])
    return (
        <>
            <OrdersHeader orders={orders} cart={cart} />

            <div className="font-body text-brand-navy">
                <div className="flex flex-col mt-3">
                    <div className="text-[30px] font-bold m-2 text-center">Your Orders</div>
                    <div className="grid gap-5   items-start">
                        {orders.map((order) => {


                            return (
                                <div key={order.id} className="flex flex-col gap-10 bg-white rounded-[10px] 
                                p-5 hover:bg-brand-cardhover hover:shadow-xl duration-800 border-1 border-brand-navy
                                m-5">
                                    <div>
                                        <div className="flex flex-col gap-3">
                                            <span>Order Placed : {dayjs(order.orderTimeMs).format('MMMM D')}</span>
                                            <span>Total : {moneyFormat(order.totalCostCents)}</span>
                                            <span>Order ID : {order.id}</span>
                                        </div>
                                    </div>
                                    <hr className=" border-t-2 border-gray-300 " />

                                    <div className=" flex flex-wrap md:gap-15">
                                        {order.products.map((orderProduct) => {

                                            const cancelOrder = async () => {
                                                await axios.delete(`/api/orders/${order.id}/products/${orderProduct.productId}`)
                                                await fetchOrdersData()
                                            }

                                            return (
                                                <div key={orderProduct.productId} className="mt-5 w-full md:w-[45%] lg:w-[30%] " >
                                                    <div className="flex flex-col md:flex-row items-center mb-5 md:gap-5">
                                                        <img className="h-65 w-60 object-fit:contain rounded-[20px] border-1 border-brand-navy" src={orderProduct.product.image} />

                                                        <div className="m-3 ">
                                                            <div className="flex flex-col gap-5 mb-5">
                                                                <span className="font-bold text-[20px]" >{orderProduct.product.name}</span>
                                                                <hr className=" hidden border-t-2 border-gray-300 md:block" />

                                                                <span>Arriving On : {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}</span>
                                                                <span>Quantity :{orderProduct.quantity}</span>
                                                            </div>

                                                            <button className="cursor-pointer bg-red-500 p-3 rounded-[15px] text-white text-center text-[15px]"
                                                                onClick={cancelOrder}>Cancel Order
                                                            </button>
                                                            
                                                        </div>
                                                        

                                                    </div>
                                                     <hr className=" m-5 border-t-2 border-gray-300 md:hidden" />


                                                </div>
                                            )

                                        })}
                                    </div>



                                </div>
                            )
                        })}


                    </div>

                </div>
            </div>
        </>

    )
}