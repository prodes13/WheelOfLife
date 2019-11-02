import {getChart} from './chart.js';

var ctx = document.getElementById("myChart");

var datasetsLabels = ['Health', 'Relationships', 'Environment', 'Career', 'Money', 'Personal growth', 'Brightness of Life', 'Spiritual Life'];
var datasetsValues = [{
    label: 'Health',
    backgroundColor: 'orangered',
    data: [6, 6, 0, 0, 0, 0, 0, 0]
}, {
    label: 'Relationships',
    backgroundColor: 'blue',
    data: [0, 8, 8, 0, 0, 0, 0, 0]
}, {
    label: 'Environment',
    backgroundColor: 'rgb(255, 99, 132)',
    data: [0, 0, 9, 9, 0, 0, 0, 0]
}];

var resultsChart = getChart(ctx, datasetsLabels, datasetsValues);
