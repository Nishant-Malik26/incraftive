import React from 'react';
import Navbar from '../Navbar';
import { Col, Row } from 'antd';
import TopCarousel from '../TopCarousel/TopCarousel';
import TopPickings from '../TopPickings/TopPickings.';
import TopOffers from '../TopOffers/TopOffers';

function Layout() {
  return (
    <>
      {/* <Row> */}
      {/* <Col xs={24} sm={24} md={24}> */}
      <Navbar />
      <TopCarousel />
      <TopPickings />
      <TopOffers />
      {/* </Col> */}
      {/* </Row> */}
    </>
  );
}

export default Layout;
