import { useEffect, useState} from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { OrdersHeader } from './Components/OrdersHeader'
import { moneyFormat } from '../Utils/moneyFormat'

export function OrdersPage() {
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
            <OrdersHeader />

            <div className="font-body text-brand-navy">
                <div className="flex flex-col mt-3">
                    <div className="text-[30px] font-bold m-2 text-center">Your Orders</div>
                    <div className="grid gap-5 flex-col md:grid-cols-2 xl:grid-cols-4 items-start">
                        {orders.map((order) => {
                            return (
                                <div key={order.id} className="flex flex-col gap-10 bg-white rounded-[10px] p-5 hover:bg-brand-cardhover hover:shadow-xl duration-800">
                                    <div>
                                        <div className="flex flex-col gap-3">
                                            <span>Order Placed : {dayjs(order.orderTimeMs).format('MMMM D')}</span>
                                            <span>Total : {moneyFormat(order.totalCostCents)}</span>
                                            <span>Order ID : {order.id}</span>
                                        </div>
                                    </div>
                                    <hr className=" border-t-2 border-gray-300 " />
                                    
                                    {order.products.map((orderProduct) => {
                                        return(
                                        <div key={orderProduct.productId} >
                                            <div className="flex items-center mb-5">
                                                <img className="h-65 w-60 object-fit:contain rounded-[20px]" src={orderProduct.product.image} />
                                                <div className="m-3 ">
                                                    <div className="flex flex-col gap-10">
                                                        <button className="cursor-pointer bg-brand-gold p-3 rounded-[15px] text-white text-[15px]"
                                                            >Order Again
                                                        </button>
                                                        <button className="cursor-pointer bg-red-500 p-3 rounded-[15px] text-white text-center text-[15px]" 
                                                            >Cancel
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5 mb-5">
                                                <span className="font-bold text-[20px]" >{orderProduct.product.name}</span>
                                               
                                                <span>Arriving On : {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}</span>
                                                <span>Quantity :{orderProduct.quantity}</span>
                                            </div>
                                            <hr className=" border-t-2 border-gray-300 " />
                                        </div>
                                        )
                                        
                                    })}

                                </div>
                            )
                        })}


                    </div>

                </div>
            </div>
        </>

    )
}