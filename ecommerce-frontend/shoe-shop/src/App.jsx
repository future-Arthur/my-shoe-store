import {Routes, Route } from 'react-router-dom'

import {HomePage} from './Pages/HomePage'
import {ProductsPage} from './Pages/ProductsPage'
function App() {


  return (
    <Routes>
      
      <Route index element={<HomePage />}/>
      <Route path = "products" element={<ProductsPage />}/>

    </Routes>
  )
}

export default App
