import React, { useState } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col, NavLink } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import counterImg from '../assets/images/counter-timer-img.png'
import '../Style/Home.css'
import { Link } from 'react-router-dom'
import products from '../assets/data/products'
import { motion } from 'framer-motion';
import ShopItem from './ShopItem'
import Services from '../assets/Services/Services'
import ProductList from '../UI/ProductList'
import { useEffect } from 'react'
import Clock from '../UI/Clock'
import { useSelector } from 'react-redux'

const Home = () => {
    const [trendingproduct, setTrendingproduct] = useState([]);
    const [bestsaleproduct, bestSaleproduct] = useState([]);
    const [watch, setWatch] = useState([]);
    const [mobile, setMobile] = useState([]);
    useEffect(() => {
        const filter_product = products?.filter((item) => item.category == 'chair')
        const filter_product_saleproduct = products?.filter((item) => item.category == 'sofa')
        const filter_product_mobile = products?.filter((item) => item.category == 'mobile')
        const watch = products?.filter((item) => item.category == 'watch')
        setWatch(filter_product_mobile)
        setMobile(watch)
        setTrendingproduct(filter_product)
        bestSaleproduct(filter_product_saleproduct)
    }, [])

    const year = new Date().getFullYear();
    return (
        <>
            <Helmet title={'Home'}>
                <section className='hero_section'>
                    <Container>
                        <Row>
                            <Col lg='6' md='6'>
                                <div className='hero_content'></div>
                                <p className='hero_subtitle'>Modern Trending Product in {year}</p>
                                <h2>Make Your Interior More Beautiful & mordern</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Tempore maxime praesentium assumenda, molestiae natus ad animi sapiente
                                    amet. At quod dolore iure, earum amet illum eaque. Id earum explicabo nobis.</p>
                                <motion.button whileHover={{ scale: 0.9 }} className='buy_btn'><Link to="/ShopItem">SHOP NOW</Link></motion.button>
                            </Col>
                            <Col lg='6' md='6'>
                                <div className='hero_img'>
                                    <img src={heroImg} alt='heroimage' />

                                </div>
                            </Col>

                        </Row>
                    </Container>

                </section>
                <Services />

                <section className='trending_products'>
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 className='section_title'>Trending products</h2>

                            </Col>
                            <ProductList data={trendingproduct} />
                        </Row>
                    </Container>
                </section>

                <section className='best_sales'>
                    <Container>
                        <Row>
                            <Col lg="12" className='text-center'>
                                <h2 className='section_item'>Best sale</h2>
                            </Col>
                            <ProductList data={bestsaleproduct} />

                        </Row>
                    </Container>
                </section>
                <section className='timer_count'>
                    <Container>
                        <Row>
                            <Col lg='6' md='6'>
                               <div className='clock_top_content'>

                               <h4 className='text-white fs-6 mb-2'>Lomited Offer</h4>
                                <h3 className='text-white fs-5 mb-3'>Qualirt arm chair</h3>
                               </div>
                                <Clock/>
                                <motion.button whileHover={{ scale: 0.9 }}  className='buy_btn store_btn'><Link to='/ShopItem'></Link>Visit Location</motion.button>
                                </Col>

                                <Col lg='6' md='6' className='text-end'>
                                <img src={counterImg} />
                                </Col>

                        </Row>
                    </Container>

                </section>
                <section className='trending_products'>
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 className='section_title'>Trending Watch</h2>

                            </Col>
                            <ProductList data={mobile} />
                        </Row>
                    </Container>
                </section>
                <section className='trending_products'>
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 className='section_title'>Trending Mobile</h2>

                            </Col>
                            <ProductList data={watch} />
                        </Row>
                    </Container>
                </section>

            </Helmet>
        </>
    )
}

export default Home