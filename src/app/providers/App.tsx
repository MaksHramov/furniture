import '../../App.css'
import Header from '../../widgets/Header/Header'
import Footer from '../../widgets/Footer/Footer'

import CartPage from '../../pages/CartPage/CartPage'
import ProductPage from '../../pages/ProductPage/ProductPage'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import LikedPage from '../../pages/LikedPage/LikedPage'
import CheckOutPage from '../../pages/CheckOutPage/CheckOutPage'

function App() {

  return (
    <>
    <div className='wrapper'>
      <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/liked' element={<LikedPage/>}/>
            <Route path='/checkout' element={<CheckOutPage/>}/>
          </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
