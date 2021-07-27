<template>
  <v-container class=" indigo darken-4 px-0 pt-10  ">

    <div class="deep-orange lighten-2 px-16">
      <v-row class="align-center justify-center py-5">
      
        <v-col class="flex-grow-0 flex-shrink-0" >
          <v-img style="border: 3px solid #1A237E;" class="rounded-circle pa-16" min-width="150" max-height="150" max-width="150" :src="require('../assets/zeynab.jpg')"></v-img>
        </v-col>

        <v-col  class="flex-grow-1 flex-shrink-0 " style="max-width: 600px; min-width: 310px;">
            <h1  class="font-weight-bold white--text text-center text-sm-left text-sm-h3" >ZEYNAB HEYDARZADEH</h1>
            <h4 class="font-weight-bold mt-5 indigo--text text--darken-4 text-center text-sm-left text-sm-h6" >B.SC. STUDENT IN COMPUTER ENGINEERING</h4>
        </v-col>
      </v-row>

    </div>

    <div class="mx-5 mt-10">
      <v-row class="align-start justify-center" >

        <v-col  class="flex-grow-1 flex-shrink-0 pa-10" style="  min-width: 310px;">
            <h2 class="font-weight-bold deep-orange--text text--lighten-2 text-center text-sm-left" >PROFILE</h2>
            <p class=" mt-5 white--text  text-center text-sm-left" >I am an enthusiastic, responsible and hard working person. I am able to work well both in a team environment as well as using own initiative.</p> 
        </v-col>

        <v-col  class="flex-grow-1 flex-shrink-0 pa-10" style="  min-width: 400px;">
            <h2 class="font-weight-bold deep-orange--text text--lighten-2 text-center text-sm-left pb-5" >CONTACT</h2>
            <v-row class="align-start justify-center justify-sm-start ml-sm-1 " >
              <v-icon color="deep-orange lighten-2 "> mdi-phone </v-icon>
              <p class=" white--text  text-center text-sm-left pl-2" >09156417902</p>
            </v-row>
            <v-row class="align-start justify-center justify-sm-start  ml-sm-1" >
              <v-icon color="deep-orange lighten-2"> mdi-map-marker </v-icon>
              <p class=" white--text  text-center text-sm-left pl-2" >Tehran, Hoseynmardi ST, Dorist APT</p>
            </v-row>
            <v-row class="align-start justify-center justify-sm-start  ml-sm-1" >
              <v-icon color="deep-orange lighten-2"> mdi-gmail </v-icon>
              <p class=" white--text  text-center text-sm-left pl-2" >zeinabheidarzadeh1377@gmail.com</p>
            </v-row>
            <v-row class="align-start justify-center justify-sm-start  ml-sm-1" >
              <v-icon color="deep-orange lighten-2 "> mdi-linkedin </v-icon>
              <p class=" white--text  text-center text-sm-left pl-2" >@zeinabHeidarzadeh</p>
            </v-row>
        </v-col>

      </v-row>

    </div>

    <div class="mx-5">
      <v-row class="align-start justify-center" >

        <v-col class="flex-grow-1 flex-shrink-0 pa-10" style="min-width: 310px;">
            <h2 class="font-weight-bold deep-orange--text text--lighten-2 text-center text-sm-left" >EDUCATION</h2>
            <p class=" mt-5 white--text  text-center text-sm-left" >B.Sc. in computer engineering at Amirkabir university of technology.</p> 
        </v-col>

        <v-col style=" max-width: 400px; min-width: 310px;"></v-col>

      </v-row>

    </div>

    <div class="mx-13 my-10">
      <h2 class="font-weight-bold deep-orange--text text--lighten-2 text-center text-sm-left " >PROGRAMMING LANGUAGES/SKILSS</h2>
      <bar-chart class="white--text mx-5 mt-10 "></bar-chart>
    </div>
    



    <!-- <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import BarChart from '../components/BarChart.vue'

export default {

  name: "Resume",
  components: {
    BarChart
  },
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
