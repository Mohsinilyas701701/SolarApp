import React from "react";

const BenefitCard = ({ BenefitCardTitle, BenefitCardDesc, CircleImg, IconImage }) => {
  return (
    <div>
      <div className='row'>
        <div className='col-2'>
          <div className='pt-2 ps-4'>
            <div className='benefit_icons'>
              <img src={CircleImg} className='circle1' alt='' />
              <img src={IconImage} className='icon' alt='' />
            </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='row'>
            <h5>{BenefitCardTitle}</h5>
            <p>{BenefitCardDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
