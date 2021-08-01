<template>
  <div>
    <h1 class="d-flex justify-center pa-5">this is home page</h1>

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
  
</template>

<script>


export default {
  name: "Home",
  data: () => ({
    select: [''],
    items: [
      'Resume 1',
      'Resume 2'
    ],
    images: {
      'Resume 1': 'zeynab',
      'Resume 2': 'samane'
    }
  }),

  methods: {
    select_resume: function(name){
      console.log(name)
    }
  },
  // watch: {
  //   select_resume: function(){
  //     console.log(this.select)
  //   }
  // }
};
</script>
