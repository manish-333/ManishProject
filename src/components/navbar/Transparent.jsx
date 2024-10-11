import React from 'react';

const image = [{
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2013/08/01/18/21/woman-169286_1280.jpg',
}];

const Transparent = () => {
  return (
    <>
      <div className='attechment'>
        <div className="Explore">
          <div className='topcart'>
            {image.map((img) => {
              return <img key={img.id} src={img.image} alt="display"></img>;
            })}
          </div>
          <div className='bottomcart'>
            <p  className='Collection'>Explore our exquisite Bag Collection now!</p>
            <button id="view">View Collection</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transparent;
