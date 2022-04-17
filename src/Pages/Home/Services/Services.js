import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
      const [services, setServices] = useState([])

      useEffect(() => {
            fetch("data.json")
                  .then(res => res.json())
            .then(data => setServices(data))
      },[])
      return (
        <div id='services' className='container'>
          <h2 id='service-title' className='text-center mt-5 mb-5'>Our Services</h2>
          <div className='services-container'>
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      );
};

export default Services;