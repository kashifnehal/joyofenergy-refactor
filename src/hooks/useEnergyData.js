import { useState, useEffect } from "react";
import { getReadings } from "../utils/reading";
import { MOCK_DEVICES } from "../constants/mockData";

export const useEnergyData = () => {
  const [readings, setReadings] = useState([]);
  const stats = {
    powerDraw: 1.4,
    solarProduction: 5.8,
    gridFeed: 4.4,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReadings();
        setReadings(data);
      } catch (error) {
        console.error("Failed to fetch readings:", error);
      }
    };

    fetchData();
  }, []);

  return {
    readings,
    devices: MOCK_DEVICES,
    stats,
  };
};
