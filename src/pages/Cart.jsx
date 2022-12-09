import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import CartProductItem from '../components/UI/CartProductItem';
import CardContext from '../Context/CartContext';
import '../styles/cart.css';

function Cart() {
    const CartContext = useContext(CardContext)
    const { product, setProduct } = CartContext;
    console.log(product)
    // let quantily;
    // const sumQuantily = product.reduce((item) => item.id)
    return (
        <Container>
            <Row style={{height: '53vh'}}>
                {
                    !product.length ? (
                        <div className='notification__cart'>
                            <div>
                                <p className='text__cart'>Giỏ hàng của bạn hiện tại đang trống!</p>
                            </div>
                            <div className='return__home'>
                                <Link to='/'>Quay lại trang chủ</Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        <CartProductItem data={product}/>
                                    }
                                </tbody>
                                </table>
                        </div>
                    )
                }

            </Row>
        </Container>
    );
}

export default Cart;