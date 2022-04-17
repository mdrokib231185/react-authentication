import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
      const {serviceId} = useParams()
      return (
            <div className='align-items-center d-flex text-center'>
                  <h1>This is service Details {serviceId}</h1>
                  <Link to={'/checkout'}>
                        <button className='btn btn-success'>Procced Checkout</button>
                  </Link>
            </div>
      );
};

export default ServiceDetails;