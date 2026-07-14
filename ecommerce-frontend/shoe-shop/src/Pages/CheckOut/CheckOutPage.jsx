
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'
//
import { CheckOutHeader } from '../Components/Headers/CheckOutHeader';
import { PaymentSummary } from './PaymentSummary'
import { DeliveryOptions } from './DeliveryOptions'
import { moneyFormat } from '../../Utils/moneyFormat'

export function CheckOutPage({ cart, loadCart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);

    const fetchDeliveryOption = async () => {
        const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
        setDeliveryOptions(response.data)

    }
    useEffect(() => {
        fetchDeliveryOption();
    }, [])

    return (
        <>
            <CheckOutHeader cart={cart} />
            <div className="flex flex-col md:flex-row gap-4 p-4 font-body text-brand-navy">
                <div className="flex-1">

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))]  gap-4 ">

                        {deliveryOptions.length > 0 && cart.map((cartItem) => {

                            const removeToCart = async () => {
                                await axios.delete(`/api/cart-items/${cartItem.productId}`);
                                await loadCart();
                            }

                            const selectedDeliveryOption = deliveryOptions.find((option) => {
                                return option.id === cartItem.deliveryOptionId
                            })

                            return (

                                <div key={`${cartItem.productId}-${cartItem.size}`} 
                                    className=" w-full max-w-[350px] mx-auto 
                                     bg-white mt-5 px-5 duration-800 hover:bg-brand-cardhover 
                                    hover:shadow-xl ">
                                    <hr className=" border-t-2 border-gray-300 " />
                                    <div className="text-center m-5 font-bold">
                                        Delivery Date :{dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                    </div>
                                    <div className="flex justify-center">
                                        <img src={cartItem.product.image} className="  h-80 w-70 object-fit:contain m-1 rounded-[20px] " />
                                    </div>
                                    <div className="font-bold text-center m-5 text-[18px]">
                                        {cartItem.product.name}
                                    </div>

                                    <div className="flex justify-center gap-1">
                                        <div className="grid grid-cols w-40 h-20 gap-3">
                                            <span className="font-bold">
                                                Other Info
                                            </span>
                                            <p>
                                                Price : <span className="font-bold"> {moneyFormat(cartItem.product.priceCents)}</span>
                                            </p>
                                            <p>
                                                size : <span className="font-bold">{cartItem.size}</span>
                                            </p>
                                            <p>
                                                Colour : <span className="font-bold">{cartItem.product.colour}</span>
                                            </p>
                                            <p>
                                                Quantity : <span className="font-bold">{cartItem.quantity}</span>
                                            </p>
                                        </div>

                                        <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />

                                    </div>

                                    <div className="flex justify-center mt-8">
                                        <span >
                                            <button onClick={removeToCart} className="bg-red-500 px-6 py-2 rounded-[15px] cursor-pointer text-white
                                                ">Remove</button>
                                        </span>
                                    </div>

                                    <hr className="my-1 border-t-2 border-gray-300 mt-10" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full md:w-[350px] flex-shrink-0">
                    <PaymentSummary cart={cart} loadCart={loadCart} />
                </div>
            </div>


        </>


    )
}