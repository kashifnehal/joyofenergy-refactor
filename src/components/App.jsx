import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import EnergyStats from './EnergyStats/EnergyStats';
import DeviceList from './DeviceList/DeviceList';
import UsageChart from './UsageChart/UsageChart';
import { groupByDay, sortByTime } from '../utils/reading';
import { useEnergyData } from '../hooks/useEnergyData';
import ErrorFallback from './ErrorFallback';

const App = () => {
  const { readings, devices, stats } = useEnergyData();
  const [timeRange, setTimeRange] = useState('30');

  const filteredReadings = sortByTime(groupByDay(readings)).slice(-parseInt(timeRange));

  return (
    <div className="background shadow-2 flex overflow-hidden">
      <aside className="p3 menuWidth overflow-auto">
        <EnergyStats {...stats} />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DeviceList devices={devices} />
        </ErrorBoundary>
      </aside>
      <article className="bg-very-light-grey p3 flex-auto overflow-auto">
        <h1 className="regular darkgray line-height-1 mb3">Energy consumption</h1>
        <section className="mb3">
          <button
            className="h5 inline-block shadow-2 pl2 pr2 pt1 pb1 roundedMore border-grey bg-blue white bold"
            onClick={() => setTimeRange('30')}
          >
            Last 30 days
          </button>
        </section>
        {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
          <UsageChart readings={filteredReadings} />
        {/* </ErrorBoundary> */}
      </article>
    </div>
  );
};

export default App;