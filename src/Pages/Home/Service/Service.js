import React from 'react';

const Service = ({ service }) => {
      const {name, price, img} = service
      return (
            <div>
                  <img style={{width: 400, height: 300}} src={img} alt="" />
                  <h1>This is service:{name}</h1>
                  <h3>Price: {price}</h3>
                  <button>Order: {name }</button>
                  
            </div>
      );
};

export default Service;