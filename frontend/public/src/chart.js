function getChart(ctx, datasetsLabels, datasetsValues) {
    return new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: datasetsLabels,
            datasets: datasetsValues
    
        },
        options: {
            scale: {
                pointLabels: {
                    fontSize: 12
                },
                angleLines: {
                    display: true
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

export {getChart};