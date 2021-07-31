<template>
  <v-app>
    <div class=" d-flex align-center justify-center grey lighten-2">

      <router-link class="pa-5" to="/">Home</router-link>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
          >
            resumes
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-img
            style="border: 3px solid #1a237e"
            class="rounded-circle pa-5"
            min-width="10"
            max-height="10"
            max-width="10"
            min-height="10"
            src = './assets/zeynab.jpg'
          ></v-img>
            <router-link class="pa-5" to="/resume_1" >zeynab heydarzadeh</router-link>
          </v-list-item>
          <v-list-item>
            <v-img
            style="border: 3px solid #1a237e"
            class="rounded-circle pa-5"
            min-width="10"
            max-height="10"
            max-width="10"
            min-height="10"
            src = './assets/samane.jpg'
          ></v-img>
            <router-link class="pa-5" to="/resume_2" >samane shariati </router-link>
          </v-list-item>

        </v-list>
      </v-menu>


    </div>
  
    <v-main  >
      <router-view />
    </v-main>
    
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
