import React from 'react';
import './Service.css'

const Service = ({ service }) => {
      const {name, price, img, description} = service
      return (
            <div className='service'>
                  <img style={{width: 400, height: 300}} src={img} alt="" />
                  <h3 className='service-name'>Service Name:{name}</h3>
                  <h3 className='price'>Price: {price}</h3>
                  <p className='description'>{description}</p>
                  <button className='button'>Order: {name}</button>
                  
                  
            </div>
      );
};

export default Service;