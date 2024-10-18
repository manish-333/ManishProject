import { content } from 'flowbite-react/tailwind';
import React from 'react';

const data = [
  {
    id: 1,
    heading: 'CUSTOMER',
    content: 'HELP/FAQS'
  },
  {
    id: 2,
    heading: 'TOP CATEGORIES',
    content: ['Man', 'WOMEN', 'KIDS', 'BEAUTY', 'WATCHES', 'GIFT', 'HOME', 'LUXE', 'BARGAIN'],
  },
  {
    id: 3,
    heading: 'STORE AND SITES',
    content: ['ABOUT US', 'CONTACT US', 'CORPORATE SITE', 'STORE LOCATOR', 'CAREERS'],
  },
  {
    id: 4,
    heading: 'POLICIES',
    content: ['TERMS OF USE','PRIVACY','EXCHANGE & RETURN']
  },

  {
  id: 5,
  heading: 'FIRST CITIZEN',
  content: ['FIRST CITIZEN CLUB']
  }
];




const Footer = () => {
    return (
      <div className='footer'>
        {data.map((item) => (
          <div key={item.id} className="footersection">
            <h3>{item.heading}</h3>
            <p>{item.content[0]}</p>
          </div>
        ))}
       
      </div>
    );
  }

export default Footer;
