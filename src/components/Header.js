import React from 'react'
import atom_logo from '../assets/images/atom-logo.png';
import icon_cart from '../assets/images/icon_cart.png';

export default function Header() {

    
    return (
        <nav>
		<ul>
        <li id="icon"><a href= "/home" ><img src={atom_logo} alt="logo"></img></a></li>
        <li id="cart"><a href= "/cart"><img src= {icon_cart} alt="cart"></img></a></li>
		{/* //Refactor */}
  				<li className="menu-item"><a href="./contact">連絡</a></li>
  				<li className="menu-item"><a href="./store">商品</a></li>
  				<li className="menu-item"><a href="./about">弊社</a></li>
  				
			</ul>
		</nav>
    )
}
