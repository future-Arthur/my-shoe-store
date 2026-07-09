
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'

import { CheckOutHeader } from '../Components/CheckOutHeader';
import {PaymentSummary} from './PaymentSummary'

export function CheckOutPage() {
    const [cart, setCart] = useState([]);
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    const fetchCartData = async () => {
        const response = await axios.get('/api/cart-items?expand=product')
        setCart(response.data)
        console.log(response.data)
    }
    const fetchDeliveryOption = async () => {
        const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
        setDeliveryOptions(response.data)
        console.log(response.data)
    }

    const fetchPaymentData = async ()=>{
        const response = await axios.get('/api/payment-summary')
        setPaymentSummary(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        fetchCartData();
        fetchDeliveryOption();
        fetchPaymentData();
    }, [])
    return (

        <>
            <CheckOutHeader />

            <div className="grid grid-cols-1 md:flex font-body text-brand-navy">
                <div className=" flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-2 m-2">

                        {cart.map((cartItem) => {
                            return (
                                <div key={cartItem.productId} className="grid grid-cols-1 justify-center w-full bg-white mt-5 p-5">
                                    <hr className=" border-t-2 border-gray-300 " />
                                    <div className="text-center m-5 font-bold">
                                        Delivery Date : November 21, 2099
                                    </div>
                                    <div className="flex justify-center">
                                        <img src={cartItem.product.image} className="h-80 m-1 rounded-[20px]" />
                                    </div>
                                    <div className="font-bold text-center m-5 text-[18px]">
                                        {cartItem.product.name}
                                    </div>

                                    <div className="flex justify-center gap-1">
                                        <div className="grid grid-cols">
                                            <span className="font-bold">
                                                Other Info
                                            </span>
                                            <div >
                                                Price : <span className="font-bold"> {cartItem.product.priceCents}</span>
                                            </div>
                                            <div>
                                                size : <span className="font-bold">{cartItem.size}</span>
                                            </div>
                                            <div>
                                                Colour : <span className="font-bold">{cartItem.product.colour}</span>
                                            </div>
                                            <div >
                                                Quantity : <span className="font-bold">{cartItem.quantity}</span>
                                            </div>

                                        </div>

                                        <div className="grid gap-[10px]">
                                            <h3 className="text-center font-bold" >Delivery Option</h3>
                                            {deliveryOptions.map((option) => {
                                                let stringShipping = "Free Shipping"

                                                if (option.priceCents > 0) {
                                                    stringShipping = (`₱${(option.priceCents / 10).toFixed(2)} - Shipping `)
                                                }

                                                return (
                                                    <div key={option.id} className="flex ">
                                                        <input type="radio" onChange = {()=>{}}
                                                         checked = {cartItem.deliveryOptionId === option.id} />
                                                        <div className="ml-3">
                                                            <div className="font-bold">
                                                                {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                                            </div>
                                                            <div className="opacity-50">
                                                                {stringShipping}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}


                                        </div>

                                    </div>

                                    <div className="flex justify-center mt-8">
                                        <span >
                                            <button className="bg-red-500 px-6 py-2 rounded-[15px] cursor-pointer text-white ">Remove</button>
                                        </span>
                                    </div>

                                    <hr className="my-1 border-t-2 border-gray-300 mt-10" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                        {<PaymentSummary paymentSummary = {paymentSummary}/>}
       


            </div>


        </>


    )
}