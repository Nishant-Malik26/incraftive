import { Carousel } from 'antd';
import React from 'react';

function TopCarousel() {
  return (
    <Carousel
      autoplay
      style={{
        marginTop: '-2.7px',
      }}
    >
      <div>
        <img
          src='https://ecomm.dotvik.com/dist/assets/homePageSliderImg/Hottest-winter-collection.jpg'
          alt='loading'
        ></img>
      </div>
      <div>
        <img
          src='https://ecomm.dotvik.com/dist/assets/homePageSliderImg/Kids-HOME-PAGE-BANNER.jpg'
          alt='loading'
        ></img>
      </div>
      <div>
        <img
          src='https://ecomm.dotvik.com/dist/assets/homePageSliderImg/Mens-Fashion.jpg'
          alt='loading'
        ></img>
      </div>
    </Carousel>
  );
}

export default TopCarousel;
