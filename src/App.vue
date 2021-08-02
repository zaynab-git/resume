<template>
  <v-app>

    <p>{{ $t("message") }}</p>

    <div class=" d-flex align-center justify-center grey lighten-2">

      <router-link class="pa-5" to="/">Home</router-link>
      <router-link class="pa-5" to="/about">About</router-link>

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
