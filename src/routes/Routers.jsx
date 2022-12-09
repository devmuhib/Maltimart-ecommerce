import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetail from '../pages/ProductDetail';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Page404 from '../pages/Page404';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BackToTop from '../components/BackToTop/BackToTop';


function Routers() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/product-detail/:id' element={<ProductDetail/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </>
    );
}

export default Routers;