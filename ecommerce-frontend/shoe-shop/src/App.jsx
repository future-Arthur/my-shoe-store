import {Routes, Route } from 'react-router-dom'

import {HomePage} from './Pages/HomePage'
import {ProductsPage} from './Pages/ProductsPage'
import {CheckOutPage} from './Pages/CheckOutPage'
import {OrdersPage} from './Pages/OrdersPage'
function App() {


  return (
    <Routes>
      
      <Route index element={<HomePage />}/>
      <Route path = "products" element={<ProductsPage />}/>
      <Route path = "checkout" element={<CheckOutPage />}/>
       <Route path = "orders" element={<OrdersPage />}/>

    </Routes>
  )
}

export default App
