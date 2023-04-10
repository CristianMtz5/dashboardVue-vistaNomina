<template>
    <div>
      <v-select :items="itemsPais" placeholder="Pais" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "Pais",
    data: () => ({
      itemsPais: [],
    }),
    created(){
      this.getApiPais();
    },
    methods:{
      getApiPais() {
        axios.get("http://localhost:8090/auth/Pais")
        .then((response) => {
          this.itemsPais = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  