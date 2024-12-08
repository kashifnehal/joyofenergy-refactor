import { formatDateLabel } from './chart.js';
// import { groupByDay } from './reading';
const calculate = (readings) => {
  // var grouped = groupByDay(await readings);
  // console.log(readings);
  const labels = readings.map(({ time }) => formatDateLabel(time));
  const values = readings.map(({ value }) => value);

  // console.log(labels);
  // console.log(values);

  const totalKWused = values.reduce((sum, curr) => {
    return sum + curr;
  });
  // console.log(totalKWused * 0.138);

  const calculatedObj = {
    totalKW: totalKWused,
    cost: totalKWused * 0.138,
    footPrint: (totalKWused * 0.0002532).toFixed(4),
  };

  return calculatedObj;
};
export default calculate;
