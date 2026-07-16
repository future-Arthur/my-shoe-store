
import axios from 'axios'
import dayjs from 'dayjs';
import { moneyFormat } from '../../Utils/moneyFormat';

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {

    return (
        <div className="grid gap-[10px]">
            <h3 className="text-center font-bold" >Delivery Option</h3>
            {deliveryOptions.map((option) => {
                let stringShipping = "Free Shipping"

                if (option.priceCents > 0) {
                    stringShipping = (`${moneyFormat(option.priceCents)} - Shipping `)
                }

                const updateDeliveryOption = async () => {
                    try {
                        await axios.put(`https://my-shoe-store-backend.onrender.com/api/cart-items/${cartItem.productId}`, {
                            deliveryOptionId: option.id
                        })
                        await loadCart();
                    } catch (error) {
                        console.error(`Error updating delivery option : ${error}`)
                    }

                }

                return (
                    <div key={option.id} className="flex cursor-pointer"
                        onClick={updateDeliveryOption}>

                        <input type="radio" checked={option.id === cartItem.deliveryOptionId}
                            onChange={() => { }} name={`delivery-option-${cartItem.productId}`} />

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
    )
}