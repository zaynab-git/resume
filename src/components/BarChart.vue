

<script>
  import { Bar } from 'vue-chartjs'
  export default {
    extends: Bar,
    data() {
      return {
        chartData: {
          labels: ["HTML", "CSS", "JavaScript", "React/Redux", "SQL", "python", "C", "java", "BootStrap","Git"],
          
          datasets: [{
            label: 'Bar Chart',
            borderWidth: 1,
            backgroundColor: "#FF8A65",
            borderColor: "#FF8A65",
            pointBorderColor: '#FF8A65',
            data: [12, 12, 6, 6, 12, 12, 6, 12, 6, 6]
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>
