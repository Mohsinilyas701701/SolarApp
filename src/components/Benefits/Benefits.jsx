import React from "react";
import "./Benefits.css";
import benefits1 from "../../assets/benefits1.png";
import benefits2 from "../../assets/benefits2.png";
import benefits3 from "../../assets/benefits3.png";
import benefits4 from "../../assets/Benefits5.png";
import benefits5 from "../../assets/Benefits4.png";
import benefits6 from "../../assets/Benefits6.png";
import circle1 from "../../assets/circle1.png";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <div>
      <div className='benefits mt-10'>
        <div className='container'>
          <div className='row py-10'>
            {/* Header */}
            <h2 className='text-center'>Connesso, Intelligente, Resistente</h2>
            <div className='green_underline'></div>
            {/* Card Sections */}
            <div className='row my-5 g-5'>
              <div className='col-md-6'>
                <BenefitCard
                  BenefitCardTitle='Versatile'
                  BenefitCardDesc='Installabile in qualsiasi balcone anche allinterno del condominio Non richiede
              autorizzazioni ne opere murarie Utile anche come schermatura solare'
                  CircleImg={circle1}
                  IconImage={benefits1}
                />
              </div>
              <div className='col-md-6'>
                <BenefitCard
                  BenefitCardTitle='Indipendente e Green'
                  BenefitCardDesc='dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà.'
                  CircleImg={circle1}
                  IconImage={benefits2}
                />
              </div>
              <div className='col-md-6'>
                <BenefitCard
                  BenefitCardTitle='Automatizzato'
                  BenefitCardDesc='Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano lesposizione in base alle condizioni'
                  CircleImg={circle1}
                  IconImage={benefits3}
                />
              </div>
              <div className='col-md-6'>
                <BenefitCard
                  BenefitCardTitle='Connesso'
                  BenefitCardDesc='Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta.'
                  CircleImg={circle1}
                  IconImage={benefits4}
                />
              </div>
              <div className='col-md-6'>
                <BenefitCard
                  BenefitCardTitle='Efficiente'
                  BenefitCardDesc='Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose.'
                  CircleImg={circle1}
                  IconImage={benefits5}
                />
              </div>
              <div className='col-md-6'>
                <BenefitCard
                  BenefitCardTitle='Resistente'
                  BenefitCardDesc='Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi.'
                  CircleImg={circle1}
                  IconImage={benefits6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
