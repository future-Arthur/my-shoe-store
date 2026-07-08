import {Routes, Route } from 'react-router-dom'

import {HomePage} from './Pages/HomePage'
import {ProductsPage} from './Pages/ProductsPage'
import {CheckOutPage} from './Pages/CheckOutPage'
function App() {


  return (
    <Routes>
      
      <Route index element={<HomePage />}/>
      <Route path = "products" element={<ProductsPage />}/>
      <Route path = "checkout" element={<CheckOutPage />}/>

    </Routes>
  )
}

export default App
