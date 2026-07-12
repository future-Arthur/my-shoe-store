import { useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from './Components/Header'
import { moneyFormat } from '../Utils/moneyFormat'



export function ProductsPage({cart, loadCart,onSearch,setOnSearch,selectedCategory,setSelectedCategory}) {

    const [products, setProducts] = useState([]);
    const [selectedSize, setSelectedSize] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    
   

    const fetchProductsData = async () => {
        const response = await axios.get('/api/products')
        setProducts(response.data)
    }
   
    useEffect(() => {

        fetchProductsData();
    }, [])

        const filteredProducts = products.filter((product)=>{
        const matchesSearch =  product.name.toLowerCase().includes(onSearch.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

        return matchesSearch && matchesCategory;

    })
    

    return (
        <>
            <Header cart={cart} setOnSearch= {setOnSearch} setSelectedCategory={setSelectedCategory}/>

            <div className=" bg-brand-medwhite grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 font-body 
                overflow-x-hidden text-brand-navy">

                {filteredProducts.map((product) => {

                    const addToCart = async () => {
                        const sizeToSubmit = selectedSize[product.id]
                        
                        setIsClicked(true);

                        setTimeout(()=>{
                            setIsClicked(false);
                        },150)

                        if (!sizeToSubmit) {
                            alert("Please Select Size First")
                            return;
                        }
                        await axios.post('/api/cart-items', {
                            productId: product.id,
                            quantity: 1,
                            size: sizeToSubmit,
                        })
                        await loadCart();
                    }
                    return (
                        <div key={product.id} className="ml-5 flex flex-col bg-white w-85 h-auto gap-2 mt-5 rounded-[20px] 
                            group hover:bg-brand-navy hover:text-white transition-all duration-800 hover:shadow-lg">
                            <div className="flex justify-center mt-5 relative">
                                <img src={product.image} className="h-90 w-70" />
                                <button className="cursor-pointer absolute w-10 h-20 lg:opacity-0 transition-opacity duration-1000 lg:group-hover:opacity-100">
                                    <img src="/images/icons/heart-regular.png" className="h-10" /></button>

                                <div className=" absolute bottom-3 lg:opacity-0 transition-opacity duration-1000 
                                    lg:group-hover:opacity-100 flex gap-1 text-brand-navy">
                                    <span className="cursor-pointer opacity-50 flex items-center mr-5">size</span>

                                    {product.size && product.size.map((size) => {

                                        const pickSize = () => {
                                            setSelectedSize((prev) => ({
                                                ...prev,
                                                [product.id]: size
                                            }))
                                        }
                                        return (
                                            <button onClick={pickSize} key={size} 
                                            className={`cursor-pointer border p-2 hover:bg-brand-navy hover:text-white duration-500
                                            
                                            ${selectedSize[product.id] === size ? "bg-brand-gold" : ""}`}>{size}</button>
                                        )
                                    })}
                                </div>

                            </div>

                            <div className="flex justify-center  px-4 font-bold text-[18px]">
                                {product.name}
                            </div>
                            <div className="opacity-50 text-center ">
                                {product.keywords}
                            </div>
                            <div className="flex justify-center">
                                <img src={`/images/ratings/rating-${product.rating.stars * 10}.png`} className="h-6" />
                            </div>
                            <div className="flex justify-center m-0  font-bold text-[20px]">
                                {moneyFormat(product.priceCents)}
                            </div>
                            <div className="flex flex-row justify-center opacity-0" >
                                Item Added
                                <img src="/images/icons/icons8-check.gif" className="h-5 text-center ml-2" />
                            </div>
                            <div className="flex justify-center mb-8 mt-3">
                                <button className="cursor-pointer" onClick={addToCart}>
                                    <span className={`bg-brand-gold px-12 py-3 text-white transiton-all 
                            duration-300 hover:bg-amber-400 rounded-[10px] ${isClicked ? "hover:bg-brand-navy" : "hover:bg-amber-400" }`} 
                                    >Add To Cart</span>
                                </button>
                            </div>
                        </div>

                    )
                })}

            </div>

        </>

    )
}