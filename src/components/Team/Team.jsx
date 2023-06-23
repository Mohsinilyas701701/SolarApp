import React from "react";
import "./Team.css";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import qoute1 from "../../assets/qoute1.png";
import qoute2 from "../../assets/qoute2.png";
import dots1 from "../../assets/dots1.png";
import Line1 from "../../assets/Line1.png";

import Card from "./Card";

const Team = () => {
  return (
    <div className='team position-relative'>
      <div className='team_dots_image'>
        <img src={dots1} alt='' />
      </div>
      <div className='container'>
        {/* Team Heading */}
        <div className='row mt-10'>
          <h2 className='text-center'>Chi Siamo</h2>
          <div className='green_underline'></div>
          <p className='text-center py-5'>
            Solar Innovatio è una PMI innovativa italiana specializzata nella progettazione e
            realizzazione di sistemi fotovoltaici intelligenti. Solar Innovatio unisce alla
            decennale esperienza maturata nel panorama italiano nell'ambito delle soluzioni
            fotovoltaiche un approccio ingegneristico, innovativo, digitale alla principale fonte di
            energia rinnovabile.
          </p>
        </div>
        {/* Card Section */}
        <div className='row mt-10 g-5'>
          <div className='col-md-4 px-5 mt-md-0'>
            <Card
              TeamCardImg={team1}
              TeamCardTitle='Cristian Testoni'
              TeamCardDesc='Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica.'
            />
          </div>
          <div className='col-md-4 px-5 mt-10 mt-md-0'>
            <Card
              TeamCardImg={team2}
              TeamCardTitle='Francesco Gavioli'
              TeamCardDesc='Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici'
            />
          </div>
          <div className='col-md-4 px-5 mt-10 mt-md-0'>
            <Card
              TeamCardImg={team3}
              TeamCardTitle='Massimo Fabi'
              TeamCardDesc='Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori'
            />
          </div>
        </div>
        {/* Quote Section */}
        <div className='row mt-10 justify-content-center'>
          <div className='col-10'>
            <div className='row'>
              <div className='col-1 ps-5 ps-lg-5 ps-md-2'>
                <div>
                  <img src={qoute1} alt='' />
                </div>
              </div>
              <div className='col-10'>
                <h5>
                  Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una componente di una
                  soluzione ingegneristica più completa che comprende sensoristiche avanzate e
                  l'integrazione con i sistemi domotici di casa.
                </h5>
              </div>
              <div className='col-1 ps-5 ps-md-0 ps-lg-4'>
                <div>
                  <img src={qoute2} alt='' />
                </div>
              </div>
            </div>
            {/* Quote Writer */}

            <div className='row py-5 justify-content-center align-items-center'>
              <div className='col-1'>
                <div className='d-flex justify-content-end'>
                  <img src={Line1} alt='' />
                </div>
              </div>
              <div className='col-4 col-md-2'>
                <h6 className='text-center brand-text-primary'>Cristian Testoni </h6>
              </div>
              <div className='col-1'>
                <div className='d-flex justify-content-start'>
                  <img src={Line1} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
