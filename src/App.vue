<template>
  <v-app>
  
    <v-main  class="grey darken-3">
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
