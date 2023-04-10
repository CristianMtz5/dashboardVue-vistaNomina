<template>
    <div>
      <v-select :items="itemsMoneda" placeholder="Moneda" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Moneda",
    data: () => ({
      itemsMoneda: [],
    }),
    created(){
      this.getApiMoneda();
    },
    methods:{
      getApiMoneda() {
        axios.get("http://localhost:8090/auth/Moneda")
        .then((response) => {
          this.itemsMoneda = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  