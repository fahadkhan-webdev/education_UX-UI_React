import React from 'react'
import './company-section.css'
import { Container } from 'reactstrap'

function Company() {
  return (
   <Container>
    <div className='company-section'>
      <a href="facebook.com" className='icon-gradient rounded facebook'>
        <i className='ri-facebook-fill'></i>
      </a>
      <a href="twitter.com" className='icon-gradient rounded twitter'>
        <i className='ri-twitter-fill'></i>
      </a>
      <a href="linkedin.com" className='icon-gradient rounded linkedin'>
        <i className='ri-linkedin-fill'></i>
      </a>
      <a href="instagram.com" className='icon-gradient rounded instagram'>
        <i className='ri-instagram-fill'></i>
      </a>
    </div>
   </Container>
  )
}

export default Company