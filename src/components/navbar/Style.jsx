import React from 'react';

const data = [{
  id: 1,
  image: 'https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-08-a-400x488.jpg',
  work: 'Work & Office',
  time: 'TimeLess classic collection',
  price: '$124.90',
},
{
  id: 2,
  image: 'https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-06-a-black-300x366.jpg',
  work: 'Work & Office',
  time: 'Bohemian Rhapsody Attire',
  price: '$124.90',
},
{
  id: 3,
  image: 'https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-05-a-white-300x366.jpg',
  work: 'Work & Office',
  time: 'Midnight Gala Maxi Dress',
  price: '$124.90',
},
{
  id: 4,
  image: 'https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-01-a-400x488.jpg',
  work: 'Work & Office',
  time: 'Power Suit Ensemble',

  price: '$124.90',
}];

const Style = () => {
  return (
    <div className='style'>
      {data.map((item, index) => (
        <div key={index} className="multipleCart">
          <div className="top">
            <img src={item.image} alt="Display" />
          </div>
          <div className="bottom">
            <p className='pfirst'>{item.work}</p>
            <p className='psecond'>{item.time}</p>
            <p className='price'>{item.price}</p>
            <div className="size">
              <button id="btn">XL</button>
              <button id="btn">L</button>
              <button id="btn">M</button>
              <button id="btn">S</button>
              <button id="btn">XS</button>
            </div>
            <div className="circle">
              <div className="circlecolor"></div>
              <div className="circlecolor"></div>
              <div className="circlecolor"></div>
              <div className="circlecolor"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Style;
