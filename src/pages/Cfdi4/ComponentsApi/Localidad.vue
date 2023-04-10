<template>
    <div>
      <v-select :items="itemsLocalidad" placeholder="Localidad" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "Localidad",
    data: () => ({
      itemsLocalidad: [],
    }),
    created(){
      this.getApiLocalidad();
    },
    methods:{
      getApiLocalidad() {
        axios.get("http://localhost:8090/auth/Localidad")
        .then((response) => {
          this.itemsLocalidad = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  