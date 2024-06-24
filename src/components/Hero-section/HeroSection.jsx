import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "../../components/Hero-section/hero.css"
import searchIcon from '../../assets/images/search.svg'
import heroImg from '../../assets/images/hero-img1.png'

function HeroSection() {
  return (
   <section>
    <Container>
      <Row>
        <Col lg='6' md='6'>
        <div className="hero-content">
          <h1 className='mb-4'>
            <span className='e-pruple'>E</span> - Learning
            <br/> Anywhere <br/> In the world
          </h1>
          <p className='mb-4'> The best place to leran programing  with
            begineers friendly tutorials and examples.
          </p>
          <div className="search">
            <img src={searchIcon} alt="search" />
            <input type="text" placeholder='what do you want to learn' />
            <button className='btn-search'>SEARCH</button>
          </div>
        </div>
        </Col>
        
        <Col lg='6' md='6'>
        <img src={heroImg} alt="" className='w-100' />
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default HeroSection