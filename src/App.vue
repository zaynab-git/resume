<template>
  <v-app>

    <div class=" d-flex align-center justify-center grey lighten-2">

      <router-link class="pa-5" to="/">{{ $t("nav-bar.home") }}</router-link>
      <router-link class="pa-5" to="/about">{{ $t("nav-bar.about") }}</router-link>

      <div style="width: 150px;">
    
     <v-combobox
        id="mycombox"
        v-model="select"
        :items="items"
        single-line
        label="language"
      >
    <template v-slot:item="data" >

      <v-row class="pa-3" v-on:click="select_language(data.item)">
        <v-img
            style="border: 3px solid #1a237e"
            class="rounded-circle pa-5"
            min-width="30"
            max-height="30"
            max-width="30"
            :src = "require(`./assets/${images[data.item]}.jpg`)"
          ></v-img>

          <p class="ml-2 mt-2">{{ data.item }}</p>
      </v-row>  

    </template>

    </v-combobox>
    </div>

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
      select: '',
      items: [
        'English',
        'فارسی'
      ],
      images: {
        'English': 'english',
        'فارسی': 'farsi'
      },
      lang: {
        "English": 'en',
        "فارسی": 'fa'
      }
    }),

  methods: {
    select_language: function(name){
      this.$i18n.locale = this.lang[name]
    }
  },
};
</script>
