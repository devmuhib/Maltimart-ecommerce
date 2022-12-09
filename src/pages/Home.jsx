import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap"
import { Link } from 'react-router-dom';


import Title from '../components/Title/Title';
import '../styles/home.css'
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products'
import counterImage from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';
import Slider from '../components/UI/Slider';


function Home() {

    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSaleProducts, setBestSaleProducts] = useState([])
    const [mobileProducts, setMobileProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProduct, setPopularProduct] = useState([])
 

    useEffect(() => {
        const filterTrendingProduct = products.filter(item => item.category == 'chair')
        const filterBestSaleProduct = products.filter(item => item.category == 'sofa')
        const filterMobileProduct = products.filter(item => item.category == 'mobile')
        const filterWirelessProduct = products.filter(item => item.category == 'wireless')
        const filterPopularProduct = products.filter(item => item.category == 'watch')
        

        setTrendingProducts(filterTrendingProduct)
        setBestSaleProducts(filterBestSaleProduct)
        setMobileProducts(filterMobileProduct)
        setWirelessProducts(filterWirelessProduct)
        setPopularProduct(filterPopularProduct)

    }, [])


    return (
        <Title title="Home">
            <section className='hero__section'>
                <Container>
                    <Row>
                        <Col md='8' className='box__image' style={{padding: "10px"}}>
                            <div className="hero__img">
                                <img src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h3-banner-1.jpg" alt="image...." />
                                <div className="text__image">
                                    <p className="name__product">Philip Lamp</p>
                                    <span className="category__product">
                                        Lamp
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col md='4'>
                            <Col className='box__image'>
                                <div className="hero__img">
                                    <img src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h3-banner-2.jpg" alt="image...." />
                                    <div className="text__image">
                                        <p className="name__product">Philip Lamp</p>
                                        <span className="category__product">
                                            Lamp
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col className='box__image'>
                                <div className="hero__img">
                                    <img src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/h3-banner-3.jpg" alt="image...." />
                                </div>
                                <div className="text__image">
                                    <p className="name__product">Gold Ring</p>
                                    <span className="category__product">
                                        Light
                                    </span>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services/>
            <section className="trendding__product">
                <Container>
                    <h2 className="section__title" style={{padding: '20px'}}>
                        Trending Product
                    </h2>
                    <Slider data={trendingProducts}/>
                    {/* <Row>
                        <Col lg='12' className='text-center'>
                        </Col>
                    </Row> */}
                </Container>
            </section>
            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title">
                                Best Sales
                            </h2>
                        </Col>
                        <ProductList data={bestSaleProducts}/>
                    </Row>
                </Container>
            </section>
            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="clock__top-content">
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quality ArmChair</h3>
                            </div>
                            <Clock/>

                            <motion.button whileHover={{scale:1.1}} className="buy__btn store__btn">
                                <Link to='/shop'>Visit Store</Link>
                            </motion.button>
                        </Col>

                        <Col lg='6' md='6' className='text-end'>
                            <img src={counterImage} alt="couter image" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="new__arrvials">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className="section__title">
                                New Arrvials
                            </h2>
                        </Col>
                       <ProductList data={mobileProducts}/>
                       <ProductList data={wirelessProducts}/>
                    </Row>
                </Container>
            </section>
            <section className="popular_category">
            <section className="new__arrvials">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className="section__title">
                                Popular in Category
                            </h2>
                        </Col>
                       <ProductList data={popularProduct}/>
                    </Row>
                </Container>
            </section>
            </section>
        </Title>
    );
}

export default Home;