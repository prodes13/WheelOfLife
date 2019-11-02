import {getChart} from './chart.js';
import {datasetsLabels, setValues} from './chartDimensions.js';
import {showQuestions} from './showQuestions.js';

var done = true;

// canvas to draw
var ctx = document.getElementById("myChart");

// fetching data from a fake server
fetch('../data/data.json')
    .then(response => response.json())
    .then(data => showQuestions(data.query, 3));

// setting values for different fields
var datasetsValues = setValues([4,6,3,4,5,6,7,5]);

// drawing the chart
if(done) {
    var resultsChart = getChart(ctx, datasetsLabels, datasetsValues);
}
