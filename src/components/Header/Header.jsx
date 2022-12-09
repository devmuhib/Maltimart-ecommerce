import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png'
import { Container, Row } from 'reactstrap'
import { useRef, useEffect, useContext } from 'react';
import CardContext from '../../Context/CartContext';
import { useState } from 'react';
import { motion } from 'framer-motion'

function Header() {
    const nav__links = [
        {
            path: '',
            display: 'Trang chủ'
        },
        {
            path: 'shop',
            display: 'Cửa hàng'
        },
        {
            path: 'cart',
            display: 'Giỏ hàng'
        }

    ]

    const cardContext = useContext(CardContext)
    const { product, setProduct } = cardContext;
    const headerRef = useRef(null)

    const [activeNavigation, setActiveNavigation] = useState(false)

    const handelNavigation = () => {
        setActiveNavigation(active => !active)
    }


    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('stickly__header')
            } else {
                headerRef.current.classList.remove('stickly__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc();

        return () => window.removeEventListener('scroll', stickyHeaderFunc) //clear event moi khi re-render
    })
    return (
        <div className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>
                                    <NavLink to='/'>Thinh shops</NavLink>
                                </h1>
                            </div>
                        </div>
                        <div className={activeNavigation ? 'active__navigation navigation': 'navigation'}>
                            <ul className="menu">
                                {
                                    nav__links.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                                {item.display}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            <div className='button__mobile' onClick={handelNavigation}>
                                <i class="ri-fullscreen-exit-fill"></i>
                            </div>
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <span className='fav__icon'>
                                <i className='ri-heart-line'></i>
                                <div className="badge">
                                    <span>1</span>
                                </div>
                            </span>
                            <span className='cart__icon'>
                                <i className='ri-shopping-bag-line'></i>
                                <div className="badge">
                                    <span>{ product.length }</span>
                                </div>
                            </span>  
                        </div>
                        <div className="nav__login">
                            <div className="btn__login">
                                <NavLink to='/login'>Login</NavLink>
                            </div>
                        </div>
                        <motion.div whileTap={{scale:1.1}} className="mobile__menu" onClick={handelNavigation}>
                            <span><i className='ri-menu-line'></i></span>
                        </motion.div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Header;