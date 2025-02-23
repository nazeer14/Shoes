import React from 'react'
import './item.css'


function Item({imageUrl,name,model,price,rating}) {
  return (
    <div className='item'>
     
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <h3><span>Model :</span> {model}</h3>
      <h3>Price : {price}₹</h3>
      <h2>Rating : {rating}<span style={{ fontSize: '35px', color: 'gold' }}>★</span></h2>
      <a className='buylink' href='#'>Buy</a>
    </div>
  )
}
export default Item