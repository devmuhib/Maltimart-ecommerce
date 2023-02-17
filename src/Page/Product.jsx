import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import products from '../assets/data/products'
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../UI/CommonSection';
import { useParams } from 'react-router-dom';
import '../Style/product-card.css'
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
const Product = () => {
  const { id } = useParams()
  const product = products.find((A) => A?.id == id);
  const { imgUrl, productName, price, avgRating, reviw, descroption } = product
  return (
    <>
      <Helmet>

        <CommonSection />
        <section className='product_image pt-0'>
          <Container>
            <Row>
              <Col lg="4" md='4'> <img src={imgUrl} />  </Col>

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
                  <p>({avgRating}rating)</p>

                </div>
                <p>${price}</p>
                <button className='buy_btn'>Add to cart</button>

              </Col>
            </Row>




          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Product