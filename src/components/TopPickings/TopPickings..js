import { Col, Row } from 'antd';
import React from 'react';
import './TopPickings.css';
function TopPickings() {
  return (
    <>
      <Row>
        <Col offset={2} sm={6} md={6}>
          <br />
          <h3>ALL TIME FAVOURITES</h3>
        </Col>
      </Row>
      <Row>
        <Col offset={2} sm={24} md={24}>
          <br />

          <h1>Top Pick listing</h1>
        </Col>
      </Row>
      <Row>
        <Col offset={2} sm={12} md={12}>
          <br />

          <p>
            We've sorted through our feed to put together a collection of our
            products <br />
            perfect for a summer outdoors.
          </p>
        </Col>
      </Row>
      <Row justify='space-evenly'>
        <Col span={4}>
          <img
            style={{
              width: '90%',
            }}
            src='https://ecomm.dotvik.com/dist/assets/homePageCate/womenDress.jpeg'
            alt='loding'
          ></img>
        </Col>
        <Col span={4}>
          <img
            style={{
              width: '90%',
            }}
            src='https://ecomm.dotvik.com/dist/assets/homePageCate/womenDress.jpeg'
            alt='loding'
          ></img>
        </Col>
        <Col span={4}>
          <img
            style={{
              width: '90%',
            }}
            src='https://ecomm.dotvik.com/dist/assets/homePageCate/womenDress.jpeg'
            alt='loding'
          ></img>
        </Col>
        <Col span={4}>
          <img
            style={{
              width: '90%',
            }}
            src='https://ecomm.dotvik.com/dist/assets/homePageCate/womenDress.jpeg'
            alt='loding'
          ></img>
        </Col>
      </Row>
    </>
  );
}

export default TopPickings;
