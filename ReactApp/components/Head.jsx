import React from 'react'
import './head.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Head() {
    let url='https://static.vecteezy.com/system/resources/previews/017/208/734/non_2x/ln-letter-logo-initial-ln-letter-business-logo-design-template-vector.jpg'
  return (
    <div className='head'>
        <nav>
        <img className='imag' src={url} alt='logo' />
        <>LN.com</>
        <a href='#'>Home</a>
        <a href='#'>Cart</a>
        <a href='#'>Contact</a>
        <a href='#'>Feedback</a>
        <a href='#'>About</a>
        <input className='src-box' type='text' placeholder='search'></input>
        <button className='src-btn'>Search</button>
        <button type="button" id='bt' className="btn btn-primary">Login</button>
        <button type="button" id='bt' className="btn btn-info">Sign Up</button>
        </nav>
    </div>
  )
}

export default Head