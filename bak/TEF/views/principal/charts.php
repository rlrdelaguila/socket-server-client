<script type="text/javascript">
  // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = '#292b2c';

  // Area Chart Example
  var ctx = document.getElementById("myAreaChart");


  var myLineChart = new Chart(ctx, {
    type: '<?php echo $chartType; ?>',
    data: {
      labels: [<?php echo $RecordDate; ?>],
      datasets: [{
          label: "Valor Total (R$)",
          lineTension: 0.3,
          backgroundColor: "rgba(2,117,216,0.6)",
          borderColor: "rgba(2,117,216,1)",
          pointRadius: 5,
          pointBackgroundColor: "rgba(2,117,216,1)",
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data: [<?php echo $ItemsProduced; ?>],
        },

        /*{
            label: 'MEDIA',
			fill: true,
			lineTension: 0.2,
            backgroundColor: 'rgb(233, 213, 209, 0.7)',
            borderColor: 'rgb(233, 174, 162, 1)',
			borderWidth:3,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: "rgba(233, 174, 162, 1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 1,
			pointHoverRadious: 5,
			pointHoverBackgroundColor: "rgba(220, 220, 220, 1)",
			pointHoverBorderWidth: 2,
			pointRadious: 1,
			pointHitRadious: 10,
            data: [<?php echo $ItemsPastDue; ?>]
        }*/
      ]
    },
    options: {
      scales: {
        xAxes: [{
          /*time: {
            unit: 'date'
          },*/
          gridLines: {
            display: false
          },
          /*ticks: {
            maxTicksLimit: 7
          }*/
        }],
        /* yAxes: [{
           ticks: {
             min: 0,
             max: 40000,
             maxTicksLimit: 5
           },
           gridLines: {
             color: "rgba(0, 0, 0, .125)",
           }
         }],*/
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
     /* scaleLabel: {
        display: true,
        labelString: 'VALOR(R$)',

      },*/
      legend: {
        display: true
      }
    }
  });
</script>