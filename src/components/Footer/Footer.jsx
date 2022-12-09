import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <div className="logo">
                            <div>
                                <h1 className='text-white'>Thinh shops</h1>
                            </div>
                        </div>

                        <p className="footer__text mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut excepturi, enim ex voluptatum nemo, quos provident obcaecati deleniti saepe ratione fugiat labore unde, vero ab veritatis quo atque fuga.
                        </p>
                    </Col>
                    <Col lg='3'>
                        <div className="footer__quicks-link">
                            <h4 className="quicks__link-title">
                                Useful Links
                            </h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2'>
                    <div className="footer__quicks-link">
                            <h4 className="quicks__link-title">
                                Top Category
                            </h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watch</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Chair</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3'>
                    <div className="footer__quicks-link">
                            <h4 className="quicks__link-title">
                                Contact
                            </h4>
                            <ListGroup className='footer__contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i className='ri-map-pin-line'></i>
                                    </span>
                                    <p>104 Yen Lang, Thinh Quang, Dong Da, Ha Noi</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i className='ri-phone-line'></i>
                                    </span>
                                    <p>09987654321</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i className='ri-mail-line'></i>
                                    </span>
                                    <p>thinh221201@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <p className="footer__copyright">Copyright by Tran Thinh, {year}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;