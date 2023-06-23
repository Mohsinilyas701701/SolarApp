import React from "react";

const ServiceCard = ({ ServiceCardTitle, ServiceCardDesc, ServiceCardImg }) => {
  return (
    <div>
      <div className='row'>
        <div className='service_card px-3 py-5'>
          <div className='text-center py-3'>
            <img src={ServiceCardImg} alt='' />
          </div>
          <div className='text-center'>
            <h6>{ServiceCardTitle}</h6>
            <p>{ServiceCardDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
