import React from 'react';
import './Product.css';

const Product = (props) => {
  return (
    <div>
        <h1 className='name'> {props.name} </h1>
        <h2> {props.description} </h2>
        <span>{props.price}</span>
    </div>
  )
}

export default Product