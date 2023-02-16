import React from 'react';
import logo from '../../images/logo.png';
import './header.css'

const Header = () => {
    return (
       
      <div>

            <div className="header">

                    <img src={logo} alt="" />
                 <nav className='navber'>

                   <ul>
                       <li><a href="./shop">Shop</a></li>
                       <li><a href="./order_review">Order Review</a></li>
                       <li><a href="./manage">Manage Inventory Here </a></li>

                   </ul>

               
               </nav>

             </div>

             
             <div className="search">

              <input type="text" name="" id="search" placeholder='search here' />
              <button className="Sbtn">Search</button>

             </div>

      </div>
        
    );
};

export default Header;