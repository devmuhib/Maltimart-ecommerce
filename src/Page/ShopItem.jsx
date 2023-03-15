import React, { useState } from 'react'
import CommonSection from '../UI/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { AiOutlineSearch } from "react-icons/ai";
import '../Style/Shop.css'
import products from '../assets/data/products'
import Productlist from '../UI/ProductList'
const ShopItem = () => {
  const [productDatas, setProductData] = useState(products);

  const handleFilter = (event) => {
    const filter_data = event.target.value
    if (filter_data=='sofa')
    {
      const filter_new_product=products.filter((item)=>item.category=='sofa')
      setProductData(filter_new_product);
    }
    else if(filter_data=="mobile")
    {
      const filter_new_product=products.filter((item)=>item.category=="mobile")
      setProductData(filter_new_product);
    }
    else if(filter_data=="watch")
    {
      const filter_new_product=products.filter((item)=>item.category=="watch")
      setProductData(filter_new_product);
    }
    else if(filter_data=="wireless")
    {
      const filter_new_product=products.filter((item)=>item.category=="wireless")
      setProductData(filter_new_product);
    }
    else if(filter_data=="chair")
    {
      const filter_new_product=products.filter((item)=>item.category=="chair")
      setProductData(filter_new_product);
    }
  }
  const handlesearch=(e)=>{
    const searchitem=e.target.value;
    const search_product=products.filter((item)=>item.productName.toLowerCase().includes(searchitem.toLowerCase())
   )
   setProductData(search_product)
  }
  return (
    <>
      <Helmet title="Shop">
        <CommonSection title="Products" />
        <section>

          <Container>
            <Row>

              <Col lg="3" md="3">
                <div className='filter_widget'>
                  <select name='' id='' onChange={handleFilter}>
                    <option>Filter By Category</option>
                    <option value='sofa'>sofa</option>
                    <option value='mobile'>mobile</option>
                    <option value='chair'>chair</option>
                    <option value='watch'>watch</option>
                    <option value='wireless'>wireless</option>
                  </select>
                </div>

              </Col>
              <Col lg="3" md="3">
                <div className='filter_widget'>

                  <select name='' id=''>
                    <option>Sort By</option>
                    <option value='ascending'>Low to high</option>
                    <option value='descending'>High to Low</option>

                  </select>
                </div>

              </Col>
              <Col lg="6" md="6">
                <div className='search_box d-flex'>
                  <input type='text' placeholder='Search........'  onChange={handlesearch}/>
                  <span className='search'><AiOutlineSearch /></span>
                </div>

              </Col>
            </Row>
          </Container>
        </section>

         <section>
          <Container>
            <Row>

              {productDatas?.length===0?<h1 className='text-center fs-4'>No Data Found !</h1>:<Productlist data={productDatas}/>
           }

            </Row>
          </Container>
        </section>
      </Helmet >
    </>
  )
}

export default ShopItem