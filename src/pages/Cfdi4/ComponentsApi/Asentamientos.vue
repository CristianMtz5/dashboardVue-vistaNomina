<template>
    <div>
      <v-select :items="itemsAsentamiento" placeholder="Asentamientos" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "Asentamientos",
    data: () => ({
      itemsAsentamiento: [],
    }),
    created(){
      this.getApiAsentamientos();
    },
    methods:{
      getApiAsentamientos() {
        axios.get("http://localhost:8090/auth/Asentamientos")
        .then((response) => {
          this.itemsAsentamiento = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  