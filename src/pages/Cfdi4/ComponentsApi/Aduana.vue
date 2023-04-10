<template>
    <div>
      <v-select :items="itemsAduana" placeholder="Aduana" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Aduana",
    data: () => ({
      itemsAduana: [],
    }),
    created(){
      this.getApiAduana();
    },
    methods:{
      getApiAduana() {
        axios.get("http://localhost:8090/auth/Aduana")
        .then((response) => {
          this.itemsAduana = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  