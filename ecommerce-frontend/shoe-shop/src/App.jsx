import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

import { HomePage } from './Pages/HomePage'
import { ProductsPage } from './Pages/ProductsPage'
import { CheckOutPage } from './Pages/CheckOut/CheckOutPage'
import { OrdersPage } from './Pages/OrdersPage'
import { WishListPage } from './Pages/WishListPage'

function App() {
  const [cart, setCart] = useState([]);
  const [onSearch, setOnSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishList, setWishList] = useState([]);
  const [selectedSize, setSelectedSize] = useState({});

  const location = useLocation();

  const loadCart = async () => {
    try{
      const response = await axios.get('https://my-shoe-store-backend.onrender.com/api/cart-items?expand=product')
    setCart(response.data)
    }catch(error){
      console.error(`error fetching cart data : ${error}`)
    }
    

  }
  const loadWishList = async () => {
    try{
          const response = await axios.get('https://my-shoe-store-backend.onrender.com/api/wishlist?expand=product')
    setWishList(response.data)
    }catch(error){
      console.error(`error fetching wislist data : ${error}`)
    }

  }

  useEffect(() => {
    if (location.pathname === "/") {
      setOnSearch('')
    }
  }, [location])



  useEffect(() => {
    loadCart();
    loadWishList();
  }, [])





  return (
    <>
      <Toaster />
    <Routes>
    
      <Route index element={<HomePage cart={cart} onSearch={onSearch} setOnSearch={setOnSearch}
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} wishList={wishList} />} />

      <Route path="products" element={<ProductsPage
        cart={cart} loadCart={loadCart} onSearch={onSearch} setOnSearch={setOnSearch}
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} 
        loadWishList = {loadWishList} wishList={wishList} selectedSize={selectedSize} setSelectedSize = {setSelectedSize}/>} />

      <Route path="checkout" element={<CheckOutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="wishlist" element={<WishListPage cart={cart} loadCart = {loadCart} wishList={wishList} loadWishList= {loadWishList} selectedSize={selectedSize} setSelectedSize = {setSelectedSize}/>} />

    </Routes>
    </>
  )
}

export default App
