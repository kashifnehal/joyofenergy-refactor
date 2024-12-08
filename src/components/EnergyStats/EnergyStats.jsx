import React from 'react';

const EnergyStats = (props) => {
  const { powerDraw, solarProduction, gridFeed } = props
  return (
    <div>
      <p className="h2 greyBlue">⚡️ {powerDraw}kW</p>
      <p className="darkgray mb2">Power draw</p>
      <p className="h2 greyBlue">☀️️ {solarProduction}kW</p>
      <p className="darkgray mb2">Solar power production</p>
      <p className="h2 greyBlue">🔌️ {gridFeed}kW</p>
      <p className="darkgray mb2">Fed into grid</p>
    </div>
  );
};



export default EnergyStats;