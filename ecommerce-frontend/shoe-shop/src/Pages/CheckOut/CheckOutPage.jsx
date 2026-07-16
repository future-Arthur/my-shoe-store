
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'
//
import { CheckOutHeader } from '../Components/Headers/CheckOutHeader';
import { PaymentSummary } from './PaymentSummary'
import { DeliveryOptions } from './DeliveryOptions'
import { moneyFormat } from '../../Utils/moneyFormat'
import { Devider } from '../Components/Devider'

export function CheckOutPage({ cart, loadCart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);

    const fetchDeliveryOption = async () => {
        try {
            const response = await axios.get('https://my-shoe-store-backend.onrender.com/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data)
        } catch (error) {
            console.error(`Error fetching delivery options : ${error}`)
        }

    }

    useEffect(() => {
        fetchDeliveryOption();
    }, [])

    return (
        <>
            <CheckOutHeader cart={cart} />
            <div className="flex flex-col md:flex-row gap-4 p-4 font-body text-brand-navy">

                <div className="flex-1">

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))]  gap-4 mb-[150px]">

                        {deliveryOptions.length > 0 && cart.map((cartItem) => {

                            const removeToCart = async () => {
                                try {
                                    await axios.delete(`https://my-shoe-store-backend.onrender.com/api/cart-items/${cartItem.productId}`);
                                    await loadCart();
                                } catch (error) {
                                    console.error(`Error removing from cart : ${error}`)
                                }

                            }

                            const selectedDeliveryOption = deliveryOptions.find((option) => {
                                return option.id === cartItem.deliveryOptionId
                            })

                            return (

                                <div key={`${cartItem.productId}-${cartItem.size}`} className=" w-full max-w-[350px] mx-auto bg-white 
                                        mt-5 px-5 duration-800 hover:bg-brand-cardhover hover:shadow-xl ">

                                    <Devider />
                                    <div className="text-center m-5 font-bold">
                                        Delivery Date :{dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                    </div>
                                    <div className="flex justify-center">
                                        <img src={`https://my-shoe-store-backend.onrender.com/images/${cartItem.product.image}`} alt={cartItem.product.name} className="  h-90 w-80 object-fit:contain m-1 rounded-[10px] " />
                                    </div>
                                    <div className="font-bold text-center m-5 text-[18px]">
                                        {cartItem.product.name}
                                    </div>

                                    <div className="flex justify-center gap-1">
                                        <div className="grid grid-cols w-40 h-20 gap-3">
                                            <span className="font-bold">
                                                Other Info
                                            </span>
                                            <p> Price :
                                                <span className="font-bold"> {moneyFormat(cartItem.product.priceCents)}
                                                </span>
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

                                    <div className="flex justify-center mt-8 mb-5">
                                        <span >
                                            <button onClick={removeToCart} className="bg-red-500 px-6 py-2 rounded-[15px] cursor-pointer text-white">
                                                Remove
                                            </button>
                                        </span>
                                    </div>

                                    <Devider />
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