import React from "react";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import "./Services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div>
      <div className='services mt-10'>
        <div className='container'>
          <div className='row'>
            <h2 className='text-center'>Perchè S.I.R.E.</h2>
            <div className='green_underline'></div>

            {/* card Section */}
            <div className='row justify-content-center py-5'>
              <div className='col-md-6 col-xl-4 p-5'>
                <ServiceCard
                  ServiceCardImg={services1}
                  ServiceCardTitle='Risparmio Energetico'
                  ServiceCardDesc='Risparmia da un minimo del 60% sulla bolletta fino all indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.'
                />
              </div>
              <div className='col-md-6 col-xl-4 p-5'>
                <ServiceCard
                  ServiceCardImg={services2}
                  ServiceCardTitle='Mobilità Elettrica'
                  ServiceCardDesc='Lunica soluzione che rende l’utilizzo di un’auto elettrica veramente economico.  L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.'
                />
              </div>
              <div className='col-md-6 col-xl-4 p-5'>
                <ServiceCard
                  ServiceCardImg={services3}
                  ServiceCardTitle='Comunità Energetica'
                  ServiceCardDesc='Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
