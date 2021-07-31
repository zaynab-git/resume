
<script>
  import { Bar, mixins } from 'vue-chartjs'
  export default {
    extends: Bar,
    props: ["chartData", "options"],

    mixins: [mixins.reactiveProp],
    
    mounted() {
      this.renderChart(this.computedData, this.options);
    }, 

    watch: {
      chartData: function(){
        console.log("change!")
      }
    },

    computed: {
    computedData: function () {
      return {
        labels: [
          "HTML",
          "CSS",
          "JavaScript",
          "React/Redux",
          "SQL",
          "python",
          "C",
          "java",
          "BootStrap",
          "Git",
        ],

        datasets: [
          {
            label: "Bar Chart",
            borderWidth: 1,
            backgroundColor: "#FF8A65",
            borderColor: "#FF8A65",
            pointBorderColor: "#FF8A65",
            data: [
              this.chartData.HTML,
              this.chartData.CSS,
              this.chartData.JavaScript,
              this.chartData["React/Redux"],
              this.chartData.SQL,
              this.chartData.python,
              this.chartData.C,
              this.chartData.java,
              this.chartData.BootStrap,
              this.chartData.Git,
            ],
          },
        ],
      };
    }
  }
}
</script>
