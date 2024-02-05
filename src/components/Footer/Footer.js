import React from 'react';
import { Row, Col, Space } from 'antd';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/ai';

import './Footer.css';
function Footer() {
  return (
    <div className='footer-container'>
      <Row>
        <Col offset={2} span={4}>
          <h3>Company</h3>
          <br />
          <p>Help / Support & FAQ</p>
          <p>Help / Support & FAQ</p>
          <p>Help / Support & FAQ</p>
          <p>Help / Support & FAQ</p>
          <p>Help / Support & FAQ</p>
          <p>Help / Support & FAQ</p>
        </Col>
        <Col span={4}>
          <h3>Policy & Term</h3>
          <br />
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
        </Col>
        <Col span={4}>
          <h3>Customer Care</h3>
          <br />
          <p>+919311421554</p>
          <p>+919311421554</p>
          <p>+919311421554</p>
          <p>+919311421554</p>
          <p>+919311421554</p>
          <p>+919311421554</p>
        </Col>
        <Col span={8}>
          <h3>Follow Us</h3>
          <Space style={{ marginTop: '15px' }} size='middle'>
            <AiOutlineInstagram size={40} />
            <AiOutlineFacebook size={40} />
            <AiFillTwitterSquare size={40} />
            <AiFillYoutube size={40} />
          </Space>
          <h3>SHOP FASTER WITH THE APP</h3>
        </Col>
      </Row>
      <br />
      <br />
      <Row justify='center'>
        <Col span={6}>
          © Copyright © 2022- V2 Retail Ltd. All rights reserved
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default Footer;
