import {getChart} from './chart.js';

var ctx = document.getElementById("myChart");
var datasetsLabels = ['Health', 'Relationships', 'Environment', 'Career', 'Money', 'Personal growth', 'Brightness of Life', 'Spiritual Life'];
var datasetsValues = [{
        label: 'Health',
        backgroundColor: 'rgba(2, 237, 61, 0.7)',
        data: [6, 6, 0, 0, 0, 0, 0, 0],
        borderWidth: 0
    }, 
    {
        label: 'Relationships',
        backgroundColor: 'rgba(237, 2, 2, 0.7)',
        data: [0, 8, 8, 0, 0, 0, 0, 0],
        borderWidth: 0
    }, 
    {
        label: 'Environment',
        backgroundColor: 'rgba(237, 2, 214, 0.7)',
        data: [0, 0, 9, 9, 0, 0, 0, 0],
        borderWidth: 0
    },
    {
        label: 'Career',
        backgroundColor: 'rgba(237, 2, 108, 0.7)',
        data: [0, 0, 0, 5, 5, 0, 0, 0],
        borderWidth: 0
    },
    {
        label: 'Money',
        backgroundColor: 'rgba(1, 86, 12, 0.7)',
        data: [0, 0, 0, 0, 3, 3, 0, 0],
        borderWidth: 0
    },
    {
        label: 'Personal growth',
        backgroundColor: 'rgba(2, 237, 222, 0.7)',
        data: [0, 0, 0, 0, 0, 4, 4, 0],
        borderWidth: 0
    },
    {
        label: 'Brightness of life',
        backgroundColor: 'rgba(2, 61, 237, 0.7)',
        data: [0, 0, 0, 0, 0, 0, 6, 6],
        borderWidth: 0
    },
    {
        label: 'Spiritual life',
        backgroundColor: 'rgba(237, 218, 2, 0.7)',
        data: [7, 0, 0, 0, 0, 0, 0, 7],
        borderWidth: 0
    }

];

var resultsChart = getChart(ctx, datasetsLabels, datasetsValues);
console.log(resultsChart.chart);
