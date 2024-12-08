import { renderChart } from './chart.js';
import { getReadings, groupByDay, sortByTime } from './reading';
import calculate from './calculate';
const readings = await getReadings();
const readingsforthirty = await getReadings();
let calculatedObj = calculate(
  sortByTime(groupByDay(readingsforthirty)).slice(-30)
);
console.log(calculatedObj);
//  console.log(readings);
renderChart(sortByTime(groupByDay(readings)).slice(-30));
