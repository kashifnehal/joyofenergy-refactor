import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController, // Import the BarController
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register all required components
Chart.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const formatDateLabel = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.getMonth();
  const day = date.getDate();

  const formatPart = (value) => (value < 10 ? `0${value}` : `${value}`);

  return `${formatPart(day)}/${formatPart(month + 1)}`;
};

export const createChart = (canvas, readings) => {
  if (!canvas || !readings || readings.length === 0) {
    console.warn("Invalid canvas or readings provided for chart creation.");
    return null;
  }

  // Extract labels and data from readings
  const labels = readings.map(({ time }) => formatDateLabel(time));
  const values = readings.map(({ value }) => value);

  // Define chart data
  const data = {
    labels,
    datasets: [
      {
        label: "kWh usage",
        data: values,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        borderWidth: 0.2,
        backgroundColor: "#5A8EDA",
        borderRadius: 10,
      },
    ],
  };

  // Create and return a new chart instance
  return new Chart(canvas, {
    type: "bar",
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      font: {
        size: 10, // Move font size configuration to options
      },
    },
  });
};
