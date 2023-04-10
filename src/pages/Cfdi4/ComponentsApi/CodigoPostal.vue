<template>
    <div>
      <v-select :items="itemsCodigoPostal" placeholder="Codigo Postal" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "CodigoPostal",
    data: () => ({
      itemsCodigoPostal: [],
    }),
    created(){
      this.getApiCodPostal();
    },
    methods:{
      getApiCodPostal() {
        axios.get("http://localhost:8090/auth/CodigoPostal")
        .then((response) => {
          this.itemsCodigoPostal = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  