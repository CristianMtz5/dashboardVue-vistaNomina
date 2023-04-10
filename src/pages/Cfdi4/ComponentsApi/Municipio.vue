<template>
    <div>
      <v-select :items="itemsMunicipio" placeholder="Municipio" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "Municipio",
    data: () => ({
      itemsMunicipio: [],
    }),
    created(){
      this.getApiMunicipio();
    },
    methods:{
      getApiMunicipio() {
        axios.get("http://localhost:8090/auth/Municipio")
        .then((response) => {
          this.itemsMunicipio = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  