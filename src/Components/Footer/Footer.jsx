import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <section className='footersection'>
    <Container>
        <Row>
            <Col lg='3' md='4'>
                <div className='hero_content'></div>

                <h4>Make Your</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    nobis.</p>
                {/* <motion.button whileHover={{ scale: 0.9 }} className='buy_btn'><Link to="/ShopItem">SHOP NOW</Link></motion.button> */}
            </Col>
            <Col lg='3' md='4'>
                <div className='hero_content'></div>

                <h2>Modern Trending Product</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Id earum explicabo nobis.</p>
                {/* <motion.button whileHover={{ scale: 0.9 }} className='buy_btn'><Link to="/ShopItem">SHOP NOW</Link></motion.button> */}
            </Col>
            <Col lg='3' md='4'>
                <div className='hero_content'></div>

                <h2> Beautiful & mordern</h2>
                <p> Id earum explicabo nobis.</p>
                {/* <motion.button whileHover={{ scale: 0.9 }} className='buy_btn'><Link to="/ShopItem">SHOP NOW</Link></motion.button> */}
            </Col>


        </Row>
    </Container>

</section>
  )
}

export default Footer