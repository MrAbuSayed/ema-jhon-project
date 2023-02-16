import React from 'react';
import './cart.css'

const Cart = (props) => {
    let crt = props.productCount;
    console.log(crt)
    // const totaPrice = crt.reduce((total,prd)=> total +prd.price+ prd.shipping    ,0);
    let total =0;
   
  for(let i=0;i<crt.length;i++){
    let product= crt[i];
     total= product.price+total; 
    
  }
  let productPrice= Math.round(total);

    

     let shippingCost =Math.round(productPrice*0.06);
    //  if (total>=55) {
    //     shippingCost=10;
    //  }
    //  else if (total>=25){
    //       shippingCost= 7;
    //  }
    //  else if (total>=1){
    //          shippingCost=4;
    //  }

     
    
     let vatCost =Math.round(productPrice*.05);
    //  if (total>=55) {
    //     vatCost=12;
    //  }
    //  else if (total>=25){
    //     vatCost= 8;
    //  }
    //  else if (total>=1){
    //     vatCost=5;
    //  }
    return (
        <div className='summary'>

            <h4>Order Summary :-</h4>

           <div className="cost">

           <p>Total Products : {crt.length}</p>
            <p>Product Price: ${productPrice}</p>
            <p>Shipping :&nbsp; &nbsp; &nbsp; &nbsp;${shippingCost}</p>
            <p>VAT/TAX :&nbsp; &nbsp; &nbsp; &nbsp;${vatCost}</p>
           </div><p>Total Price : &nbsp;&nbsp;&nbsp;${productPrice+shippingCost+vatCost}</p>
            
        </div>
    );
};

export default Cart;