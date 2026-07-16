import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { moneyFormat } from '../../Utils/moneyFormat';
import {Devider} from '../Components/Devider';


export function PaymentSummary({ cart, loadCart }) {
    const [paymentSummary, setPaymentSummary] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const fetchPaymentData = async () => {
        try{
             const response = await axios.get('https://my-shoe-store-backend.onrender.com/api/payment-summary')
        setPaymentSummary(response.data);
        }catch(error){
            console.error(`Error fetching payment data : ${error}`)
        }
       
    }

    useEffect(() => {
        fetchPaymentData();
    }, [cart])

    const placeOrder = async () => {
        try{
             await axios.post('https://my-shoe-store-backend.onrender.com/api/orders')
             await loadCart();
             navigate('/orders')
        }catch(error){
            console.error(`error placing Order : ${error}`)
        }
       
       
    }


    return (
        <>
            {paymentSummary && (
                <div className="flex-shrink-0 rounded-[20px] fixed bottom-0 left-0 w-full z-50 
                    shadow-lg md:static md:w-auto md:shadow-none">

                    <div>
                        <div className="flex justify-center">
                            <button onClick={() => setIsExpanded(!isExpanded)}>
                                <img src="/images/icons/chevron.png"
                                    className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""} md:hidden`} />
                            </button>
                        </div>

                        <div className={`p-5 grid gap-3 ${isExpanded ? "block" : "hidden"} bg-brand-navy text-white rounded-t-[10px] 
                             md:rounded-none md:block md:bg-white  md:text-brand-navy md:flex md:flex-col md:gap-5`}>

                            <div className="text-center mb-10 font-bold text-[25px]">
                                Payment Summary
                            </div>

                            <div className="flex justify-between ">
                                <span className="opacity-80">Items ({paymentSummary.totalItems}) :</span>
                                <span className="font-bold mr-5">{moneyFormat(paymentSummary.productCostCents)}</span>
                            </div>

                            <Devider />
                       
                            <div className="flex justify-between  ">
                                <span className="opacity-80">Shipping : </span>
                                <span className="font-bold mr-5"> {moneyFormat(paymentSummary.shippingCostCents)}</span>
                            </div>

                            <Devider />
                      
                            <div className="flex justify-between ">
                                <span className="opacity-80">Total before Tax :</span>
                                <span className="font-bold mr-5"> 
                                    {moneyFormat(paymentSummary.totalCostBeforeTaxCents)} 
                                </span>
                            </div>

                            <Devider />

                            <div className="flex justify-between ">
                                <span className="opacity-80">Estimated Tax :</span>
                                <span className="font-bold mr-5">
                                    {moneyFormat(paymentSummary.taxCents)} 
                                </span>
                            </div>

                            <Devider />
                
                        </div>
                        <div className="bg-brand-navy text-white pb-7 pt-3 px-5 flex flex-col gap-3 
                               md:bg-white md:text-brand-navy">
                            <div className="flex justify-between ">
                                <span className="font-bold text-[20px]">Order Total :  </span>
                                <span className="font-bold mr-5 text-[20px]"> 
                                    {moneyFormat(paymentSummary.totalCostCents)} 
                                </span>
                            </div>

                            <div className="text-center">
                                <button className="bg-brand-gold px-5 py-3 rounded-[15px] text-white w-full
                                    hover:bg-amber-400 cursor-pointer" onClick={placeOrder} >
                                        Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}