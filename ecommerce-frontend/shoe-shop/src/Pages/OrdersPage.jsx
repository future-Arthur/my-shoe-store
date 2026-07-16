import { useEffect, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import toast from 'react-hot-toast';
import { OrdersHeader } from './Components/Headers/OrdersHeader'
import { moneyFormat } from '../Utils/moneyFormat'
import {Devider} from './Components/Devider'
export function OrdersPage({ cart }) {
    const [orders, getOrders] = useState([]);

    const fetchOrdersData = async () => {
        try{
              const response = await axios.get('https://my-shoe-store-backend.onrender.com/api/orders?expand=products')
        getOrders(response.data)
        }catch(error){
            console.error(`Error fetching Orders : ${error}`)
        }
      
    }
    useEffect(() => {
        fetchOrdersData();
    }, [])
    return (
        <>
            <OrdersHeader orders={orders} cart={cart} />

            <div className="font-body text-brand-navy flex justify-center">
                <div className="flex flex-col mt-3">
                    <div className="text-[30px] font-bold m-2 text-center">
                        Your Orders
                    </div>
                    <div className="grid gap-5   items-start overflow-x-hidden md:pr-10 md:mb-40 lg:mb-120 xl:mb-0 ">

                        {orders.map((order) => {

                            return (
                                <div key={order.id} className="flex flex-col gap-10 bg-white rounded-[10px] p-5 
                                    hover:bg-brand-cardhover hover:shadow-xl duration-800 border-1 border-brand-navy m-5 w-[350px] md:w-full">

                                    <div>
                                        <div className="flex flex-col gap-3">
                                            <span>Order Placed : {dayjs(order.orderTimeMs).format('MMMM D')}</span>
                                            <span>Total : {moneyFormat(order.totalCostCents)}</span>
                                            <span>Order ID : {order.id}</span>
                                        </div>
                                    </div>

                                    <Devider />
                                
                                    <div className=" flex flex-wrap md:gap-15 justify-center md:justify-start">
                                        {order.products.map((orderProduct) => {

                                            const cancelOrder = async () => { 
                                                try{
                                                     await axios.delete(`https://my-shoe-store-backend.onrender.com/api/orders/${order.id}/products/${orderProduct.productId}`)
                                                    toast.success("Order cancelled")
                                                await fetchOrdersData()
                                                }catch(error){
                                                    console.error(`Error cancelling Order : ${error}`)
                                                    console.error("Failed to cancel")
                                                }                     
                                               
                                            }

                                            return (

                                                <div key={orderProduct.productId} className="mt-5" >
                                                    <div className="flex flex-col md:flex-row items-center mb-5 md:gap-5 w-[250px] md:w-[500px]">
                                                            <img className="h-65 w-60 object-fit:contain rounded-[20px] border-1 border-brand-navy" 
                                                                src={`https://my-shoe-store-backend.onrender.com/${orderProduct.product.image}` } 
                                                                alt={orderProduct.name} />
               
                                                        <div className="m-3 ">
                                                            <div className="flex flex-col gap-5 mb-5">
                                                                <span className="font-bold text-[20px] " >{orderProduct.product.name}</span>

                                                                <Devider />
                                                        
                                                                <span >Arriving On : {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}</span>
                                                                <span>Quantity :{orderProduct.quantity}</span>
                                                                
                                                            </div>

                                                            <button className="cursor-pointer bg-red-500 p-3 rounded-[15px] text-white text-center text-[15px]"
                                                                onClick={cancelOrder}>Cancel Order
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <Devider/>
                                             
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