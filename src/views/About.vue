<template>
  <div>
    <div style="width: 200px; margin: auto;">
    
     <v-combobox
        id="mycombox"
        v-model="select"
        :items="items"
        single-line
        label="Search for a resume"
      >
    <template v-slot:item="data">

      <v-row class="pa-3" v-on:click="select_resume(data.item)">
        <v-img
            style="border: 3px solid #1a237e"
            class="rounded-circle pa-5"
            min-width="30"
            max-height="30"
            max-width="30"
            :src = "require(`../assets/${images[data.item]}.jpg`)"
          ></v-img>

          <p class="ml-5 mt-3">{{ data.item }}</p>
      </v-row>  

    </template>

    </v-combobox>
    </div>
    <div>
      <router-view />
    </div>
  </div>
  


  
</template>s

<script>

export default {
  name: "About",
  data: () => ({
    select: '',
    items: [
      'Resume 1',
      'Resume 2'
    ],
    images: {
      'Resume 1': 'zeynab',
      'Resume 2': 'samane'
    },
    routers: {
      'Resume 1': 'Resume1',
      'Resume 2': 'Resume2'
    },
    
  }),

  methods: {
    select_resume: function(name){
      if(this.routers[name] != this.$route.name){
        this.$router.push({name: this.routers[name]})
      }
    }
  },
};
</script>
