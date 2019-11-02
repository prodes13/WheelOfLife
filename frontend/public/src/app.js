import {getChart} from './chart.js';
import {datasetsLabels, datasetsValues} from './chartDimensions.js';

var ctx = document.getElementById("myChart");

var resultsChart = getChart(ctx, datasetsLabels, datasetsValues);
