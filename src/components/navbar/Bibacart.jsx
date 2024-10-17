import React from 'react';

const data = [
  {
    id: 1,
    image: 'https://sslimages.shoppersstop.com/sys-master/images/h0b/hcc/32955549057054/S24BISKD9665INK_PINK.jpg_2000Wx3000H',
    Title: 'Biba',
    Price: '5999',
    Description: 'Textured Full Length Polyester Woven Womens Kurta Set'
  }
  ,
  {
    id: 2,
    image: 'https://sslimages.shoppersstop.com/sys-master/images/h0b/hcc/32955549057054/S24BISKD9665INK_PINK.jpg_2000Wx3000H',
    Title: 'Biba',
    Price: '5999',
    Description: 'Textured Full Length Polyester Woven Womens Kurta Set'
  },
  {
    id: 3,
    image: 'https://sslimages.shoppersstop.com/sys-master/images/h0b/hcc/32955549057054/S24BISKD9665INK_PINK.jpg_2000Wx3000H',
    Title: 'Biba',
    Price: '5999',
    Description: 'Textured Full Length Polyester Woven Womens Kurta Set'
  },
    {
    id: 4,
    image: 'https://sslimages.shoppersstop.com/sys-master/images/h0b/hcc/32955549057054/S24BISKD9665INK_PINK.jpg_2000Wx3000H',
    Title: 'Biba',
    Price: '5999',
    Description: 'Textured Full Length Polyester Woven Womens Kurta Set'
  }
  
];


const Bibacart = () => {
  return (
    <div className='bibacart'>
      <div className='bibasection'>
        {data.map((item, index) => (
          <div key={index} className="bibatop">
            <img src={item.image} alt="" />
          </div>
        ))}
        <div className="bibabottom">
          {data.map((item, index) => (
            <div key={index}>
              <h3>{item.Title}</h3> 
              <p id="description">{item.Description}</p> 
              <p>{item.Price}</p> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bibacart;
