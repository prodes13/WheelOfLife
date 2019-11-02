import {getChart} from './chart.js';
import {datasetsLabels, datasetsValues} from './chartDimensions.js';
import data from '../data/data.js';

var ctx = document.getElementById("myChart");

console.log(data.query);

var resultsChart = getChart(ctx, datasetsLabels, datasetsValues);
