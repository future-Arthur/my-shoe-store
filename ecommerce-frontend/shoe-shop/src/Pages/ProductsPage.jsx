import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { Header } from './Components/Headers/Header'
import { moneyFormat } from '../Utils/moneyFormat'
import { AddToWishList } from './Components/Buttons/addToWishListButton'
import { SelectSizeButton } from './Components/Buttons/selectSizeButton'



export function ProductsPage({ cart, loadCart, onSearch, setOnSearch, selectedCategory, setSelectedCategory,
    loadWishList, wishList, selectedSize, setSelectedSize }) {

    const [products, setProducts] = useState([]);

    const [isClicked, setIsClicked] = useState(false);

    const fetchProductsData = async () => {
        try{
            const response = await axios.get('https://my-shoe-store-backend.onrender.com/api/products')
             setProducts(response.data)
        }catch(error){
            console.error(`Error fetching product data : ${error} `)
        }
      
    }

    useEffect(() => {

        fetchProductsData();

    }, [])

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(onSearch.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

        return matchesSearch && matchesCategory;

    })

    const wishListIds = wishList.map((item) => item.productId)


    return (
        <>
            <Header cart={cart} setOnSearch={setOnSearch} setSelectedCategory={setSelectedCategory} wishList={wishList} />
   

            <div className=" bg-brand-medwhite grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 font-body 
                overflow-x-hidden text-brand-navy mb-20 md:mb-50 lg:mb-130">

                {filteredProducts.map((product) => {

                    const addToCart = async () => {
                        const sizeToSubmit = selectedSize[product.id]

                        setIsClicked(true);

                        setTimeout(() => {
                            setIsClicked(false);
                        }, 150)

                        if (!sizeToSubmit) {
                            toast("Please Select Size First")
                            return;
                        }
                        try{
                             await axios.post('https://my-shoe-store-backend.onrender.com/api/cart-items', {
                            productId: product.id,
                            quantity: 1,
                            size: sizeToSubmit,
                        })
                            toast.success("Added to cart")
                            await loadCart();
                        }catch(error){
                            console.error(`Error Adding to Cart : ${error}`)
                            toast.error("Failed to add to cart")
                        }
                        
                       
                    }


                    return (
                        <div key={product.id} className="ml-5 flex flex-col bg-white w-85 h-auto gap-2 mt-5 rounded-[10px] 
                            group hover:bg-brand-navy hover:text-white transition-all duration-800 shadow-xl">
                            <div className="flex justify-center mt-5 relative">
                                <img src={`https://my-shoe-store-backend.onrender.com/${product.image}`}  alt={product.name} className="h-90 w-80" />

                                <AddToWishList loadWishList={loadWishList} product={product} wishListIds={wishListIds} />

                                <div className=" absolute bottom-3 lg:opacity-0 transition-opacity duration-1000 
                                    lg:group-hover:opacity-100 flex gap-1 text-brand-navy">
                                    <span className="cursor-pointer opacity-50 flex items-center mr-5">
                                        size
                                    </span>

                                    <SelectSizeButton product={product} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                                </div>
                            </div>

                            <div className="flex justify-center  px-4 font-bold text-[18px]">
                                {product.name}
                            </div>
                            <div className="opacity-50 text-center ">
                                {product.keywords}
                            </div>
                            <div className="flex justify-center">
                                <img src={`https://my-shoe-store-backend.onrender.com/images/ratings/rating-${product.rating.stars * 10}.png`} className="h-6" />
                            </div>
                            <div className="flex justify-center m-0  font-bold text-[20px]">
                                {moneyFormat(product.priceCents)}
                            </div>
                            <div className="flex flex-row justify-center opacity-0" >
                                Item Added
                                <img src="https://my-shoe-store-backend.onrender.com/images/icons/icons8-check.gif" className="h-5 text-center ml-2" />
                            </div>
                            <div className="flex justify-center mb-8 mt-3">
                                <button className="cursor-pointer" onClick={addToCart}>
                                    <span className={`bg-brand-gold px-12 py-3 text-white transiton-all duration-300 hover:bg-amber-400 
                                                rounded-[10px] ${isClicked ? "hover:bg-brand-navy" : "hover:bg-amber-400"}`}>
                                        Add To Cart
                                    </span>
                                </button>
                            </div>
                        </div>

                    )
                })}

            </div>

        </>

    )
}