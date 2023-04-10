<template>
    <div>
      <v-select :items="itemsPeriodicidad" placeholder="Periodicidad" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "Periodicidad",
    data: () => ({
      itemsPeriodicidad: [],
    }),
    created(){
      this.getApiPeriodicidad();
    },
    methods:{
      getApiPeriodicidad() {
        axios.get("http://localhost:8090/auth/Periodicidad")
        .then((response) => {
          this.itemsPeriodicidad = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  