


export function PaymentSummary({paymentSummary}) {
    return (
        <div className="w-full md:w-[20%]">
            <div className="flex-shrink-0 bg-white">
                <div className="p-5 grid gap-5 ">
                    {paymentSummary && (
                        <>
                            <div className="text-center mb-10 mt-5 font-bold text-[25px]">
                                Payment Summary
                            </div>
                            <div className="flex justify-between">
                                <span className="opacity-80">Items ({paymentSummary.totalItems}) :</span>
                                <span className="font-bold mr-5">₱{paymentSummary.productCostCents}</span>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex justify-between">
                                <span className="opacity-80">Shipping : </span>
                                <span className="font-bold mr-5"> ₱{(paymentSummary.shippingCostCents/10).toFixed(2)}</span>
                            </div>
                            <hr className=" border-t-2 border-gray-300" />
                            <div className="flex justify-between">
                                <span className="opacity-80">Total before Tax :</span>
                                <span className="font-bold mr-5"> ₱{(paymentSummary.totalCostBeforeTaxCents/10).toFixed(2)} </span>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex justify-between">
                                <span className="opacity-80">Estimated Tax :</span>
                                <span className="font-bold mr-5">₱{(paymentSummary.taxCents/10).toFixed(2)} </span>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="flex justify-between">
                                <span className="font-bold text-[20px]">Order Total :  </span>
                                <span className="font-bold mr-5 text-[20px]"> {paymentSummary.totalCostCents} </span>
                            </div>
                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="text-center">
                                <button className="bg-brand-gold 
                            px-5 py-3 rounded-[15px] 
                            text-white w-full
                            hover:bg-amber-400 cursor-pointer">Place Order</button>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}