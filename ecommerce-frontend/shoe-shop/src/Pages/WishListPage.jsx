import axios from 'axios';
import { Header } from './Components/Headers/Header'
import { moneyFormat } from '../Utils/moneyFormat';
import { SelectSizeButton } from './Components/Buttons/selectSizeButton'

export function WishListPage({ cart, wishList, loadWishList, loadCart, selectedSize, setSelectedSize }) {




    return (
        <>
            <Header cart={cart} wishList={wishList} />

            <div className="font-body gap-10 text-brand-navy">
                <div className="text-center mt-5 font-bold text-[30px]">
                    Your Wish List
                </div>

                <div className="p-10 justify-center grid md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))]  overflow-x-hidden  gap-5 mb-30 lg:mb-200">

                    {wishList.map((wish) => {
                        const removeToWishList = async () => {
                            try{
                                await axios.delete(`https://my-shoe-store-backend.onrender.com/api/wishlist/${wish.productId}`)
                                await loadWishList();
                            }catch(error){
                                console.error(`Error deleting WishList Item : ${error}`)
                            }
                            
                        }

                        const addToCart = async () => {

                            if (!selectedSize[wish.productId]) {
                                alert("Please Select Size First")
                                return;
                            }
                            try{
                                await axios.post('https://my-shoe-store-backend.onrender.com/api/cart-items', {
                                productId: wish.productId,
                                quantity: 1,
                                size: selectedSize[wish.productId],
                            })
                            removeToWishList();
                            await loadCart();
                            }catch(error){
                                console.error(`Error adding to Cart : ${error}`)

                            
                            }

                        }
                        return (
                            <div key={wish.productId} className=" flex flex-col md:flex-row items-center bg-white shadow-xl w-[300px] 
                                md:w-[550px] md:h-[300px] p-2 md:p-0 hover:bg-brand-gold hover:text-brand-navy duration-100 relative group duration-500">

                                <img src={`https://my-shoe-store-backend.onrender.com/images/products/${wish.product.image}`} alt={wish.product.name} className="h-80  w-70 md:h-75 md:w-60  md:p-2" />

                                <div className="flex absolute top-[280px] left-[30px] md:top-[245px] md:left-[15px] 
                                        items-center lg:opacity-0 lg:group-hover:opacity-100 text-brand-navy">
                                    <span className="opacity-50 mr-5 md:mr-2">Size </span>
                                    <SelectSizeButton product={wish.product} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                                </div>


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

                                        <button className="cursor-pointer bg-brand-navy  py-3 px-3 rounded-[15px] text-white " onClick={addToCart}>
                                            Add To Cart
                                        </button>
                                        <button className="cursor-pointer bg-red-500 py-3 px-5  rounded-[15px] text-white" onClick={removeToWishList}>
                                            Remove
                                        </button>
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