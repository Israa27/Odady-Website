import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './secondary.css';
export default function SecondaryNav({name}) {
  return <div className='secondary-navs'>
      <Container>
        <button className='secondary-navs-btn'><Link to='/'>الصفحة الرئيسة</Link></button>
        <span className='secondary-navs-span'></span>
        <button  className='secondary-navs-btn'><a href='#'>{name}</a></button>
      </Container>
  </div>
}
