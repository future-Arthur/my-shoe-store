
import { Header } from './Components/Headers/Header'
import { moneyFormat } from '../Utils/moneyFormat';
import axios from 'axios';

export function WishListPage({ cart, wishList, loadWishList, loadCart}) {



    return (
        <>
            <Header cart={cart} wishList={wishList} />

            <div className="font-body gap-10 text-brand-navy">
                <div className="text-center mt-5 font-bold text-[30px]">Your Wish List</div>
                <div className="p-10 justify-center grid md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))]  overflow-x-hidden  gap-5">

                    {wishList.map((wish) => {
                        const removeToWishList = async () => {
                            await axios.delete(`/api/wishlist/${wish.productId}`)
                            await loadWishList();
                        }

                        const addToCart = async() =>{
                            await axios.post('/api/cart-items',{
                                productId : wish.productId,
                                quantity : 1,
                                size : 9
                            })
                            removeToWishList();
                            await loadCart();
                        }
                        return (
                            <div key={wish.productId} className=" flex flex-col md:flex-row items-center 
                            bg-white shadow-xl w-[300px] md:w-[550px] md:h-[300px] p-2 md:p-0 hover:bg-brand-gold hover:text-brand-navy duration-1000">
                                <img src={wish.product.image} className="h-80  w-70 md:h-75 md:w-60  md:p-2" />
                                <div className="p-2 md:p-5 flex flex-col gap-5 md:flex ">
                                    <div>
                                        Name : <span className=" font-bold">{wish.product.name}</span>
                                    </div>
                                    <div >
                                        Colour : <span className="font-bold">{wish.product.colour}</span>
                                    </div>
                                    <div className="hidden">
                                        size : <span className=" font-bold">Lg</span>
                                    </div>
                                    <div>
                                        Price : <span className=" font-bold">{moneyFormat(wish.product.priceCents)}</span>
                                    </div>

                                    <hr className=" border-t-2 border-gray-300 mt-5" />
                                    <div className="flex gap-5  ">

                                        <button className="cursor-pointer bg-brand-navy  py-3 px-3 rounded-[15px] text-white " onClick = {addToCart}>Add To Cart</button>
                                        <button className="cursor-pointer bg-red-500 py-3 px-5  rounded-[15px] text-white" onClick= { removeToWishList }>Remove</button>
                                    </div>

                                </div>

                            </div>
                        )
                    })}










                </div>
            </div>

        </>

    )
}