
import React, { useState } from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner001.jpg'
import banner2 from '../../images/banner02.jpg'
import banner3 from '../../images/dental-banner.jpg'

const Banner = () => {
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
      return (
        <div>
          <Carousel className="" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block h-80 w-100"
                style={{ width: 400, height: 600 }}
                src={banner1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="slider-title">First slide label</h3>
                <p className="slider">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                style={{ width: 400, height: 600 }}
              />

              <Carousel.Caption>
                <h3 className="slider-title">Second slide label</h3>
                <p className="slider">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                style={{ width: 400, height: 600 }}
              />

              <Carousel.Caption>
                <h3 className="slider-title">Third slide label</h3>
                <p className="slider">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      );
};

export default Banner;