import { Reacts, Route, Routes,Navigate } from 'react-router-dom'
import Home from '../Page/Home'
import ShopItem from '../Page/ShopItem'
import Cart from '../Page/Cart'
import Product from '../Page/Product'
import Login from '../Page/Login'
import Checkproduct from '../Page/Checkproduct'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='home'/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/shopitem" element={<ShopItem />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkproduct/>}/>
        </Routes>

    )
}

export default Router