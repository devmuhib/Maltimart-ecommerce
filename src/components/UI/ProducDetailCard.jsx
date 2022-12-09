import React, {useContext} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/product-detail.css';
import CardContext from '../../Context/CartContext';
import { motion } from 'framer-motion';
import products from '../../assets/data/products';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from './Slider';

function ProductDetailList({ data }) {

    const [trendding, setTrending] = useState([])
    useEffect(() => {
        const filterTrending = products.filter((item) => item.category == 'chair');

        setTrending(filterTrending)
    }, [])
    const cardContext = useContext(CardContext)
    const { product, setProduct } = cardContext;

    const handelAddToCard = (item, quality) => {
        const newProduct = [...product, item]
        setProduct(newProduct)
        quality = newProduct.length
        // console.log(newProduct)
    }
    return (
        <Container>
            <Row className='detail__product-box'>
                <Col>
                    <img src={data.imgUrl} alt={data.productName} />
                </Col>
                <Col>
                    <div>
                        <h1 className='name__product'>{data.productName}</h1>
                        <div className="rate__product">
                            {data.avgRating}
                            <i class="ri-star-fill"></i>
                        </div>
                        <p className='product__price'>{data.price} $</p>
                        <p className='product__desc'>{data.description}</p>
                    </div>
                    <div className='btn__addtocart'>
                        <motion.button whileTap={{scale:1.1}} onClick={() => handelAddToCard(data)}>ADD TO CART</motion.button>
                    </div>
                </Col>
            </Row>
            <Row className='line__page'></Row>
            <Row>
                <h1 className='section__title p-5'>Trending product</h1>
                <Slider data={trendding}/>
            </Row>
        </Container>
    );
}

export default ProductDetailList;