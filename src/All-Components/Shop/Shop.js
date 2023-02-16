import React, { useState } from 'react';
import './shop.css';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';


const Shop = () => {
 const [products,setProducts]=useState(fakeData);
const [cart,setCart] = useState([])
  
 const handleAddProduct = (thisProduct)=>{
    const newCart = [...cart,thisProduct];
    setCart(newCart)
 }
//  console.log(products)
    return (
        <div className='Shops'>
             

           <div className="product">
                    
                    <ul>
                   {
                   
                    products.map(pd=><Products
                         products={pd}
                         handleAddProduct={handleAddProduct}
                         ></Products> )
                   

                   }
                   </ul>
                     
           </div>
   

          <div className="ordeReview">
           
             <div className="cart"> 
                 

                 <Cart productCount= {cart}></Cart>
             

             </div>
            
          </div>



        </div>
    );
   
};

export default Shop;