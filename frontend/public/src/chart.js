function getChart(ctx, datasetsLabels, datasetsValues) {
    return new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: datasetsLabels,
            datasets: datasetsValues
    
        },
        options: {
            // elements: {
            //     point: {
            //         radius: 0
            //     }
            // },
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
            legend: {
                display: true
            }
        }
    }); 
}

export {getChart};