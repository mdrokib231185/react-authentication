import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
      const {serviceId} = useParams()
      return (
            <div>
                  <h1>This is service Details {serviceId}</h1>
                  <Link to={'/checkout'}>
                        <button>Procced Checkout</button>
                  </Link>
            </div>
      );
};

export default ServiceDetails;