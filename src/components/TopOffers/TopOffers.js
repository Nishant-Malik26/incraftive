import React from 'react';
import './TopOffers.css';
import { Col, Row } from 'antd';
function TopOffers() {
  return (
    <>
      <Row>
        <Col sm={24} md={24}>
          <div className='center-div'>OFFER CORNER</div>
        </Col>
      </Row>
      <Row justify='center'>
        <Col style={{ maxWidth: '220px' }}>
          <img
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
            }}
            src='https://ecomm.dotvik.com/dist/images/homePageDiscountGif/discount1.gif'
            alt='loding'
          ></img>
        </Col>
        <Col style={{ maxWidth: '220px' }}>
          <img
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
            }}
            src='https://ecomm.dotvik.com/dist/images/homePageDiscountGif/discount1.gif'
            alt='loding'
          ></img>
        </Col>
        <Col style={{ maxWidth: '220px' }}>
          <img
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
            }}
            src='https://ecomm.dotvik.com/dist/images/homePageDiscountGif/discount1.gif'
            alt='loding'
          ></img>
        </Col>
      </Row>
    </>
  );
}

export default TopOffers;
