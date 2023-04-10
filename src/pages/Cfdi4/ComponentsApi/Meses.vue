<template>
    <div>
      <v-select :items="itemsMeses" placeholder="Meses" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "Meses",
    data: () => ({
      itemsMeses: [],
    }),
    created(){
      this.getApiMeses();
    },
    methods:{
      getApiMeses() {
        axios.get("http://localhost:8090/auth/Meses")
        .then((response) => {
          this.itemsMeses = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  