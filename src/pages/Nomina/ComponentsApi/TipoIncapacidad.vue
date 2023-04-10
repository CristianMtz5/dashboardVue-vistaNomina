<template>
    <div>
      <v-select
        :items="itemsTipoIncapacidad"
        placeholder="Tipo de Incapacidad"
        item-text="descripcion"
        dense
        outlined
      ></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TipoIncapacidad",
    data: () => ({
      itemsTipoIncapacidad: [],
    }),
    created() {
      this.getApiTipoIncapacidad();
    },
    methods: {
      getApiTipoIncapacidad() {
        axios.get("http://localhost:8090/auth/TipoIncapacidad").then((response) => {
          this.itemsTipoIncapacidad = response.data;
        });
      },
    },
  };
  </script>
  
  <style scoped></style>
  