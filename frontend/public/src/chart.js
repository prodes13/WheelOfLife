var datasetsLabels = ['Health', 'Relationships', 'Environment', 'Career', 'Money', 'Personal growth', 'Brightness of Life', 'Spiritual Life'];
function setValues(results) {
    return [{
        data: [...results],
        backgroundColor: [
            'rgba(2, 237, 61, 0.7)',
            'rgba(237, 2, 2, 0.7)',
            'rgba(237, 2, 214, 0.7)',
            'rgba(237, 2, 108, 0.7)',
            'rgba(1, 86, 12, 0.7)',
            'rgba(2, 237, 222, 0.7)',
            'rgba(2, 61, 237, 0.7)',
            'rgba(237, 218, 2, 0.7)'
        ],
        label: 'Results' // for legend
    }];
}

function getChart(ctx, datasetsLabels, datasetsValues) {
    return new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: datasetsLabels,
            datasets: datasetsValues
        },
        options: {
            scale: {
                angleLines: {
                    display: false
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5
                }
            },
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: false
            },
            legend: {
              display: true,
            }
        }
    });
}