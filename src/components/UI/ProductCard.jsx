import React, { createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CardContext from '../../Context/CartContext';



export const addData = createContext()


function ProductCard({ item }) {
    const cardContext = useContext(CardContext)
    const { product, setProduct } = cardContext;

    const handelAddToCard = (item) => {
        // let quantity = 1;
        const newCartItems = product.slice(0);
        const index = product.findIndex((product) => item.id == product.id)
        console.log(index)
        if(index < 0) {
            newCartItems.push(item)
            console.log('Success')
        } else {
            console.log("Failed")
        }
        setProduct(newCartItems)
        // console.log(`Quantity is ${item.id}`, quantity)
    }
    // const productName = item.productName.split('')[17];
    // console.log(productName)

  return (
        <Col lg='3' mg='4' key={item.id} className="mb-2 p-4">
            <div className="product__item">
                <div className="product__img">
                    <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="image" />
                </div>
                <div className="p-2 product__infor">
                    <h3 className="product__name">
                        <Link to={`/product-detail/${item.id}`}>{item.productName}</Link>
                    </h3>
                    <span>{item.category}</span>
                </div>
                <div className="product__card-bottom">
                    <span className="price">{item.price} $</span>
                    <motion.div
                            onClick={() => handelAddToCard(item)}
                            whileTap={{ scale:1.2 }}>
                            <i class="ri-shopping-cart-line"></i>
                            <span>Add to cart</span>
                    </motion.div>
                </div>
            </div>
        </ Col>
  )
}

export default ProductCard