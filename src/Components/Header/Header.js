import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import userIcon from '../../assets/images/user-icon.png';
import './header.css';
import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import { motion } from 'framer-motion';
import { Navigate, NavLink,useNavigate } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './header.css';
import { cartActions } from '../../redux/Slices/CartSlice';
const nav_links = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shopitem',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
];


const Header = (props) => {
    const headerRef=useRef(null);
    const totalQuantity=useSelector(state=>state.cart.totalQuantity)
    const navigate=useNavigate();
    const menuRef=useRef(null);
    const navigateToCart=()=>{
      navigate("/Cart")
    }

  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <div className="nav_wrapper">
              <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h2>E-Mart</h2>
                </div>
              </div>

              <div className=" d-flex  navigation">
                <ul className=" d-flex gap-4 menu">
                  {nav_links.map((item) => (
                    <li className="nav_item">
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? 'nav_active' : ''
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d-flex gap-4 nav_icon">
                <span className="fav_icon">
                  <BiHeart />
                  <p className="badge">1</p>
                </span>
                <span className="cart_icon" onClick={navigateToCart}>
                  <AiOutlineShoppingCart />
                  <p className="badge">{totalQuantity}</p>

                </span>
                <span>
                  <motion.img
                    whileTop={{ scale: 1.2 }}
                    src={userIcon}
                    alt="logo"
                  />
                </span>
              </div>
              <div className="mobile_menu">
                <span>
                  {' '}
                  <span className="cart_icon">
                    <AiOutlineMenuUnfold />
                  </span>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
