import React from 'react';

const data = [
  'https://cmsimages.shoppersstop.com/Biba_web_8112557063/Biba_web_8112557063.png'
];

const ShopnowSection = () => {
  return (
    <div className='shopnowsection'>
      {data.map((url, index) => (
        <div key={index} className="leftside">
          <img src={url} alt="" />
        </div>
      ))}
  
    </div>
  );
};

export default ShopnowSection;
