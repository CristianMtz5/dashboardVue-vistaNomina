<template>
    <div>
      <v-select :items="itemsTipoFactor" placeholder="Tipo de Factor" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TipoFactor",
    data: () => ({
      itemsTipoFactor: [],
    }),
    created(){
      this.getApiFactor();
    },
    methods:{
      getApiFactor() {
        axios.get("http://localhost:8090/auth/TipoFactor")
        .then((response) => {
          this.itemsTipoFactor = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  