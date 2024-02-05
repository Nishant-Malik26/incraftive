import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { Avatar, Badge, Space } from 'antd';

import '../../style.css';
function Navbar() {
  const [items, setItems] = useState([]);
  // Approach
  // Initially tried to use Antd, So to render menu converted the data in {label : "String", key : "UniqueIdentifier" , children : []}
  // format
  // Due to lot of customization needed used custom navbar
  // In interest of time used the used the transformed data to render navbar
  const newArray = async (arrayToMap) => {
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
        const newItem = await newArray(newData);
        setItems(newItem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {items.length > 0 && (
        <>
          <nav className='navbar'>
            <img
              rel='icon'
              src='https://ecomm.dotvik.com/dist/assets/logo.jpg'
              alt='loading'
            ></img>
            {items.map((item) => {
              return (
                <div key={item.key} className='d align-left'>
                  <button className='d-btn'>{item.label}</button>
                  <div className='d-content'>
                    <div className='row'>
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
                    </div>
                  </div>
                </div>
              );
            })}
            <div className='align-right'>
              <Space style={{ marginRight: '12px' }} size='middle'>
                <AiOutlineSearch size={25} />
                <AiOutlineUser size={25} />
                Login
                <Badge count={5}>
                  <Avatar shape='square' size={'small'} />
                </Badge>
                <Badge count={0} showZero>
                  <Avatar shape='square' size={'small'} />
                </Badge>
              </Space>
            </div>
          </nav>

          <marquee>Beware of fake offers and fraudulent callers</marquee>
        </>
      )}
    </>
  );
}

export default Navbar;
