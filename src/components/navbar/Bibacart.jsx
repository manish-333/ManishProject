import React from "react";

const data = [
  {
    id: 1,
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h0b/hcc/32955549057054/S24BISKD9665INK_PINK.jpg_2000Wx3000H",
    Title: "Biba",
    Price: "5999",
    Description: "Textured Full Length Polyester Woven Womens Kurta Set",
  },
  {
    id: 2,
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/hfd/h12/32800998129694/S24BIERA9880LOW_YELLOW.jpg_2000Wx3000H",
    Title: "Biba",
    Price: "5999",
    Description: "Textured Full Length Polyester Woven Womens Kurta Set",
  },
  {
    id: 3,
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/hae/h2d/32800659570718/S24BISKD9851Y_BLUE.jpg_2000Wx3000H",
    Title: "Biba",
    Price: "5999",
    Description: "Textured Full Length Polyester Woven Womens Kurta Set",
  },
  {
    id: 4,
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/ha4/hfa/32801393213470/S24BISAWERA9880_DUSTY_PINK.jpg_2000Wx3000H",
    Title: "Biba",
    Price: "5999",
    Description: "Textured Full Length Polyester Woven Womens Kurta Set",
  },
];

const Bibacart = () => {
  return (
    <div className="bibacart">
      {data.map((item, index) => (
        <div className="bibasection">
          <div key={index} className="bibatop">
            <img src={item.image} alt="" />
          </div>
          <div key={index}>
            <h3>{item.Title}</h3>
            <p id="description">{item.Description}</p>
            <p>{item.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bibacart;
