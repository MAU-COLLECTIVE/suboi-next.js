import React from 'react';
import Default from 'layouts/Default/Default';
import ShopListing from 'templates/ShopListing/ShopListing';

const items = [
  {
    id: '1',
    name: 'SUBOI TOUR SHIRT',
    price: 1,
    image: 'https://i.ibb.co/XCQMY1W/hoodieblack.png',
  },
  {
    id: '2',
    name: 'SUBOI TOUR SHIRT',
    price: 1,
    image: 'https://i.ibb.co/XCQMY1W/hoodieblack.png',
  },
  {
    id: '3',
    name: 'SUBOI TOUR SHIRT',
    price: 1,
    image: 'https://i.ibb.co/XCQMY1W/hoodieblack.png',
  },
];

function Shop() {
  return <Default>
    <ShopListing items={items} />
  </Default>;
}

export default Shop;
