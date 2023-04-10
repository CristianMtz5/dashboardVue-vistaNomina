<template>
    <div>
      <v-select :items="itemsExportacion" placeholder="Exportacion" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "Exportacion",
    data: () => ({
      itemsExportacion: [],
    }),
    created(){
      this.getApiExportacion();
    },
    methods:{
      getApiExportacion() {
        axios.get("http://localhost:8090/auth/Exportacion")
        .then((response) => {
          this.itemsExportacion = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  