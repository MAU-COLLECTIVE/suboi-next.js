import React from 'react';
import Default from 'layouts/Default/Default';
import ShopDetail from 'templates/ShopDetail/ShopDetail';

const item = {
  id: '1',
  name: 'SUBOI TOUR SHIRT',
  price: 1,
  display_image: 'https://i.ibb.co/XCQMY1W/hoodieblack.png',
  images: [
    'https://i.ibb.co/XCQMY1W/hoodieblack.png',
    'https://i.ibb.co/XCQMY1W/hoodieblack.png',
    'https://i.ibb.co/XCQMY1W/hoodieblack.png',
  ],
};

function Shop() {
  return <Default>
    <ShopDetail item={item}/>
  </Default>;
}

export default Shop;
