import React, { useEffect, useState } from 'react';
import { ConfigProvider, Menu, Row, Col } from 'antd';
import axios from 'axios';

import '../../style.css';
function Navbar() {
  const [itemmmmms, setItemmmmms] = useState([]);
  const nnewArray = async (arrayToMap) => {
    const promises = arrayToMap.map(async (item) => {
      const category = item?.urlKey;
      return await axios
        .get(
          `https://ecomm.dotvik.com/v2kart/service/categories/${category}/tree`
        )
        .then((res) => {
          const { data } = res?.data;
          const filteredArray = data?.subCategory
            .filter((innerItem) => {
              return innerItem.parentId === item.key;
            })
            .map((mappedSubcategory) => {
              return {
                type: 'group',

                label: mappedSubcategory?.categoryName,
                key: mappedSubcategory?.id,
                children: data?.childCategory
                  ?.filter(
                    (childCategory) =>
                      childCategory.parentId === mappedSubcategory.id
                  )
                  .map((childCategory) => {
                    return {
                      label: childCategory.categoryName,
                      key: childCategory?.id,
                    };
                  }),
              };
            });

          return {
            label: item.label,
            key: item.key,
            children: filteredArray,
          };
        })
        .catch((err) => {
          return { err };
        });
    });

    return Promise.all(promises)
      .then((newArray) => {
        return newArray;
      })
      .catch((err) => {
        return [{ err }];
      });
  };

  useEffect(() => {
    axios
      .get('https://ecomm.dotvik.com/v2kart/service/categories/mainCategories')
      .then(async (res) => {
        const { data } = res?.data;
        const newData = data.map((menuItems) => {
          return {
            urlKey: menuItems?.urlKey,
            label: menuItems.categoryName,
            key: menuItems.id,
          };
        });
        const newItem = await nnewArray(newData);
        setItemmmmms(newItem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {itemmmmms.length > 0 && (
        <>
          <nav className='navbar'>
            <a href='/'>
              <img
                rel='icon'
                src='https://ecomm.dotvik.com/dist/assets/logo.jpg'
                alt='loading'
              ></img>
            </a>
            {itemmmmms.map((item) => {
              return (
                <div key={item.key} className='d'>
                  <button className='d-btn'>{item.label}</button>
                  <div className='d-content'>
                    <div className='row'>
                      {/* <Row>
                      <Col xs={24} sm={24} md={24}> */}
                      {item.children.map((subcategory, i) => {
                        return (
                          <div key={subcategory + i} className='column'>
                            <p>{subcategory.label}</p>

                            {subcategory.children.map((childrenCategory, i) => {
                              return (
                                <a key={subcategory.key + i} href='/'>
                                  {childrenCategory?.label}
                                </a>
                              );
                            })}
                          </div>
                        );
                      })}
                      {/* </Col>
                    </Row> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
          <marquee>Beware of fake offers and fraudulent callers</marquee>
        </>
      )}
    </>
  );
}

export default Navbar;
