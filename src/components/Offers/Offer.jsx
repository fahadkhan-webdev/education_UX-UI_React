import React from 'react'
import './offer.css'
import { Container, Row, Col } from 'reactstrap'
import gradientImg from '../../assets/images/gradient-list-style.png'
import offerImg from '../../assets/images/offer.png'
function Offer() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
          <div className='about_img'>
            <img src={offerImg} alt="" className='w-100' /></div></Col>
          <Col lg='6' md='6'>
          <div className="offer_content">
            <h2>Kind of Courses we Offer</h2>
            <p>
              programming guides and samples composed <br/> in a clear and easy-to-grip termonology, <br/>
              intended for novice learners
              </p>
              <div className='d-flex gap-5 align-items-center'>
                <div className='single-offers'>
                  <p className='offer_title'>
                    <img src={gradientImg} alt="" /> Highly Intuitive
                  </p>
                </div>
                <div className='single-offers'>
                  <p className='offer_title'>
                    <img src={gradientImg} alt="" /> Save Time
                  </p>
                </div>
                <div className='single-offers'>
                  <p className='offer_title'>
                    <img src={gradientImg} alt="" /> Save Money
                  </p>
                </div>
                <div className='single-offers'>
                  <p className='offer_title'>
                    <img src={gradientImg} alt="" /> Build Skill Confidence
                  </p>
                </div>
              </div>
              <a href="explore.com">
                <button className='btn btn-offer'>EXPLORE COURSES</button>
              </a>
              </div></Col>
        </Row>
      </Container>
    </section>
  )
}

export default Offer