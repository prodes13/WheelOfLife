import {getChart} from './chart.js';
import {datasetsLabels, setValues} from './chartDimensions.js';
import {showQuestions} from './showQuestions.js';
import {increaseX} from './increaseX.js';

var done = true;

var x = 0;
console.log('x starts at ', x);

x = increaseX(x);
console.log('x is now: ', x);


// canvas to draw
var ctx = document.getElementById("myChart");

// fetching data from a fake server
fetch('../data/data.json')
    .then(response => response.json())
    .then(data => showQuestions(data.query));

// setting values for different fields
var datasetsValues = setValues([4,6,3,4,5,6,7,5]);

// drawing the chart
if(done) {
    var resultsChart = getChart(ctx, datasetsLabels, datasetsValues);
}

