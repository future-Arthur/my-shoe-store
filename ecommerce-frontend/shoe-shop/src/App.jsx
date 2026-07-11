import {Routes, Route, useLocation } from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios';

import {HomePage} from './Pages/HomePage'
import {ProductsPage} from './Pages/ProductsPage'
import {CheckOutPage} from './Pages/CheckOut/CheckOutPage'
import {OrdersPage} from './Pages/OrdersPage'
function App() {
  const [cart, setCart] = useState([]);
  const [onSearch, setOnSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const location = useLocation();

  const loadCart = async () => {
        const response = await axios.get('/api/cart-items?expand=product')
        setCart(response.data)

    }
    

      useEffect(()=>{
      if(location.pathname === "/"){
        setOnSearch('')
      }
    },[location])

    

    useEffect(()=>{
      loadCart();
    },[] )

  return (
    <Routes>
      
      <Route index element={<HomePage cart={cart} onSearch={onSearch} setOnSearch={setOnSearch}
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>}/>
        
      <Route path = "products" element={<ProductsPage 
        cart={cart} loadCart={loadCart} onSearch={onSearch} setOnSearch={setOnSearch}
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>}/>

      <Route path = "checkout" element={<CheckOutPage cart={cart} loadCart= {loadCart}/>}/>
      <Route path = "orders" element={<OrdersPage cart={cart} />}/>

    </Routes>
  )
}

export default App
