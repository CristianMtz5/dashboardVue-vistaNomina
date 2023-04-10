<template>
    <div>
      <v-select :items="itemsPatenteAduanal" placeholder="Patente Aduanal" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "PatenteAduanal",
    data: () => ({
      itemsPatenteAduanal: [],
    }),
    created(){
      this.getApiPatenteAduanal();
    },
    methods:{
      getApiPatenteAduanal() {
        axios.get("http://localhost:8090/auth/PatenteAduanal")
        .then((response) => {
          this.itemsPatenteAduanal = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  