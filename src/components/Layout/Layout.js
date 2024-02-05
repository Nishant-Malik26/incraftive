import React from 'react';
import Navbar from '../Navbar';
// import { Col, Row } from 'antd';
import TopCarousel from '../TopCarousel/TopCarousel';
import TopPickings from '../TopPickings/TopPickings.';
import TopOffers from '../TopOffers/TopOffers';
import Sections from '../Sections/Sections';

function Layout() {
  const SECTION_INFO = [
    {
      sectionName: 'FOR HER',
      imagesUrl: [
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-women/blue_shirt_girl.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-women/blue_shirt_girl.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-women/blue_shirt_girl.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-women/blue_shirt_girl.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-women/blue_shirt_girl.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-women/blue_shirt_girl.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-women/blue_shirt_girl.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-women/blue_shirt_girl.jpeg',
      ],
    },
    {
      sectionName: 'FOR HIM',
      imagesUrl: [
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-men/kurta_men.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-men/kurta_men.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-men/kurta_men.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-men/kurta_men.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-men/kurta_men.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-men/kurta_men.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-men/kurta_men.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-men/kurta_men.jpeg',
      ],
    },
    {
      sectionName: 'FOR KIDS',
      imagesUrl: [
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-kids/kids_shorts.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-kids/kids_shorts.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-kids/kids_shorts.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-kids/kids_shorts.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-kids/kids_shorts.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-kids/kids_shorts.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-kids/kids_shorts.jpeg',
        'https://ecomm.dotvik.com/dist/images/homePageRoundImg-kids/kids_shorts.jpeg',
      ],
    },
  ];

  return (
    <>
      {/* <Row> */}
      {/* <Col xs={24} sm={24} md={24}> */}
      <Navbar />
      <TopCarousel />
      <TopPickings />
      <TopOffers />
      {SECTION_INFO.map((info) => (
        <Sections info={info} />
      ))}
      {/* </Col> */}
      {/* </Row> */}
    </>
  );
}

export default Layout;
