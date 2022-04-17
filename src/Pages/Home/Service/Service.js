import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
      const { id, name, price, img, description } = service;
      const navigate = useNavigate()
      const navigateToServiceDetail = (id) => {
            navigate(`/service/${id}`)
      }
      return (
        <div className="service">
          <img style={{ width: 400, height: 300 }} src={img} alt="" />
          <h3 className="service-name">Service Name:{name}</h3>
          <h3 className="price">Price: {price}</h3>
          <p className="description">{description}</p>
          <button onClick={() =>navigateToServiceDetail(id)} className="button">
            Book Now: {name}
          </button>
        </div>
      );
};

export default Service;