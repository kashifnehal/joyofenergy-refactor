import React, { useEffect, useRef } from "react";
import { createChart } from "../../utils/chart";

const UsageChart = ({ readings }) => {
  const chartRef = useRef(null); // Ref for the canvas
  const chartInstanceRef = useRef(null); // Ref for the Chart.js instance

  useEffect(() => {
    // Destroy the old chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance and store it in the ref
    if (chartRef.current) {
      chartInstanceRef.current = createChart(chartRef.current, readings);
    }

    // Cleanup function to destroy the chart instance on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null; // Reset the reference
      }
    };
  }, [readings]); // Recreate the chart when `readings` change

  return (
    <section className="chartHeight mb3">
      <canvas ref={chartRef} id="usageChart" />
    </section>
  );
};

export default UsageChart;
