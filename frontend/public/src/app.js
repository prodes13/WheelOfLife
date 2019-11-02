import {getChart} from './chart.js';
import {datasetsLabels, setValues} from './chartDimensions.js';

// canvas to draw
var ctx = document.getElementById("myChart");

// fetching data from a fake server
fetch('../data/data.json')
    .then(response => response.json())
    .then(data => displayQuestions(data));

// displaying response from an unknown server
function displayQuestions(data) {
    console.log(data.query);
    
}

// setting values for different fields
var datasetsValues = setValues([4,6,3,4,5,6,7,5]);

// drawing the chart
var resultsChart = getChart(ctx, datasetsLabels, datasetsValues);
