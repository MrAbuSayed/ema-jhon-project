import React from 'react';
import './products.css';

const Products = (props) => {
    // console.log(props)
    const {name,img,category,price,shipping,seller}= props.products
    return (
        <div className='product'>
            

         <div className="imgs">
              <img src={img} alt="" />
         </div>

         <div className="productsInfo">
            <h4>{name} </h4>
            <h4>by: <small>{seller}</small></h4>
            <p>Price: ${price}</p>
             <button className="buyBtn"  onClick={()=>props.handleAddProduct( props.products)}>
              add to cart
             </button>
         </div>

        </div>
    );
};

export default Products;