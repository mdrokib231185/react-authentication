import React from 'react';
import image from '../../../images/pagenot.jpg'
import './Notfound.css'

const Notfound = () => {
      return (
        <div>
          <div className="mx-auto d-flex justify-content-center">
            <div>
              <img className="mx-auto" src={image} alt="" />
              
            </div>
          </div>
        </div>
      );
};

export default Notfound;