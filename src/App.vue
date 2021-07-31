<template>
  <v-app>
    <div class=" d-flex align-center justify-center grey lighten-2">
      <router-link class="pa-5" to="/">Home</router-link>
      <router-link class="pa-5" to="/resume_1" >resume_1</router-link>
      <router-link class="pa-5" to="/resume_2" >resume_2 </router-link>
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
