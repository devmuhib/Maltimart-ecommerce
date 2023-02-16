import React from 'react'
import productImg from '../assets/images/arm-chair-01.jpg'
import '../../src/Style/product-card.css'
import { Col } from 'reactstrap'
import { GrFormAdd } from "react-icons/gr";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/Slices/CartSlice';

import {toast } from 'react-toastify';

const ProductCard = (item) => {
    const dispatch=useDispatch();
    const addCart=()=>{
        dispatch(
            cartActions.addItem({
                id:item.item.id,
                productName:item.item.productName,
                price:item.item.price,
                image:item.item.imgUrl
            })
        );
        toast.success('product added to the cart')
    }

    return (
        <>



            <Col lg='4' md='4'className='items mb-2' >
                <div className='product_item'>
                    <div className='product_image'>
                        <motion.img whileHover={{scale:0.9}} src={item.item.imgUrl} alt='' />
                    </div>
                  <div className='p-2 product_info'>
                  <h3 className='product_name'><Link to={`/ShopItem/${item.item.id}`}>{item.item.productName}</Link></h3>
                    <span className='text-left d-block'>{item.item.category}</span>
                  </div>
                    <div className='product_card_bottom d-flex align-items-center justify-content-between p-2' >
                        <span className='price'>${item.item.price}</span>
                        <motion.span whileHover={{scale:0.9}} className='addicon' onClick={addCart}>+</motion.span></div>
                </div>
            </Col>
        </>
    )
}

export default ProductCard