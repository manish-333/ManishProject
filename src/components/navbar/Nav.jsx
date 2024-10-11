import React, { useEffect } from 'react';
import './Style.css';
import { SlMenu } from "react-icons/sl"; // Import the SlMenu icon


const Nav = () => {
  useEffect(()=>{
    const menu = document.querySelector(".menu-icon")
    const list = document.querySelector("#list")
    const Togglemenu =()=>{
if(list.style.display ==="block"){
  list.style.display ="none"
}
else{
  list.style.display ="block"
}
    };

    menu.addEventListener("click",Togglemenu);
    return ()=>{
      menu.removeEventListener("click",Togglemenu);

    }

  },[]);
  return (
    <div className='nav'>
      <div className="logo">
        <img src="/images/logo1.png" alt="Logo" />
      </div>

      {/* Menu Icon for mobile view */}
     

      {/* Navigation Links */}
      <ul id="list">
        <li><a href="#">Everything</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>

      {/* Right-side section for cart and icon */}
      <div className="right">
        <li><a href="#">$0.00</a></li>
        <li><a href="#">Icon</a></li>
        <div className="menu-icon">
        <SlMenu size={20} /> {/* Menu icon with a size of 30px */}
      </div>
      </div>
     
    </div>
  );
}

export default Nav;
