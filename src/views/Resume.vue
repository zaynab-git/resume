<template>
  <div class="grey darken-3">
  <v-container class="indigo darken-4 px-0 pt-10">
    <div class="deep-orange lighten-2 px-16">
      <v-row class="align-center justify-center py-5">
        <v-col class="flex-grow-0 flex-shrink-0">
          <v-img
            style="border: 3px solid #1a237e"
            class="rounded-circle pa-16"
            min-width="150"
            max-height="150"
            max-width="150"
            :src = "this.$route.name == 'Resume1' ? require(`../assets/zeynab.jpg`) : require(`../assets/samane.jpg`)"
          ></v-img>
        </v-col>

        <v-col
          class="flex-grow-1 flex-shrink-0"
          style="max-width: 600px; min-width: 310px"
        >
          <h1
            class="
              font-weight-bold
              white--text
              text-center text-sm-left text-sm-h3
            "
          >
            {{this.$route.name == 'Resume1' ?  $t("resumes.resume1.name") : $t("resumes.resume2.name")}}
          </h1>
          <h4
            class="
              font-weight-bold
              mt-5
              indigo--text
              text--darken-4 text-center text-sm-left text-sm-h6
            "
          >
            {{this.$route.name == 'Resume1' ? $t("resumes.resume1.major") : $t("resumes.resume2.major") }}
          </h4>
        </v-col>
      </v-row>
    </div>

    <div class="mx-5 mt-10">
      <v-row class="align-start justify-center">
        <v-col class="flex-grow-1 flex-shrink-0 pa-10" style="min-width: 310px">
          <h2
            class="
              font-weight-bold
              deep-orange--text
              text--lighten-2 text-center text-sm-left
            "
          >
            {{ $t("resumes.profile") }}
          </h2>
          <p class="mt-5 white--text text-center text-sm-left">
            {{this.$route.name == 'Resume1' ?  $t("resumes.resume1.profile") : $t("resumes.resume2.profile") }}
          </p>
        </v-col>

        <v-col class="flex-grow-1 flex-shrink-0 pa-10" style="min-width: 400px">
          <h2
            class="
              font-weight-bold
              deep-orange--text
              text--lighten-2 text-center text-sm-left
              pb-5
            "
          >
            {{ $t("resumes.contact") }}
          </h2>
          <v-row class="align-start justify-center justify-sm-start ml-sm-1">
            <v-icon color="deep-orange lighten-2 "> mdi-phone </v-icon>
            <p class="white--text text-center text-sm-left pl-2">
              my-phone-number
            </p>
          </v-row>
          <v-row class="align-start justify-center justify-sm-start ml-sm-1">
            <v-icon color="deep-orange lighten-2"> mdi-map-marker </v-icon>
            <p class="white--text text-center text-sm-left pl-2">my-address</p>
          </v-row>
          <v-row class="align-start justify-center justify-sm-start ml-sm-1">
            <v-icon color="deep-orange lighten-2"> mdi-gmail </v-icon>
            <p class="white--text text-center text-sm-left pl-2">
              my-email@gmail.com
            </p>
          </v-row>
          <v-row class="align-start justify-center justify-sm-start ml-sm-1">
            <v-icon color="deep-orange lighten-2 "> mdi-linkedin </v-icon>
            <p class="white--text text-center text-sm-left pl-2">@my-linkdin</p>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="mx-5">
      <v-row class="align-start justify-center">
        <v-col class="flex-grow-1 flex-shrink-0 pa-10" style="min-width: 310px">
          <h2
            class="
              font-weight-bold
              deep-orange--text
              text--lighten-2 text-center text-sm-left
            "
          >
            {{ $t("resumes.education") }}
          </h2>
          <p class="mt-5 white--text text-center text-sm-left">
            {{this.$route.name == 'Resume1' ? $t("resumes.resume1.education")  :  $t("resumes.resume2.education")}}
          </p>
        </v-col>

        <v-col style="max-width: 400px; min-width: 310px"></v-col>
      </v-row>
    </div>

    <div class="mx-13 my-10">
      <h2
        class="
          font-weight-bold
          deep-orange--text
          text--lighten-2 text-center text-sm-left
        "
      >
        {{ $t("resumes.skills") }}
      </h2>
      <button
        class="deep-orange lighten-2 px-3 py-1 indigo--text text--darken-4 my-5"
        @click="randomize()"
      >
        {{ $t("resumes.randomize") }}
      </button>
      <bar-chart
        ref="bar"
        :chartData="computedData"
        :options="options"
        class="white--text mx-5 mt-10"
      ></bar-chart>
    </div>
  </v-container>
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";

export default {
  name: "Resume",
  components: {
    BarChart,
  },
  data: () => ({

    chartDataSet: {
        HTML: 3,
        CSS: 4,
        JavaScript: 5,
        "React/Redux": 7,
        SQL: 1,
        python: 12,
        C: 5,
        java: 2,
        BootStrap: 8,
        Git: 6,
      },


      options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
    },  
  }),

  
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
              this.chartDataSet.HTML,
              this.chartDataSet.CSS,
              this.chartDataSet.JavaScript,
              this.chartDataSet["React/Redux"],
              this.chartDataSet.SQL,
              this.chartDataSet.python,
              this.chartDataSet.C,
              this.chartDataSet.java,
              this.chartDataSet.BootStrap,
              this.chartDataSet.Git,
            ],
          },
        ],
      };
    }
  },
  
  methods: {
    randomize: function () {
      for (let item in this.chartDataSet) {
        this.chartDataSet[item] = Math.floor(Math.random() * 12);
      }
    },
  },
};
</script>
