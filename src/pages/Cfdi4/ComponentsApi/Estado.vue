<template>
    <div>
      <v-select :items="itemsEstado" placeholder="Estado" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "Estado",
    data: () => ({
      itemsEstado: [],
    }),
    created(){
      this.getApiEstado();
    },
    methods:{
      getApiEstado() {
        axios.get("http://localhost:8090/auth/Estado")
        .then((response) => {
          this.itemsEstado = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  