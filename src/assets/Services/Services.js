import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { FiTruck } from 'react-icons/fi';
import './services.css';
import serviceData from '../data/serviceData';

const Services = () => {
    serviceData.map((a)=>
    console.log("AAAAA",a))
  return (
    <>
      <section className="services">
        <Container>
          <Row>
            {serviceData.map((item,index) => (

              <Col ld="4" md="3" key={index}>
                <div className="service_item" style={{background:`${item.bg}`}}>
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}.</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
