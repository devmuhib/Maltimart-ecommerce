import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion';
import products from '../assets/data/products'
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../UI/CommonSection';
import { useParams } from 'react-router-dom';
import '../Style/product-card.css'
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
const Product = (tab) => {
  const { id } = useParams()
  const product = products.find((A) => A?.id == id);
  const { imgUrl, productName, price, avgRating, shortDesc, reviews, description } = product
  return (
    <>
      <Helmet title={productName}>

        <CommonSection title={productName} />
        <section className='product_images pt-0'>
          <Container>
            <Row>
              <Col className='iconimage' lg="4" md='4'> <span>
                <img src={imgUrl} /> </span> </Col>

              <Col>
                <div className='product_details'>
                  <h2>{productName}</h2>
                  <div className='product_rating'>
                    <span><AiTwotoneStar /></span>
                    <span><AiTwotoneStar /></span>
                    <span><AiTwotoneStar /></span>
                    <span><AiTwotoneStar /></span>
                    <span><AiOutlineStar /></span>
                  </div>
                  <p ><span className='averagerating'>({avgRating}</span> rating)</p>

                </div>
                <p className='price_product'>${price}</p>
                <p>{shortDesc}</p>
                <motion.button whileHover={{ scale: 0.9 }} className='buy_btn'>Add to cart</motion.button>

              </Col>
            </Row>

            <Row>
              <Col lg="12">
              <div className='tab_wrapper d-dlex align-items-center gap-5'>
                <h6 className={`${tab='desc'?'active_tab':''}`}>Description</h6>
                <h6>Review ({reviews.length})</h6>

              </div>
              <div className='tab_content mt-4'>
                <p>{description}</p>
              </div>
              </Col>
            </Row>


          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Product