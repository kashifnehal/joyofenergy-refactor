import React from 'react';
import DeviceItem from './DeviceItem';

const DeviceList = ({ devices }) => {
  return (
    <section className="h5 darkgray mb2">
      <h4 className="h4 mb1">Your devices:</h4>
      {devices.map((device) => (
        <DeviceItem key={device.id} {...device} />
      ))}
    </section>
  );
};



export default DeviceList;