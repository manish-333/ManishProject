import React from 'react'
const data=[
    {
        id:1,
        image:'https://cmsimages.shoppersstop.com/Allen_Solly_753c5c23a6/Allen_Solly_753c5c23a6.png'
    },
    {
        id:2,
        image:'https://cmsimages.shoppersstop.com/Celio_bd85b97f2c/Celio_bd85b97f2c.png'
    },
    {
        id:3,
        image:'https://cmsimages.shoppersstop.com/Levis_1413d56d1c/Levis_1413d56d1c.png'

    },
    {
        id:4,
        image:'https://cmsimages.shoppersstop.com/J_and_J_dcbf82fbf9/J_and_J_dcbf82fbf9.png'

    },
    
];
const BlockMain = () => {
  return (
    <div className='blockcart'>
      {data.map((item,index)=>(
          <div key={index} className="buster">
            <img  src={item.image}/>
          </div>
      ))}
    </div>
  )
}

export default BlockMain
