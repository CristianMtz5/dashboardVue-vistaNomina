<template>
    <div>
      <v-select :items="itemsClaveUnidad" placeholder="Clave Unidad" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "ClaveUnidad",
    data: () => ({
      itemsClaveUnidad: [],
    }),
    created(){
      this.getClaveUnidad();
    },
    methods:{
      getClaveUnidad() {
        axios.get("http://localhost:8090/auth/ClaveUnidad")
        .then((response) => {
          this.itemsClaveUnidad = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  