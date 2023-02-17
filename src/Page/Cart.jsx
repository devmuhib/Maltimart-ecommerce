import React from 'react'
import '../Style/Shop.css'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import { Container, Row, Col } from 'reactstrap';
import tdImg from '../assets/images/arm-chair-01.jpg'
import { MdDelete } from "react-icons/md";
import {cartAction, cartActions} from '../redux/Slices/CartSlice'
import { useSelector,useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

const Cart = () => {

  const cartitems=useSelector((state)=>state?.cart?.cartItem)
console.log("cartitems",cartitems);
  return (
    <>
      <Helmet title='Cart'>
        <CommonSection title='shoping Cart'/>

        <section>
           <Container>
            <Row>
              <Col lg='12'>
                {cartitems?.length==0?<h2 className='f-4 text-center'>No Item added to the cart</h2>:
                <table className='table bordered'>
                  <thead>
                    <tr >
                      <th>Image</th>
                      <th>Title</th>
                      <th>price</th>
                      <th>Qty</th>
                      <th>Delete</th>

                    </tr>
                  </thead>
                  <tbody>
                    {cartitems?.map((item,index)=>(

                      <Tr item={item} key={index}/>
                    ))}
                  </tbody>

                </table>}
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}
const Tr=({item})=>{
  const dispatch=useDispatch();
    console.log("itemssss",item);
  const deleteproduct=()=>{
    dispatch(cartActions.deleteItem(item?.id))
  }
  return(
    <tr>
    <td><img src={item.imgUrl}/></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}</td>
    <motion.td  whileHover={{ scale: 0.9 }} onClick={deleteproduct}><MdDelete/></motion.td>
  </tr>
  )
}

export default Cart