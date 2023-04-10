<template>
    <div>
      <v-select :items="itemsClaveProdServ" placeholder="Clave de Producto" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "ClaveProdServ",
    data: () => ({
      itemsClaveProdServ: [],
    }),
    created(){
      this.getApiClaveProdServ();
    },
    methods:{
      getApiClaveProdServ() {
        axios.get("http://localhost:8090/auth/ClaveProdServ")
        .then((response) => {
          this.itemsClaveProdServ = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  