import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import './Swiper.css';
import axios from 'axios';

function ProductSwiper() {
  const navigate = useNavigate();
  const [items, setItems] = useState();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/items`);
        setItems(response.data);
      } catch(error) {
        console.error('Error fetching items', error);
      }
    };

    fetchItems();
  }, []);
  
    return(
        <Swiper
            className="product-slider swiper"
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 100 }}
        >
          {
            items?.map((item) => {
              return (
                <SwiperSlide>
              <div className="swiper-slide box">  
                  <img src={`/assets/${item.photo}`} alt="item.name" className="product-image" />
                  <div className='product-details'>
                      <h3 className="card-title">{item.name}</h3>
                      <p className="card-text">£{item.price}</p>
                      <button className='btn btn-primary' onClick={() => navigate(`/items/${item._id}`)}>Show Details</button>
                      <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
              )
            })
          }
        </Swiper>
    );
}

export default ProductSwiper