import {getChart} from './chart.js';

var ctx = document.getElementById("myChart");

var datasetsLabels = ['Health', 'Relationships', 'Environment', 'Career', 'Money', 'Personal growth', 'Brightness of Life', 'Spiritual Life'];
var datasetsValues = [7, 8, 4, 2, 8, 5 ,6, 3];

var resultsChart = getChart(ctx, datasetsLabels, datasetsValues)
