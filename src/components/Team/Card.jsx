import React from "react";
import "./Card.css";

const Card = ({ TeamCardTitle, TeamCardDesc, TeamCardImg }) => {
  return (
    <div>
      <div className='row'>
        <div className='card_wrapper position-relative'>
          <div className='position-absolute top-0 start-50 translate-middle'>
            <img src={TeamCardImg} alt='' />
          </div>
          <div className='mt-10 pt-4 text-center '>
            <h3>{TeamCardTitle}</h3>
            <p className='py-3'>{TeamCardDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
