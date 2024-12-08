import React from 'react';

const DeviceItem = ({ name, consumption }) => {
  return (
    <div className="shadow-2 roundedMore bg-super-light-grey mb1">
      <p className="darkgray pl2 pt1 pb1">{name}</p>
      <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
        {consumption.toFixed(4)}kW
      </p>
    </div>
  );
};



export default DeviceItem;