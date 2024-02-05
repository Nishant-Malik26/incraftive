import { Row, Col } from 'antd';
import React from 'react';

function SpotlightSection() {
  return (
    <>
      <Row>
        <Col sm={24} md={24}>
          <div className='center-div border-btm-full'>IN THE SPOTLIGHTS</div>
        </Col>
      </Row>
      <Row>
        <Col className='center-div' span={24}>
          <img
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
            }}
            src='https://ecomm.dotvik.com/dist/images/bannerTemp/classic-classy.jpeg'
            alt='loading'
          ></img>
        </Col>
      </Row>
      <Row>
        <Col className='center-div' span={24}>
          <img
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
            }}
            src='https://ecomm.dotvik.com/dist/images/bannerTemp/classic-classy.jpeg'
            alt='loading'
          ></img>
        </Col>
      </Row>
    </>
  );
}

export default SpotlightSection;
