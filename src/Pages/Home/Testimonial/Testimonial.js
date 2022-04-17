import React from 'react';
import dentist from '../../../images/dentist.jpg'
import './Testimonial.css'

const Testimonial = () => {
      return (
        <div className="container">
          <div className="testimonial-container">
            <div>
              <h1 className="testimonial-text">Testimonial</h1>
              <p className="title-text">
                <span className="happy-text1">Happy </span> Patients with
                Satisfaction <span className="happy-text1"> words</span>
              </p>
              <p className='details'>
                “Dental care is the maintenance of healthy teeth and the
                practice of keeping the mouth and teeth clean pur sue pleasure
                rationally encounter consequences that are extremely painful.
                Nor again is there anyone”
              </p>
            </div>
            <div>
              <img className="test-img" src={dentist} alt="" />
            </div>
          </div>
        </div>
      );
};

export default Testimonial;