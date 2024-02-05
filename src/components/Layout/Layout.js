import React from 'react';
import Navbar from '../Navbar';
import TopCarousel from '../TopCarousel/TopCarousel';
import TopPickings from '../TopPickings/TopPickings.';
import TopOffers from '../TopOffers/TopOffers';
import Sections from '../Sections/Sections';
import SpotlightSection from '../SpotlightSection/SpotlightSection';
import Footer from '../Footer/Footer';

function Layout() {
  // Declared a dummy array for rendering for him, for her and for kids 
  // showed data in component using props
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
      <Navbar />
      <TopCarousel />
      <TopPickings />
      <TopOffers />
      {SECTION_INFO.map((info) => (
        <Sections info={info} />
      ))}
      <SpotlightSection />
      <Footer />
    </>
  );
}

export default Layout;
