import { Row, Col } from 'antd';
import React from 'react';
import '../TopOffers/TopOffers.css';
function Sections(props) {
  const { info } = props;
  return (
    <>
      <Row>
        <Col sm={24} md={24}>
          <div className='center-div border-btm'>{info.sectionName}</div>
        </Col>
      </Row>
      <Row justify='space-evenly'>
        {info.imagesUrl.map((imageUrl, i) => {
          return (
            <Col className='center-div' key={imageUrl + i} span={6}>
              <img
                style={{
                  width: '70%',
                  height: 'auto',
                  maxWidth: '100%',
                }}
                src={imageUrl}
                alt='loding'
              ></img>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Sections;
